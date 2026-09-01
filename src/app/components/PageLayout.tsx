import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";

type RoundFiveResult = "win" | "lose";

const roundFiveResults: Array<[RoundFiveResult, RoundFiveResult] | null> = [
  ["win", "lose"],
  ["win", "lose"],
  ["win", "lose"],
  ["win", "lose"],
  ["win", "lose"],
  ["win", "lose"],
  ["lose", "win"],
  ["win", "lose"],
  ["win", "lose"],
  null,
  ["win", "lose"],
  ["lose", "win"],
];

function createResultBadge(result: RoundFiveResult) {
  const badge = document.createElement("span");
  badge.className = `inline-flex items-center justify-center min-w-12 h-8 px-2 rounded-md text-[16px] font-semibold uppercase text-white ${result === "win" ? "bg-[#00378d]" : "bg-[#6e757c]"}`;
  badge.textContent = result.toUpperCase();
  return badge;
}

export function PageLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const organizerHeadings = Array.from(document.querySelectorAll("h2")).filter((heading) => {
      const title = heading.textContent?.trim();
      return title === "Organizatorzy" || title === "Organizatorzy i partnerzy";
    });

    organizerHeadings.forEach((heading) => {
      if (heading.textContent?.trim() === "Organizatorzy") {
        heading.textContent = "Organizatorzy i partnerzy";
      }

      const section = heading.parentElement;
      const logoGrid = section?.querySelector<HTMLDivElement>("div.flex.flex-wrap.items-center.justify-center");

      if (!logoGrid || logoGrid.querySelector("a.lootpile-partner")) return;

      const partnerLink = document.createElement("a");
      partnerLink.href = "https://lootpile.eu/";
      partnerLink.setAttribute("aria-label", "LootPile.eu");
      partnerLink.className = "lootpile-partner transition-all duration-200 hover:scale-105 hover:opacity-90";

      const existingLogo = logoGrid.querySelector<HTMLImageElement>('img[src="/lootpile-logo.svg"]');

      if (existingLogo) {
        existingLogo.alt = "LootPile.eu";
        existingLogo.className = "h-[120px] w-[160px] object-contain";
        existingLogo.replaceWith(partnerLink);
        partnerLink.append(existingLogo);
      } else {
        const logo = document.createElement("img");
        logo.src = "/lootpile-logo.svg";
        logo.alt = "LootPile.eu";
        logo.className = "h-[120px] w-[160px] object-contain";
        partnerLink.append(logo);
        logoGrid.append(partnerLink);
      }
    });

    if (window.location.pathname !== "/raporty") return;

    const roundFiveHeading = Array.from(document.querySelectorAll("h2")).find((heading) =>
      heading.textContent?.trim().startsWith("Runda 5 - Gasnące korytarze"),
    );
    const roundFiveSection = roundFiveHeading?.closest("section");
    const tableSection = roundFiveSection?.nextElementSibling as HTMLElement | null;
    const tableOuter = tableSection?.firstElementChild as HTMLElement | null;
    const rowsContainer = tableOuter?.children[1] as HTMLElement | undefined;

    if (!rowsContainer) return;

    Array.from(rowsContainer.children).forEach((row, index) => {
      const resultColumn = row.lastElementChild as HTMLElement | null;
      if (!resultColumn) return;

      resultColumn.replaceChildren();
      const result = roundFiveResults[index];
      if (!result) return;

      resultColumn.append(createResultBadge(result[0]), createResultBadge(result[1]));
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-[#EDE7E3] text-[#0d0d0e]"
      style={{ fontFamily: '"Barlow Condensed", system-ui, sans-serif' }}
    >
      <Sidebar />
      <main className="lg:pl-[160px] pt-14 lg:pt-0">{children}</main>
    </div>
  );
}