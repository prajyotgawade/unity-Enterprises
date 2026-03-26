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

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New Inquiry from ${name} - ${company || "No Company"}`,
            text: `You have received a new inquiry.\n\nName: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`,
            html: `<h3>New Inquiry</h3><p><strong>Name:</strong> ${name}</p><p><strong>Company:</strong> ${company || "Not provided"}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Service:</strong> ${service || "Not specified"}</p><hr/><p>${message.replace(/\n/g, "<br>")}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
