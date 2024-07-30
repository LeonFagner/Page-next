import { NextResponse } from 'next/server';
import { SMTPClient } from 'emailjs';

export async function POST(req) {
  try {
    const body = await req.text();
    const { messageBody } = JSON.parse(body);

    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.PASSWORD,
      host: 'smtp.gmail.com',
      ssl: true,
    });

    await client.sendAsync({
      text: messageBody,
      from: 'leonfagnerr@gmail.com',
      to: 'leonfagnerr@gmail.com',
      subject: 'Lead - Landingpage',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
