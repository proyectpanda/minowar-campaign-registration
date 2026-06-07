import { RouterProvider } from "react-router";
import { router } from "./routes";
import { PlayersProvider } from "./context/PlayersContext";
import { IntroAudio } from "./components/IntroAudio";

export default function App() {
  return (
    <PlayersProvider>
      <IntroAudio />
      <RouterProvider router={router} />
    </PlayersProvider>
  );
}
