type TestEmailRequest = {
  secret?: string;
  to?: string;
  subject?: string;
  message?: string;
  confirm?: string;
};

function getEnv(name: string) {
  return process.env[name] || Netlify.env.get(name);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function assertAdmin(secret?: string) {
  const adminSecret = getEnv("ADMIN_SECRET");

  if (!adminSecret) {
    return "ADMIN_SECRET is not configured in Netlify.";
  }

  if (!secret || secret !== adminSecret) {
    return "Unauthorized.";
  }

  return null;
}

function plainTextToHtml(message: string) {
  return message
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 18px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">${escapeHtml(
          paragraph
        ).replace(/\n/g, "<br />")}</p>`
    )
    .join("\n");
}

function testEmailTemplate({ subject, message }: { subject: string; message: string }) {
  const safeSubject = escapeHtml(subject);
  const messageHtml = plainTextToHtml(message);

  return `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeSubject}</title>
  </head>
  <body style="margin:0; padding:0; background:#EDE7E3; color:#0D0D0E;">
    <div style="background:#EDE7E3; padding:40px 16px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px; margin:0 auto; background:#F9F5F3; border:1px solid #BEBDBC; border-radius:14px;">
        <tr>
          <td style="padding:44px 44px 28px 44px;">
            <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#6E757C; margin-bottom:28px;">MINOWAR</div>
            <h1 style="margin:0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:56px; line-height:0.92; letter-spacing:0.5px; font-weight:700; text-transform:uppercase; color:#0D0D0E;">GREAT<br />WARSAW<br />CAMPAIGN</h1>
            <div style="height:2px; background:#BEBDBC; margin:34px 0 34px 0;"></div>
            <div style="background:#EFE9E5; border:1px solid #BEBDBC; border-radius:10px; padding:18px 22px; margin:0 0 30px 0;">
              <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#6E757C; margin-bottom:8px;">Test wysyłki</div>
              <div style="font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:26px; line-height:1.15; font-weight:700; text-transform:uppercase; color:#1C3B56;">Wiadomość testowa</div>
            </div>
            ${messageHtml}
            <p style="margin:28px 0 0 0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:28px; line-height:1.2; font-weight:700; color:#1C3B56;">Minowar</p>
            <p style="margin:6px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.45; color:#6E757C;">Nieoficjalna kampania społeczności Necromunda</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 44px 36px 44px; border-top:1px solid #BEBDBC;">
            <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.45; color:#6E757C;">Ten mail został wysłany jako test administracyjny Great Warsaw Campaign.</p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = getEnv("RESEND_API_KEY");
  const from = getEnv("FROM_EMAIL");

  if (!apiKey || !from) {
    throw new Error("RESEND_API_KEY or FROM_EMAIL is missing.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}

async function parseRequest(req: Request): Promise<TestEmailRequest> {
  if (req.method === "GET") {
    const url = new URL(req.url);
    return {
      secret: url.searchParams.get("secret") || undefined,
      to: url.searchParams.get("to") || undefined,
      subject: url.searchParams.get("subject") || undefined,
      message: url.searchParams.get("message") || undefined,
      confirm: url.searchParams.get("confirm") || undefined,
    };
  }

  return (await req.json()) as TestEmailRequest;
}

export default async (req: Request) => {
  if (!["GET", "POST"].includes(req.method)) {
    return json({ message: "Method not allowed" }, 405);
  }

  try {
    const body = await parseRequest(req);
    const authError = assertAdmin(body.secret);

    if (authError) {
      return json({ message: authError }, authError === "Unauthorized." ? 401 : 500);
    }

    if (body.confirm !== "SEND_TEST") {
      return json({ message: "Missing confirm=SEND_TEST." }, 400);
    }

    const to = body.to?.trim().toLowerCase();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!to || !isValidEmail(to)) {
      return json({ message: "Valid recipient email is required." }, 400);
    }

    if (!subject || !message) {
      return json({ message: "Subject and message are required." }, 400);
    }

    const html = testEmailTemplate({ subject, message });
    const result = await sendEmail(to, subject, html);

    const adminEmail = getEnv("ADMIN_EMAIL");
    if (adminEmail && adminEmail.toLowerCase() !== to) {
      await sendEmail(
        adminEmail,
        `Podsumowanie testu wysyłki: ${subject}`,
        `<p>Wysłano testowy mail do: <strong>${escapeHtml(to)}</strong></p><p>Temat: ${escapeHtml(subject)}</p>`
      );
    }

    return json({
      action: "test-email",
      sent: true,
      to,
      subject,
      resend: result,
    });
  } catch (error) {
    console.error(error);
    return json({ message: "Admin test email function failed.", error: String(error) }, 500);
  }
};
