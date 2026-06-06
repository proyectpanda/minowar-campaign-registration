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
  addPlayer: (player: Player) => void;
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

  const addPlayer = (player: Player) => {
    fetch("/.netlify/functions/register-player", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(player),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => null);

        if (!response.ok) {
          console.error(data?.message || "Nie udało się zapisać zgłoszenia.");
          return;
        }

        setPlayers((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Could not register player", error);
      });
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
