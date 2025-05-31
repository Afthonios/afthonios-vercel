import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  let data;
  try {
    data = await req.json();
    console.log('📥 Received form data:', data);
  } catch (error) {
    console.error('❌ Failed to parse JSON body:', error);
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

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
    to: 'aysseline.delardemelle@afthonios.com',
    replyTo: data.email,
    subject: `Nouveau message du site Afthonios (${data.prenom} ${data.nom})`,
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
