import { Resend } from "resend";
import nodemailer from "nodemailer";

// Lazy initialization for Resend (only when needed)
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendEmailWithResend({
  to,
  subject,
  html,
  from = "onboarding@resend.dev",
}: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    throw error;
  }
}

// Lazy initialization for Nodemailer (only when needed)
function getNodemailerTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function sendEmailWithNodemailer({
  to,
  subject,
  html,
  from = process.env.SMTP_FROM || "noreply@example.com",
}: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    const transporter = getNodemailerTransporter();
    const info = await transporter.sendMail({
      from,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email with Nodemailer:", error);
    throw error;
  }
}
