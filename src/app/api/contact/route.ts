import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, company, service, message } = await req.json();

        // 0. Check for environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment variables");
            return NextResponse.json(
                { error: "Email configuration missing" },
                { status: 500 }
            );
        }

        // 1. Create a transporter using Gmail service
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // 2. Setup email data
        const mailOptions = {
            from: `"Unity Enterprises Contact Form" <${process.env.GMAIL_USER}>`,
            to: "Sales@unitytech.in", // The owner's email
            replyTo: email, // Allow owner to reply directly to the sender
            cc: "Unityenterprises36@gmail.com, Jitesh@unitytech.in",
            subject: `New Inquiry: ${service ? service.toUpperCase() : 'General Inquiry'} from ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 30px; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
                    <div style="text-align: center; margin-bottom: 25px;">
                        <h1 style="color: #2563eb; margin: 0; font-size: 24px;">New Business Inquiry</h1>
                        <p style="color: #64748b; font-size: 14px;">Unity Enterprises Website</p>
                    </div>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                        <h3 style="margin-top: 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Contact Details</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
                                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
                                <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td>
                                <td style="padding: 8px 0; color: #1e293b;">${company || "Not Provided"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b;"><strong>Service:</strong></td>
                                <td style="padding: 8px 0; color: #1e293b;"><span style="background-color: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; text-transform: uppercase;">${service || "General"}</span></td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Message</h3>
                        <div style="white-space: pre-wrap; color: #334155; line-height: 1.6; background-color: #ffffff; padding: 15px; border: 1px solid #f1f5f9; border-radius: 6px;">
                            ${message}
                        </div>
                    </div>

                    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
                        <p>This inquiry was generated from the Unity Enterprises contact form.</p>
                        <p>&copy; ${new Date().getFullYear()} Unity Enterprises. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        // 3. Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email", details: error.message },
            { status: 500 }
        );
    }
}
