import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendEmailWithResend, sendEmailWithNodemailer } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Choose email provider based on env var or default to Resend
    const emailProvider = process.env.EMAIL_PROVIDER || "resend";

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.whatsapp ? `<p><strong>WhatsApp:</strong> ${validatedData.whatsapp}</p>` : ''}
      ${validatedData.plan ? `<p><strong>Plan:</strong> ${validatedData.plan}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${validatedData.message}</p>
    `;

    if (emailProvider === "resend") {
      await sendEmailWithResend({
        to: process.env.CONTACT_EMAIL || "admin@example.com",
        subject: `New Quote Request from ${validatedData.email}`,
        html: emailContent,
      });
    } else {
      await sendEmailWithNodemailer({
        to: process.env.CONTACT_EMAIL || "admin@example.com",
        subject: `New Quote Request from ${validatedData.email}`,
        html: emailContent,
      });
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 400 }
    );
  }
}
