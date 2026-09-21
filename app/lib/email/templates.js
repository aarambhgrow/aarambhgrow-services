const SITE_URL = (process.env.SITE_URL || "https://aarambhgrow.co.in").replace(/\/$/, "");
const LOGO_URL = `${SITE_URL}/images/logo.png`;
const BRAND = "AarambhGrow Services Private Limited";

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function layout({ preheader, title, body }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
            <tr>
              <td align="center" style="padding:28px 24px;background:#ffffff;border-bottom:4px solid #F26522;">
                <a href="${SITE_URL}" target="_blank">
                  <img src="${LOGO_URL}" alt="${BRAND}" width="180" style="display:block;width:180px;max-width:100%;height:auto;border:0;" />
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:#03254C;padding:22px 28px;">
                <h1 style="margin:0;color:#ffffff;font-size:21px;line-height:1.4;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;color:#334155;font-size:15px;line-height:1.6;">
                ${body}
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:20px 28px;background:#f8fafc;border-top:1px solid #e5e7eb;color:#94a3b8;font-size:12px;line-height:1.6;">
                &copy; ${new Date().getFullYear()} ${BRAND}<br />
                <a href="${SITE_URL}" style="color:#F26522;text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function row(label, value) {
  return `<tr>
    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#64748b;font-size:14px;width:120px;vertical-align:top;"><strong>${label}</strong></td>
    <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#0f172a;font-size:14px;">${value}</td>
  </tr>`;
}

function messageBlock(message) {
  return `<div style="background:#f8fafc;border-left:4px solid #F26522;padding:15px;color:#475569;line-height:1.6;">
    ${escapeHtml(message).replace(/\n/g, "<br />")}
  </div>`;
}

export function contactAdminEmail({ fullName, email, phone, subject, message }) {
  const safeEmail = escapeHtml(email);
  return layout({
    preheader: `New inquiry from ${fullName}`,
    title: "New Contact Form Submission",
    body: `
      <h3 style="margin:0 0 12px;color:#03254C;">Contact Details</h3>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${row("Full Name", escapeHtml(fullName))}
        ${row("Email", `<a href="mailto:${safeEmail}" style="color:#F26522;">${safeEmail}</a>`)}
        ${row("Phone", escapeHtml(phone || "Not provided"))}
        ${row("Subject", escapeHtml(subject || "Not selected"))}
      </table>
      <h3 style="margin:25px 0 12px;color:#03254C;">Message</h3>
      ${messageBlock(message)}
      <p style="margin-top:25px;color:#94a3b8;font-size:12px;">
        This message was submitted through the AarambhGrow website. Reply directly to this email to respond.
      </p>`,
  });
}

export function contactConfirmationEmail({ fullName, subject, message }) {
  return layout({
    preheader: "We've received your message and will get back to you shortly.",
    title: "Thank you for contacting us",
    body: `
      <p style="margin:0 0 14px;">Hi ${escapeHtml(fullName)},</p>
      <p style="margin:0 0 14px;">
        Thank you for reaching out to ${BRAND}. We have received your inquiry${
          subject ? ` regarding <strong>${escapeHtml(subject)}</strong>` : ""
        } and our team will get back to you within 24&ndash;48 business hours.
      </p>
      <p style="margin:0 0 10px;color:#64748b;font-size:14px;">Here's a copy of your message:</p>
      ${messageBlock(message)}
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 8px;">
        <tr>
          <td style="background:#F26522;border-radius:6px;">
            <a href="${SITE_URL}/services/government-grants" target="_blank" style="display:inline-block;padding:12px 22px;color:#ffffff;font-weight:bold;font-size:14px;text-decoration:none;">Explore Our Services</a>
          </td>
        </tr>
      </table>
      <p style="margin:22px 0 0;">Warm regards,<br /><strong style="color:#03254C;">Team AarambhGrow</strong></p>`,
  });
}
