import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, service, message } = await request.json();
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email Recipient
    const recipientEmail = "Unityenterprises36@gmail.com";

    // Only send if mail environment variables are configured
    if (process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT || 587),
        secure: false,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
      });

      const mailBody = `
        New Inquiry Received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Service: ${service || 'General Inquiry'}
        
        Message:
        ${message}
      `;

      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.MAIL_USER,
        to: recipientEmail,
        subject: `[Unity Inquiry] ${service || 'New Message'} from ${name}`,
        text: mailBody,
      });
    } else {
        console.warn("Mail environment variables not set. Inquiry received but email not sent.");
        console.log("Inquiry Data:", { name, email, company, phone, service, message });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


