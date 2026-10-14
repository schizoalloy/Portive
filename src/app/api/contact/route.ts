import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL ?? "support@portiveimpex.com";

const serviceLabels: Record<string, string> = {
  "canton-fair": "Canton Fair",
  "export-services": "Export Services",
  "import-services": "Import Services",
  "sourcing-procurement": "Sourcing & Procurement",
  "freight-logistics": "Freight Forwarding & Logistics",
  "other": "Other / General Enquiry",
};

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, service, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 422 });
  }

  const serviceLabel = service ? serviceLabels[service] ?? service : "Not specified";

  const { error } = await resend.emails.send({
    from: "Portive Exports Website <noreply@portiveimpex.com>", // swap to "noreply@portiveimpex.com" once the domain is verified in Resend dashboard
    to: [TO],
    replyTo: email.trim(),
    subject: `${service === "canton-fair" ? "Canton Fair Order" : "Trade Enquiry"} from ${name.trim()}${company ? `, ${company.trim()}` : ""}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#080808;border-radius:4px;overflow:hidden;">

        <!-- Header -->
        <div style="background:#080808;padding:28px 32px;border-bottom:1px solid #222222;">
          <p style="color:#5AAB8E;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 6px;">
            New Trade Enquiry
          </p>
          <p style="color:#EFEFEF;font-size:18px;font-weight:600;margin:0;letter-spacing:-0.01em;">
            Portive Exports
          </p>
        </div>

        <!-- Body -->
        <div style="background:#141414;padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#7FCAB5;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;width:130px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;color:#EFEFEF;font-size:14px;font-weight:600;border-bottom:1px solid #222222;">${escHtml(name)}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding:10px 0;color:#7FCAB5;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;vertical-align:top;">Company</td>
              <td style="padding:10px 0;color:#EFEFEF;font-size:14px;border-bottom:1px solid #222222;">${escHtml(company)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;color:#7FCAB5;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;vertical-align:top;">Email</td>
              <td style="padding:10px 0;font-size:14px;border-bottom:1px solid #222222;">
                <a href="mailto:${escHtml(email)}" style="color:#5AAB8E;text-decoration:none;">${escHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#7FCAB5;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;vertical-align:top;">Service</td>
              <td style="padding:10px 0;color:#EFEFEF;font-size:14px;border-bottom:1px solid #222222;">${escHtml(serviceLabel)}</td>
            </tr>
          </table>

          <div style="margin-top:28px;">
            <p style="color:#7FCAB5;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 10px;">Message</p>
            <div style="background:#1C1C1C;border:1px solid #222222;padding:16px 20px;border-radius:2px;">
              <p style="color:#EFEFEF;font-size:14px;line-height:1.75;white-space:pre-wrap;margin:0;">${escHtml(message)}</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#080808;padding:14px 32px;border-top:1px solid #222222;text-align:center;">
          <p style="color:#EFEFEF;opacity:0.2;font-size:11px;margin:0;letter-spacing:0.08em;">
            portiveimpex.com &nbsp;·&nbsp; support@portiveimpex.com
          </p>
        </div>

      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
