import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, message } = body;

    // 1. Save to Database
    const newContact = await Contact.create({
      name,
      email,
      message,
      ip: req.headers.get('x-forwarded-for') || 'Unknown IP'
    });

    console.log("✅ Saved to MongoDB successfully");

    // 2. Setup Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // 3. Send Email & Log Result
    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("❌ EMAIL FAILED:", emailError); // <--- CHECK YOUR TERMINAL FOR THIS
    }

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });

  } catch (error) {
    console.error("❌ DATABASE ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}