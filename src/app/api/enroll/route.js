import nodemailer from "nodemailer";

export const runtime = "nodejs";

const ALLOWED_PROGRAMS = ["tajweed", "tarteel", "recitation", "hifz", "arabic", "upcoming", ""];

function sanitize(str) {
    if (typeof str !== "string") return "";
    return str.trim().slice(0, 500);
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    const name = sanitize(body.name);
    const age = sanitize(body.age);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const program = sanitize(body.program);
    const message = sanitize(body.message);

    if (!name || !email) {
        return Response.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!ALLOWED_PROGRAMS.includes(program)) {
        return Response.json({ error: "Invalid program selection." }, { status: 400 });
    }

    const programLabels = {
        tajweed: "Tajweed Basics - Junior",
        tarteel: "Tajweed Foundations - Senior",
        recitation: "Qur'anic Recitation",
        hifz: "Hifz-e-Qur'an (up to 3 Juz)",
        arabic: "Arabic for Beginners",
        upcoming: "Upcoming — Qiraat / Calligraphy / Tarjuma",
        "": "Not specified",
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:8px;overflow:hidden;">
            <div style="background:#0a0a0a;padding:24px 32px;text-align:center;">
                <h1 style="color:#c9a84c;font-size:20px;margin:0;letter-spacing:.05em;">Al Hiraa Islamic Centre</h1>
                <p style="color:#888;font-size:13px;margin:6px 0 0;">New Enrollment Inquiry</p>
            </div>
            <div style="padding:32px;background:#ffffff;">
                <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333;">
                    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;width:160px;font-weight:600;">Student Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${name}</td></tr>
                    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-weight:600;">Age / Level</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${age || "—"}</td></tr>
                    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-weight:600;">Parent Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${email}</td></tr>
                    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-weight:600;">WhatsApp / Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${phone || "—"}</td></tr>
                    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-weight:600;">Course of Interest</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${programLabels[program]}</td></tr>
                    ${message ? `<tr><td style="padding:10px 0;color:#888;font-weight:600;vertical-align:top;">Message</td><td style="padding:10px 0;">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
                </table>
            </div>
            <div style="background:#f0f0f0;padding:16px 32px;text-align:center;font-size:12px;color:#999;">
                Sent from the Al Hiraa enrollment form · alhiraa23@gmail.com
            </div>
        </div>
    `;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
        return Response.json({ error: "Server email configuration is missing." }, { status: 500 });
    }

    try {
        await transporter.sendMail({
            from: `"Al Hiraa Enrollment" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `Enrollment Inquiry — ${name}`,
            html,
        });

        transporter.close();
        return Response.json({ success: true });
    } catch (err) {
        console.error("Email send error:", err.message, err.code);
        return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }
}
