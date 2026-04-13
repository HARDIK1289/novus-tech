import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/contact";
import { ContactSchema } from "@/validators/contact.validator";
import { sendContactEmail } from "@/lib/mailer";
import { rateLimiter } from "@/lib/rateLimiter";
import { getClientIp } from "@/lib/getClientIp";
import sanitizeHtml from "sanitize-html";

// simple bot detection (good enough)
function isBot(userAgent) {
  if (!userAgent) return false;

  const suspicious = ["curl", "wget", "python", "node-fetch"];

  return suspicious.some((bot) =>
    userAgent.toLowerCase().includes(bot)
  );
}

export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch contacts" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "";

    // basic rate limiting (bots stricter)
    const allowed = rateLimiter(
      ip,
      userAgent,
      isBot(userAgent) ? 2 : 5,
      60 * 1000
    );

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    // input validation
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    // sanitization
    const cleanName = sanitizeHtml(parsed.data.name, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const cleanEmail = sanitizeHtml(parsed.data.email, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const cleanPhone = sanitizeHtml(parsed.data.phone, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const cleanMessage = sanitizeHtml(parsed.data.message, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    // post-sanitize validation
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters long" },
        { status: 400 }
      );
    }

    if (!cleanEmail) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!cleanPhone || cleanPhone.length < 8) {
      return NextResponse.json(
        { success: false, error: "Phone number must be at least 8 characters long" },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // simple duplicate protection (important, low effort)
    const existing = await Contact.findOne({
      email: cleanEmail,
      message: cleanMessage,
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: "Duplicate submission" },
        { status: 400 }
      );
    }

    // save
    const newContact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      ip,
    });

    // send email (non-blocking)
    sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
    }).catch((err) => {
      console.error("[EMAIL ERROR]", err.message);
    });

    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 }
    );

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}