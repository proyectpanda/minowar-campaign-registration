import { createContext, useContext, useState, ReactNode } from "react";

export interface Player {
  playerName: string;
  gangHouse: string;
  gangName: string;
  email: string;
  camp: string;
}

interface PlayersContextType {
  players: Player[];
  addPlayer: (player: Player) => void;
}

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export function PlayersProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([
    // Mock data - przykładowi gracze
    { gangName: "MARUDERZY ALBIONU", gangHouse: "Goliath", playerName: "Adam Mobius", email: "adam@example.com", camp: "Chmiel i Słód" },
    { gangName: "IRON MONKERS", gangHouse: "Orlock", playerName: "Papayu", email: "papayu@example.com", camp: "Matisoft" },
    { gangName: "Alternatywni", gangHouse: "Outcasts", playerName: "Golzak", email: "golzak@example.com", camp: "Wastes" },
  ]);

  const addPlayer = (player: Player) => {
    setPlayers((prev) => [...prev, player]);
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
