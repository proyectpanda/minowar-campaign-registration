import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

type Player = {
  id: string;
  playerName: string;
  email: string;
  gangHouse: string;
  gangName: string;
  camp: string;
  createdAt: string;
};

type EmailRequest = {
  action?: string;
  secret?: string;
  camp?: string;
  subject?: string;
  message?: string;
  confirm?: string;
};

const PLAYERS_KEY = "players";
const STORE_NAME = "campaign-registrations";

const CAMP_ALIASES: Record<string, string> = {
  chmiel: "Chmiel i Słód",
  "chmiel-i-slod": "Chmiel i Słód",
  "chmiel i slod": "Chmiel i Słód",
  "chmiel i słód": "Chmiel i Słód",
  matisoft: "Matisoft",
  wastes: "Wastes",
  waste: "Wastes",
  wasteland: "Wastes",
};

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

function normalizeCamp(camp?: string) {
  const raw = (camp || "").trim();
  const key = raw.toLowerCase();
  return CAMP_ALIASES[key] || raw;
}

function isKnownCamp(camp: string) {
  return ["Chmiel i Słód", "Matisoft", "Wastes"].includes(camp);
}

function assertAdmin(secret?: string) {
  const adminSecret = Netlify.env.get("ADMIN_SECRET");

  if (!adminSecret) {
    return "ADMIN_SECRET is not configured in Netlify.";
  }

  if (!secret || secret !== adminSecret) {
    return "Unauthorized.";
  }

  return null;
}

async function readPlayers(): Promise<Player[]> {
  const store = getStore(STORE_NAME, { consistency: "strong" });
  const data = await store.get(PLAYERS_KEY, { type: "json" });
  return Array.isArray(data) ? (data as Player[]) : [];
}

function getCampStats(players: Player[]) {
  const stats = {
    total: players.length,
    camps: {
      "Chmiel i Słód": 0,
      Matisoft: 0,
      Wastes: 0,
      Other: 0,
    },
  };

  for (const player of players) {
    const camp = normalizeCamp(player.camp);
    if (camp === "Chmiel i Słód") stats.camps["Chmiel i Słód"] += 1;
    else if (camp === "Matisoft") stats.camps.Matisoft += 1;
    else if (camp === "Wastes") stats.camps.Wastes += 1;
    else stats.camps.Other += 1;
  }

  return stats;
}

function getRecipients(players: Player[], camp: string) {
  return players
    .filter((player) => normalizeCamp(player.camp) === camp)
    .map((player) => ({
      playerName: player.playerName,
      email: player.email,
      gangName: player.gangName,
      gangHouse: player.gangHouse,
      camp: normalizeCamp(player.camp),
      createdAt: player.createdAt,
    }));
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

function campaignEmailTemplate({
  subject,
  message,
  camp,
}: {
  subject: string;
  message: string;
  camp: string;
}) {
  const safeSubject = escapeHtml(subject);
  const safeCamp = escapeHtml(camp);
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
            <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#6E757C; margin-bottom:28px;">
              MINOWAR
            </div>

            <h1 style="margin:0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:56px; line-height:0.92; letter-spacing:0.5px; font-weight:700; text-transform:uppercase; color:#0D0D0E;">
              GREAT<br />WARSAW<br />CAMPAIGN
            </h1>

            <div style="height:2px; background:#BEBDBC; margin:34px 0 34px 0;"></div>

            <div style="background:#EFE9E5; border:1px solid #BEBDBC; border-radius:10px; padding:18px 22px; margin:0 0 30px 0;">
              <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#6E757C; margin-bottom:8px;">
                Wiadomość dla bazy
              </div>
              <div style="font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:26px; line-height:1.15; font-weight:700; text-transform:uppercase; color:#1C3B56;">
                ${safeCamp}
              </div>
            </div>

            ${messageHtml}

            <p style="margin:28px 0 0 0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:28px; line-height:1.2; font-weight:700; color:#1C3B56;">
              Minowar
            </p>

            <p style="margin:6px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.45; color:#6E757C;">
              Nieoficjalna kampania społeczności Necromunda
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 44px 36px 44px; border-top:1px solid #BEBDBC;">
            <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.45; color:#6E757C;">
              Ten mail został wysłany do graczy zapisanych do wybranej bazy Great Warsaw Campaign.
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const from = Netlify.env.get("FROM_EMAIL");

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

async function parseRequest(req: Request): Promise<EmailRequest> {
  if (req.method === "GET") {
    const url = new URL(req.url);
    return {
      action: url.searchParams.get("action") || undefined,
      secret: url.searchParams.get("secret") || undefined,
      camp: url.searchParams.get("camp") || undefined,
      subject: url.searchParams.get("subject") || undefined,
      message: url.searchParams.get("message") || undefined,
      confirm: url.searchParams.get("confirm") || undefined,
    };
  }

  return (await req.json()) as EmailRequest;
}

export default async (req: Request, context: Context) => {
  if (!["GET", "POST"].includes(req.method)) {
    return json({ message: "Method not allowed" }, 405);
  }

  try {
    const body = await parseRequest(req);
    const action = (body.action || "stats").trim();
    const authError = assertAdmin(body.secret);

    if (authError) {
      return json({ message: authError }, authError === "Unauthorized." ? 401 : 500);
    }

    const players = await readPlayers();

    if (action === "stats") {
      return json({ action, ...getCampStats(players) });
    }

    const camp = normalizeCamp(body.camp);

    if (!isKnownCamp(camp)) {
      return json({
        message: "Unknown camp. Use one of: chmiel, matisoft, wastes.",
      }, 400);
    }

    const recipients = getRecipients(players, camp);

    if (action === "preview") {
      return json({
        action,
        camp,
        count: recipients.length,
        subject: body.subject || "",
        message: body.message || "",
        recipients,
      });
    }

    if (action === "send") {
      const subject = body.subject?.trim();
      const message = body.message?.trim();

      if (body.confirm !== "SEND") {
        return json({ message: "Missing confirm=SEND." }, 400);
      }

      if (!subject || !message) {
        return json({ message: "Subject and message are required." }, 400);
      }

      if (recipients.length === 0) {
        return json({ message: "No recipients for this camp.", camp, count: 0 }, 400);
      }

      const html = campaignEmailTemplate({ subject, message, camp });
      const results = await Promise.allSettled(
        recipients.map((recipient) => sendEmail(recipient.email, subject, html))
      );

      const sent = results.filter((result) => result.status === "fulfilled").length;
      const failed = results.length - sent;
      const failures = results
        .map((result, index) => ({ result, recipient: recipients[index] }))
        .filter(({ result }) => result.status === "rejected")
        .map(({ result, recipient }) => ({
          email: recipient.email,
          error: result.status === "rejected" ? String(result.reason) : "",
        }));

      const adminEmail = Netlify.env.get("ADMIN_EMAIL");
      if (adminEmail) {
        await sendEmail(
          adminEmail,
          `Podsumowanie wysyłki: ${subject}`,
          `<p>Wysyłka do bazy: <strong>${escapeHtml(camp)}</strong></p>
           <p>Wysłano: ${sent}<br />Nieudane: ${failed}</p>
           <p>Temat: ${escapeHtml(subject)}</p>`
        );
      }

      return json({
        action,
        camp,
        subject,
        requested: recipients.length,
        sent,
        failed,
        failures,
      });
    }

    return json({ message: "Unknown action. Use stats, preview or send." }, 400);
  } catch (error) {
    console.error(error);
    return json({ message: "Admin campaign email function failed.", error: String(error) }, 500);
  }
};
