import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, company, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email, and message are required" }, { status: 400 });
    }

    // 1. Save to Database
    const lead = await prisma.contactLead.create({
      data: {
        name,
        email,
        phone,
        message: `[Service: ${service || 'N/A'}] [Company: ${company || 'N/A'}]\n\n${message}`,
      },
    });

    // 2. Setup Nodemailer Transporter
    // Only attempt to send email if SMTP_PASS is configured
    if (process.env.SMTP_PASS && process.env.SMTP_PASS !== "YOUR_SMTP_PASSWORD") {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.hostinger.com",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email Template
      const mailOptions = {
        from: `"${name} via CodeNClicks" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send to yourself
        replyTo: email,
        subject: `New Lead: ${service ? service : 'General Inquiry'} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">New Lead Received!</h2>
            <p>You have received a new contact request from your website.</p>
            <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service Needed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${service || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #777;">This email was sent automatically from the CodeNClicks IT Solutions website.</p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We don't throw here because the lead was successfully saved to the database.
      }
    }

    return NextResponse.json({ message: "Lead submitted successfully", lead }, { status: 201 });
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ message: "An error occurred while submitting the form", errorDetails: error?.message || error?.toString() || "Unknown error" }, { status: 500 });
  }
}
