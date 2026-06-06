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
        "Dołączyłeś do Wielkiej Kampanii Warszawskiej",
        `<p>Cześć ${playerName},</p>
         <p>Udało Ci się dołączyć do Wielkiej Kampanii Warszawskiej.</p>
         <p><strong>Gracz:</strong> ${playerName}<br />
         <strong>Gang:</strong> ${gangName}<br />
         <strong>House:</strong> ${gangHouse}<br />
         <strong>Obóz:</strong> ${camp}</p>
         <p>Więcej szczegółów wyślemy później na ten adres e-mail.</p>
         <p>Minowar</p>`
      ),
      adminEmail
        ? sendEmail(
            adminEmail,
            "Nowa rejestracja do Wielkiej Kampanii Warszawskiej",
            `<p>Nowa rejestracja do kampanii.</p>
             <p><strong>Gracz:</strong> ${playerName}<br />
             <strong>E-mail:</strong> ${email}<br />
             <strong>Gang:</strong> ${gangName}<br />
             <strong>House:</strong> ${gangHouse}<br />
             <strong>Obóz:</strong> ${camp}<br />
             <strong>Data:</strong> ${createdAt}</p>`
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
