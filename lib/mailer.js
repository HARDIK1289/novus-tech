import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async ({ name, email, message }) => {
  return await resend.emails.send({
    from: "onboarding@resend.dev", // sender (Resend)
    to: "novustech07@gmail.com",   // YOUR inbox (important)
    subject: `🚀 New Lead from ${name}`,
    
    reply_to: email, // 🔥 THIS is key
    
    text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};