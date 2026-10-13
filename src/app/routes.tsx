import { createBrowserRouter, Navigate } from "react-router";
import { DolaczPage } from "./components/DolaczPage";
import { OKampaniiPage } from "./components/OKampaniiPage";
import { GraczePage } from "./components/GraczePage";
import { RegulaminPage } from "./components/RegulaminPage";
import { ZasadyPage } from "./components/ZasadyPage";
import { RaportyPageV3 } from "./components/RaportyPageV3";
import { RaportPage } from "./components/RaportPage";
import { ArchiwumPage } from "./components/ArchiwumPage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dolacz" replace /> },
  { path: "/dolacz", Component: DolaczPage },
  { path: "/kampania", Component: OKampaniiPage },
  { path: "/zasady", Component: ZasadyPage },
  { path: "/regulamin", Component: RegulaminPage },
  { path: "/gracze", Component: GraczePage },
  { path: "/raport", Component: RaportPage },
  { path: "/archiwum", Component: ArchiwumPage },
  { path: "/archiwum/great-warsaw-campaign-lato-2026", Component: RaportyPageV3 },
  { path: "/raporty", element: <Navigate to="/archiwum/great-warsaw-campaign-lato-2026" replace /> },
  { path: "*", element: <Navigate to="/dolacz" replace /> },
]);
