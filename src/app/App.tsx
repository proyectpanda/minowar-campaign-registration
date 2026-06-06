import { RouterProvider } from "react-router";
import { router } from "./routes";
import { PlayersProvider } from "./context/PlayersContext";

export default function App() {
  return (
    <PlayersProvider>
      <RouterProvider router={router} />
    </PlayersProvider>
  );
}
