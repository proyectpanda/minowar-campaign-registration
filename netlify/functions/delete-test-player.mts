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
const EMAIL_TO_DELETE = "paulformann@gmail.com";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async (req: Request, context: Context) => {
  try {
    const store = getStore("campaign-registrations", { consistency: "strong" });
    const data = await store.get(PLAYERS_KEY, { type: "json" });
    const players = Array.isArray(data) ? (data as Player[]) : [];

    const before = players.length;
    const updatedPlayers = players.filter(
      (player) => player.email.toLowerCase() !== EMAIL_TO_DELETE
    );
    const removed = before - updatedPlayers.length;

    await store.setJSON(PLAYERS_KEY, updatedPlayers);

    return json({
      message: removed > 0 ? "Test player removed." : "Player not found.",
      removed,
      email: EMAIL_TO_DELETE,
    });
  } catch (error) {
    console.error(error);
    return json({ message: "Could not remove test player." }, 500);
  }
};
