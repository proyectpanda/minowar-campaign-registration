import { getStore } from "@netlify/blobs";

type Player = {
  playerName?: string;
  email?: string;
  gangName?: string;
  gangHouse?: string;
  camp?: string;
  createdAt?: string;
};

type RequestBody = {
  action?: "preview" | "send";
  secret?: string;
  subject?: string;
  message?: string;
  confirm?: string;
};

const STORE_NAME = "campaign-registrations";
const PLAYERS_KEY = "players";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function textToHtml(message: string) {
  return message
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => {
      const value = escapeHtml(paragraph).replace(/\n/g, "<br />");
      return `<p style="margin:0 0 18px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">${value}</p>`;
    })
    .join("\n");
}

function renderEmail(subject: string, message: string) {
  const safeSubject = escapeHtml(subject);
  const body = textToHtml(message);

  return `<!doctype html><html lang="pl"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${safeSubject}</title></head><body style="margin:0; padding:0; background:#EDE7E3; color:#0D0D0E;"><div style="background:#EDE7E3; padding:40px 16px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px; margin:0 auto; background:#F9F5F3; border:1px solid #BEBDBC; border-radius:14px;"><tr><td style="padding:44px 44px 28px 44px;"><div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#6E757C; margin-bottom:28px;">MINOWAR</div><h1 style="margin:0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:56px; line-height:0.92; letter-spacing:0.5px; font-weight:700; text-transform:uppercase; color:#0D0D0E;">GREAT<br />WARSAW<br />CAMPAIGN</h1><div style="height:2px; background:#BEBDBC; margin:34px 0 34px 0;"></div><div style="background:#EFE9E5; border:1px solid #BEBDBC; border-radius:10px; padding:18px 22px; margin:0 0 30px 0;"><div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#6E757C; margin-bottom:8px;">Wiadomość kampanijna</div><div style="font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:26px; line-height:1.15; font-weight:700; text-transform:uppercase; color:#1C3B56;">Do zarejestrowanych graczy</div></div>${body}<p style="margin:28px 0 0 0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:28px; line-height:1.2; font-weight:700; color:#1C3B56;">Minowar</p><p style="margin:6px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.45; color:#6E757C;">Nieoficjalna kampania społeczności Necromunda</p></td></tr><tr><td style="padding:20px 44px 36px 44px; border-top:1px solid #BEBDBC;"><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.45; color:#6E757C;">Ten mail został wysłany do graczy zarejestrowanych w Great Warsaw Campaign.</p></td></tr></table></div></body></html>`;
}

async function parseRequest(req: Request): Promise<RequestBody> {
  if (req.method === "GET") {
    const url = new URL(req.url);
    return {
      action: (url.searchParams.get("action") as RequestBody["action"]) || "preview",
      secret: url.searchParams.get("secret") || undefined,
      subject: url.searchParams.get("subject") || undefined,
      message: url.searchParams.get("message") || undefined,
      confirm: url.searchParams.get("confirm") || undefined,
    };
  }

  return (await req.json()) as RequestBody;
}

function validateSecret(secret?: string) {
  const adminSecret = Netlify.env.get("ADMIN_SECRET");
  if (!adminSecret) return "ADMIN_SECRET is not configured in Netlify.";
  if (!secret || secret !== adminSecret) return "Unauthorized.";
  return null;
}

async function readPlayers(): Promise<Player[]> {
  const store = getStore(STORE_NAME, { consistency: "strong" });
  const data = await store.get(PLAYERS_KEY, { type: "json" });
  return Array.isArray(data) ? (data as Player[]) : [];
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getRecipients(players: Player[]) {
  const seen = new Set<string>();

  return players
    .map((player) => ({
      playerName: player.playerName || "",
      email: (player.email || "").trim().toLowerCase(),
      gangName: player.gangName || "",
      gangHouse: player.gangHouse || "",
      camp: player.camp || "",
      createdAt: player.createdAt || "",
    }))
    .filter((recipient) => {
      if (!validEmail(recipient.email)) return false;
      if (seen.has(recipient.email)) return false;
      seen.add(recipient.email);
      return true;
    });
}

async function deliver(to: string, subject: string, html: string) {
  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const from = Netlify.env.get("FROM_EMAIL");

  if (!apiKey || !from) throw new Error("RESEND_API_KEY or FROM_EMAIL is missing.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

export default async (req: Request) => {
  if (!["GET", "POST"].includes(req.method)) {
    return json({ message: "Method not allowed" }, 405);
  }

  try {
    const body = await parseRequest(req);
    const authError = validateSecret(body.secret);
    if (authError) return json({ message: authError }, authError === "Unauthorized." ? 401 : 500);

    const players = await readPlayers();
    const recipients = getRecipients(players);
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if ((body.action || "preview") === "preview") {
      return json({
        action: "preview",
        totalPlayers: players.length,
        recipientCount: recipients.length,
        subject,
        message,
        recipients,
      });
    }

    if (body.action === "send") {
      if (body.confirm !== "SEND") return json({ message: "Missing confirm=SEND." }, 400);
      if (!subject || !message) return json({ message: "Subject and message are required." }, 400);
      if (recipients.length === 0) return json({ message: "No recipients found." }, 400);

      const html = renderEmail(subject, message);
      const results = await Promise.allSettled(recipients.map((recipient) => deliver(recipient.email, subject, html)));
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
        await deliver(
          adminEmail,
          `Podsumowanie wysyłki: ${subject}`,
          `<p>Wysłano wiadomość kampanijną.</p><p>Wysłano: ${sent}<br />Nieudane: ${failed}</p><p>Temat: ${escapeHtml(subject)}</p>`
        );
      }

      return json({ action: "send", requested: recipients.length, sent, failed, subject, failures });
    }

    return json({ message: "Unknown action. Use preview or send." }, 400);
  } catch (error) {
    console.error(error);
    return json({ message: "Admin mailer failed.", error: String(error) }, 500);
  }
};
