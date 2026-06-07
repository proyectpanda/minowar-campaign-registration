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

type PlayerInput = {
  playerName?: string;
  email?: string;
  gangHouse?: string;
  gangName?: string;
  camp?: string;
};

const PLAYERS_KEY = "players";

async function readPlayers(): Promise<Player[]> {
  const store = getStore("campaign-registrations");
  const data = await store.get(PLAYERS_KEY, { type: "json" });
  return Array.isArray(data) ? (data as Player[]) : [];
}

async function writePlayers(players: Player[]) {
  const store = getStore("campaign-registrations");
  await store.setJSON(PLAYERS_KEY, players);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function playerConfirmationEmail(playerName: string) {
  const safePlayerName = escapeHtml(playerName);

  return `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Great Warsaw Campaign</title>
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

            <p style="margin:0 0 18px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">
              Cześć ${safePlayerName},
            </p>

            <p style="margin:0 0 18px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">
              Dzięki za zapisanie się do <strong>Great Warsaw Campaign</strong>.
            </p>

            <p style="margin:0 0 18px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">
              Twoje zgłoszenie zostało przyjęte i jesteś już widoczny na liście uczestników kampanii.
            </p>

            <p style="margin:0 0 28px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">
              Więcej szczegółów dotyczących startu kampanii, organizacji rozgrywek i kolejnych kroków wyślemy niedługo na ten adres e-mail.
            </p>

            <div style="background:#EFE9E5; border:1px solid #BEBDBC; border-radius:10px; padding:18px 22px; margin:30px 0;">
              <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#6E757C; margin-bottom:8px;">
                Status zgłoszenia
              </div>
              <div style="font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:26px; line-height:1.15; font-weight:700; text-transform:uppercase; color:#1C3B56;">
                Zgłoszenie przyjęte
              </div>
            </div>

            <p style="margin:0 0 28px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:1.55; color:#0D0D0E;">
              Do zobaczenia w warszawskim Underhive.
            </p>

            <p style="margin:0; font-family:'Barlow Condensed', 'Arial Narrow', Arial, Helvetica, sans-serif; font-size:28px; line-height:1.2; font-weight:700; color:#1C3B56;">
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
              Ten mail został wysłany automatycznie po zapisaniu się do kampanii.
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const from = Netlify.env.get("FROM_EMAIL");

  if (!apiKey || !from) {
    console.log("Email skipped: RESEND_API_KEY or FROM_EMAIL is missing.");
    return;
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
    console.error("Resend error:", errorText);
  }
}

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  try {
    const body = (await req.json()) as PlayerInput;
    const playerName = body.playerName?.trim();
    const email = body.email?.trim().toLowerCase();
    const gangHouse = body.gangHouse?.trim();
    const gangName = body.gangName?.trim();
    const camp = body.camp?.trim();

    if (!playerName || !email || !gangHouse || !gangName || !camp) {
      return json({ message: "Uzupełnij wszystkie wymagane pola." }, 400);
    }

    const players = await readPlayers();
    const duplicate = players.some((player) => player.email.toLowerCase() === email);

    if (duplicate) {
      return json({ message: "Ten adres e-mail jest już zarejestrowany." }, 409);
    }

    const createdAt = new Date().toISOString();
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      playerName,
      email,
      gangHouse,
      gangName,
      camp,
      createdAt,
    };

    await writePlayers([...players, newPlayer]);

    const adminEmail = Netlify.env.get("ADMIN_EMAIL");

    await Promise.allSettled([
      sendEmail(
        email,
        "Dołączyłeś do Great Warsaw Campaign",
        playerConfirmationEmail(playerName)
      ),
      adminEmail
        ? sendEmail(
            adminEmail,
            "Nowa rejestracja do Wielkiej Kampanii Warszawskiej",
            `<p>Nowa rejestracja do kampanii.</p>
             <p><strong>Gracz:</strong> ${escapeHtml(playerName)}<br />
             <strong>E-mail:</strong> ${escapeHtml(email)}<br />
             <strong>Gang:</strong> ${escapeHtml(gangName)}<br />
             <strong>House:</strong> ${escapeHtml(gangHouse)}<br />
             <strong>Obóz:</strong> ${escapeHtml(camp)}<br />
             <strong>Data:</strong> ${escapeHtml(createdAt)}</p>`
          )
        : Promise.resolve(),
    ]);

    return json({
      playerName: newPlayer.playerName,
      gangHouse: newPlayer.gangHouse,
      gangName: newPlayer.gangName,
      camp: newPlayer.camp,
      createdAt: newPlayer.createdAt,
    });
  } catch (error) {
    console.error(error);
    return json({ message: "Nie udało się zapisać zgłoszenia." }, 500);
  }
};
