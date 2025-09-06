import type { RequestHandler } from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import { z } from "zod";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const CareerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
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

export const uploadResume = upload.single("resume");

export const handleCareer: RequestHandler = async (req, res) => {
  try {
    const parsed = CareerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: "Invalid payload", details: parsed.error.flatten() });
    }

    const to = process.env.MAIL_TO || "info@wellbeingfirstcare.com";
    const from = process.env.MAIL_FROM || `no-reply@${req.hostname}`;

    const { firstName, lastName, email, phone, message } = parsed.data;

    const transporter = getTransport();

    const html = `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone ?? "-"}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message ?? "-"}</p>
    `;

    await transporter.sendMail({
      to,
      from,
      subject: `Career application - ${firstName} ${lastName}`,
      replyTo: email,
      html,
    });

    res.json({ ok: true });
  } catch (err: any) {
    res
      .status(500)
      .json({ error: err.message || "Failed to submit application" });
  }
};
