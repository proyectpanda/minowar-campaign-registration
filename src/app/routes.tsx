import { createBrowserRouter, Navigate } from "react-router";
import { DolaczPage } from "./components/DolaczPage";
import { OKampaniiPage } from "./components/OKampaniiPage";
import { GraczePage } from "./components/GraczePage";
import { RegulaminPage } from "./components/RegulaminPage";
import { ZasadyPage } from "./components/ZasadyPage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dolacz" replace /> },
  { path: "/dolacz", Component: DolaczPage },
  { path: "/kampania", Component: OKampaniiPage },
  { path: "/zasady", Component: ZasadyPage },
  { path: "/regulamin", Component: RegulaminPage },
  { path: "/gracze", Component: GraczePage },
  { path: "*", element: <Navigate to="/dolacz" replace /> },
]);
