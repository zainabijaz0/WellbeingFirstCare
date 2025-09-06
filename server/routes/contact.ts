import type { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  number: z.string().optional().nullable(),
  message: z.string().min(1),
});

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port) {
    throw new Error(
      "SMTP not configured. Please set SMTP_HOST and SMTP_PORT (and optionally SMTP_USER/SMTP_PASS).",
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });

  return transporter;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const parsed = ContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: "Invalid payload", details: parsed.error.flatten() });
    }

    const data = parsed.data;
    const to = process.env.MAIL_TO || "info@wellbeingfirstcare.com";
    const from = process.env.MAIL_FROM || `no-reply@${req.hostname}`;

    const transporter = getTransport();

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.number ?? "-"}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${data.message}</p>
    `;

    await transporter.sendMail({
      to,
      from,
      subject: `Contact form - ${data.name}`,
      replyTo: data.email,
      html,
    });

    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to send message" });
  }
};
