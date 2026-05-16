import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, message, services, budget } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Send notification to OSTOIA inbox
    await resend.emails.send({
      from: "OSTOIA&CO Contact <contact@ostoia.co>",
      to: ["ostojich.vojin@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #F5F0E8; padding: 40px; border-radius: 6px;">
          <div style="border-bottom: 1px solid rgba(201,168,76,0.2); padding-bottom: 24px; margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.3em; color: #C9A84C; text-transform: uppercase; margin: 0 0 8px;">OSTOIA&amp;CO — New Inquiry</p>
            <h1 style="font-size: 28px; font-weight: 700; color: #F5F0E8; margin: 0; line-height: 1.2;">${name}</h1>
            ${company ? `<p style="color: rgba(245,240,232,0.5); margin: 6px 0 0; font-size: 14px;">${company}</p>` : ""}
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(245,240,232,0.4); font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; width: 140px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #F5F0E8; font-size: 14px;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
            </tr>
            ${services && services.length > 0 ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(245,240,232,0.4); font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">Services</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #F5F0E8; font-size: 14px;">${services.join(", ")}</td>
            </tr>` : ""}
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(245,240,232,0.4); font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #C9A84C; font-size: 14px; font-weight: 600;">${budget}</td>
            </tr>` : ""}
          </table>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 4px; padding: 24px; margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 10px; letter-spacing: 0.25em; color: rgba(245,240,232,0.35); text-transform: uppercase; margin: 0 0 12px;">Message</p>
            <p style="font-size: 15px; line-height: 1.75; color: rgba(245,240,232,0.8); margin: 0; white-space: pre-line;">${message}</p>
          </div>

          <a href="mailto:${email}?subject=Re: Your inquiry to OSTOIA%26CO"
            style="display: inline-block; background: #C9A84C; color: #0A1628; padding: 12px 28px; border-radius: 3px; font-family: monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; font-weight: 600;">
            Reply to ${name}
          </a>

          <p style="margin-top: 32px; font-family: monospace; font-size: 10px; color: rgba(245,240,232,0.2); letter-spacing: 0.15em;">
            OSTOIA&amp;CO · Milan · ostoia.co
          </p>
        </div>
      `,
    });

    // Send auto-reply to prospect
    await resend.emails.send({
      from: "OSTOIA&CO <hello@ostoia.co>",
      to: [email],
      subject: "We received your inquiry — OSTOIA&CO",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #F5F0E8; padding: 40px; border-radius: 6px;">
          <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.3em; color: #C9A84C; text-transform: uppercase; margin: 0 0 24px;">OSTOIA&amp;CO</p>

          <h1 style="font-size: 26px; font-weight: 700; color: #F5F0E8; margin: 0 0 20px; line-height: 1.2;">
            Thank you, ${name}.
          </h1>

          <p style="font-size: 15px; line-height: 1.8; color: rgba(245,240,232,0.65); margin: 0 0 16px;">
            We've received your message and will get back to you within one business day.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: rgba(245,240,232,0.65); margin: 0 0 32px;">
            In the meantime, feel free to explore our work or read our journal on boutique travel digital strategy.
          </p>

          <div style="border-top: 1px solid rgba(201,168,76,0.15); padding-top: 28px; margin-top: 8px;">
            <p style="font-family: monospace; font-size: 10px; letter-spacing: 0.2em; color: rgba(245,240,232,0.25); text-transform: uppercase; margin: 0 0 4px;">OSTOIA&amp;CO</p>
            <p style="font-size: 13px; color: rgba(245,240,232,0.35); margin: 0;">Milan · Boutique Travel Digital Agency</p>
            <a href="https://ostoia.co" style="font-family: monospace; font-size: 11px; color: #C9A84C; letter-spacing: 0.15em; text-decoration: none;">ostoia.co</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
