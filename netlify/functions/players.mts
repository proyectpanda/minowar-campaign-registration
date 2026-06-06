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

const PLAYERS_KEY = "players";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") {
    return json({ message: "Method not allowed" }, 405);
  }

  try {
    const store = getStore("campaign-registrations");
    const data = await store.get(PLAYERS_KEY, { type: "json" });
    const players = Array.isArray(data) ? (data as Player[]) : [];

    return json(
      players.map((player) => ({
        playerName: player.playerName,
        gangHouse: player.gangHouse,
        gangName: player.gangName,
        createdAt: player.createdAt,
      }))
    );
  } catch (error) {
    console.error(error);
    return json({ message: "Nie udało się pobrać listy graczy." }, 500);
  }
};
