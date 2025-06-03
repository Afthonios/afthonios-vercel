export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const lastSend = new Map<string, number>();
const WINDOW_MS = 60 * 1000; // 60 seconds

export async function POST(req: Request) {
  let data;
  try {
    data = await req.json();
    console.log('📥 Received form data:', data);
  } catch (error) {
    console.error('❌ Failed to parse JSON body:', error);
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (data.website?.trim()) {
    console.warn('🕷️ Spam attempt detected via honeypot field.');
    return NextResponse.json({ success: true }); // pretend it's OK
  }

  const ip = req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for') ?? 'unknown';
  const now = Date.now();
  const last = lastSend.get(ip);
  if (last && now - last < WINDOW_MS) {
    return NextResponse.json({
      error: 'Trop de requêtes — veuillez patienter un moment.\nToo many requests — please wait a moment.',
    }, { status: 429 });
  }
  lastSend.set(ip, now);

  // Store Brevo SMTP credentials in .env.local
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: '"Nicolai Kalb" <nicolai.kalb@afthonios.com>',
    to: 'nicolai.kalb@gmail.com',
    replyTo: data.email,
    subject: `Nouveau message – ${data.source} (${data.prenom} ${data.nom})`,
    text: `
Prénom : ${data.prenom}
Nom : ${data.nom}
Email : ${data.email}
Organisation : ${data.organisation}

Message :
${data.message}
    `,
  };

  try {
    console.log('⏳ Sending email to Aysseline...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    return NextResponse.json({ success: true, hideForm: true });
  } catch (error) {
    console.error('❌ Erreur envoi email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
