import { getStore } from "@netlify/blobs";

type Player = {
  playerName: string;
  email: string;
  gangHouse: string;
  gangName: string;
  camp: string;
  createdAt: string;
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

function normalizeCamp(camp?: string) {
  const raw = (camp || "").trim();
  const key = raw.toLowerCase();
  return CAMP_ALIASES[key] || raw;
}

function isAuthorized(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret") || "";
  const adminSecret = process.env.ADMIN_SECRET || Netlify.env.get("ADMIN_SECRET") || "";

  return Boolean(adminSecret) && secret === adminSecret;
}

async function readPlayers(): Promise<Player[]> {
  const store = getStore(STORE_NAME, { consistency: "strong" });
  const data = await store.get(PLAYERS_KEY, { type: "json" });
  return Array.isArray(data) ? (data as Player[]) : [];
}

export default async (req: Request) => {
  if (req.method !== "GET") {
    return json({ message: "Method not allowed" }, 405);
  }

  if (!isAuthorized(req)) {
    return json({ message: "Unauthorized or ADMIN_SECRET not configured." }, 401);
  }

  const players = await readPlayers();
  const camps = {
    "Chmiel i Słód": 0,
    Matisoft: 0,
    Wastes: 0,
    Other: 0,
  };

  for (const player of players) {
    const camp = normalizeCamp(player.camp);
    if (camp === "Chmiel i Słód") camps["Chmiel i Słód"] += 1;
    else if (camp === "Matisoft") camps.Matisoft += 1;
    else if (camp === "Wastes") camps.Wastes += 1;
    else camps.Other += 1;
  }

  return json({
    action: "stats",
    total: players.length,
    camps,
  });
};
