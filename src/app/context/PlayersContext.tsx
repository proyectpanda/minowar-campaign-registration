import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Player {
  playerName: string;
  gangHouse: string;
  gangName: string;
  email?: string;
  camp?: string;
}

interface PlayersContextType {
  players: Player[];
  addPlayer: (player: Player) => Promise<void>;
}

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export function PlayersProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayers() {
      try {
        const response = await fetch("/.netlify/functions/players");
        if (!response.ok) return;
        const data = await response.json();
        if (!cancelled && Array.isArray(data)) {
          setPlayers(data);
        }
      } catch (error) {
        console.error("Could not load players", error);
      }
    }

    loadPlayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const addPlayer = async (player: Player): Promise<void> => {
    let response: Response;
    try {
      response = await fetch("/.netlify/functions/register-player", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(player),
      });
    } catch {
      throw new Error("Nie można połączyć się z serwerem. Spróbuj ponownie.");
    }

    const data = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(data?.message || "Nie udało się zapisać zgłoszenia.");
    }

    setPlayers((prev) => [...prev, data]);
  };

  return (
    <PlayersContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error("usePlayers must be used within a PlayersProvider");
  }
  return context;
}
