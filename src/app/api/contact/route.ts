import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"InfraMoon Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[InfraMoon] Nuevo contacto de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0a0f;color:#dce8f5;border-radius:12px;overflow:hidden;border:1px solid rgba(0,212,255,0.2)">
          <div style="background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,58,237,0.15));padding:24px 28px;border-bottom:1px solid rgba(0,212,255,0.15)">
            <h1 style="margin:0;font-size:20px;color:#fff">🌑 InfraMoon — Nuevo contacto</h1>
          </div>
          <div style="padding:24px 28px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;color:rgba(255,255,255,0.5);font-size:12px;width:100px">NOMBRE</td>
                <td style="padding:8px 0;color:#dce8f5;font-weight:600">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:rgba(255,255,255,0.5);font-size:12px">EMAIL</td>
                <td style="padding:8px 0;color:#00d4ff"><a href="mailto:${email}" style="color:#00d4ff">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:rgba(255,255,255,0.5);font-size:12px">EMPRESA</td>
                <td style="padding:8px 0;color:#dce8f5">${company || "—"}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.08)">
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.5);font-size:12px">MENSAJE</p>
              <p style="margin:0;color:#dce8f5;line-height:1.6;white-space:pre-wrap">${message}</p>
            </div>
          </div>
          <div style="padding:16px 28px;border-top:1px solid rgba(255,255,255,0.05);text-align:center">
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.3)">Enviado desde el formulario de InfraMoon · ${new Date().toLocaleString("es-AR")}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Error enviando email:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
