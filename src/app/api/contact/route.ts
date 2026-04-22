import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, company, email, phone, service, message } = body;

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("CRITICAL: GMAIL_USER or GMAIL_APP_PASSWORD is not defined in environment variables.");
            return NextResponse.json(
                { error: "Email configuration missing on server." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Inquiry from ${name} - ${company || "No Company"}`,
            text: `You have received a new inquiry.\n\nName: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Website Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Company:</strong> ${company || "Not provided"}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service:</strong> ${service || "Not specified"}</p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <h4 style="margin-top: 0;">Message:</h4>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        };

        console.log(`Attempting to send email from ${process.env.GMAIL_USER}...`);
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
