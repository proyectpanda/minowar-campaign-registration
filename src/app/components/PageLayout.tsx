import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";

const roundOneTerritories = [
  "Wastes",
  "Slag Furnace",
  "Rogue Doc Shop",
  "Needle Ways",
  "Mine Workings",
  "Synth Still",
  "Stinger Mould Sprawl",
  "Tunnels",
  "Generatorium",
  "Tech Bazaar",
  "Narco Den",
  "Smelting Works",
  "Archaeotech Device",
];

const roundOneResults: Record<number, ["win" | "lose", "win" | "lose"]> = {
  0: ["win", "lose"],
  4: ["lose", "win"],
  5: ["win", "lose"],
  6: ["lose", "win"],
  7: ["win", "lose"],
  12: ["lose", "win"],
};

const reportGridClass = "grid grid-cols-[minmax(250px,0.9fr)_minmax(390px,1.7fr)_minmax(170px,0.7fr)_112px] gap-6";

function resultBadge(result: "win" | "lose") {
  const isWin = result === "win";
  const background = isWin ? "bg-[#00378d]" : "bg-[#6e757c]";
  const label = isWin ? "WIN" : "LOSE";
  return `<span class="inline-flex items-center justify-center min-w-12 h-8 px-2 rounded-md text-[16px] font-semibold uppercase text-white ${background}">${label}</span>`;
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

    const reportTable = document.querySelector<HTMLElement>("section.overflow-x-auto > div");
    if (!reportTable || reportTable.dataset.territoriesEnhanced === "true") return;

    reportTable.dataset.territoriesEnhanced = "true";
    reportTable.className = "min-w-[1120px]";

    const header = reportTable.firstElementChild as HTMLElement | null;
    const rowsContainer = reportTable.lastElementChild as HTMLElement | null;
    if (!header || !rowsContainer) return;

    if (!rowsContainer.querySelector("[data-extra-round-one-match]")) {
      const extraRow = document.createElement("div");
      extraRow.dataset.extraRoundOneMatch = "true";
      extraRow.innerHTML = `
        <p class="min-w-0">
          <span class="uppercase text-[#00378d]">jj_wh40k</span>
          <span class="text-[#0d0d0e]">vs</span>
          <span class="uppercase text-[#00378d]">Adam1983</span>
        </p>
        <p class="min-w-0">
          <span class="uppercase text-[#00378d]">N27</span>
          <span class="text-[#0d0e]">(Van Saar) vs </span>
          <span class="uppercase text-[#00378d]">Blades of Primus</span>
          <span class="text-[#0d0d0e]">(Escher)</span>
        </p>
        <div class="flex items-center gap-4 min-h-8"></div>
      `;
      rowsContainer.append(extraRow);
    }

    header.className = `${reportGridClass} px-4 py-2 border-b-2 border-[#0d0d0e] text-[#0d0d0e] text-[18px] font-medium uppercase`;
    header.innerHTML = "<span>Gracze</span><span>Gangi</span><span>Terytoria</span><span>Wynik</span>";

    Array.from(rowsContainer.children).forEach((row, index) => {
      const rowElement = row as HTMLElement;
      rowElement.className = `${reportGridClass} items-center pl-4 pr-6 py-3 bg-[#f9f5f3] border-b border-[#bebdbc] text-[20px] font-semibold leading-[normal]`;

      const resultColumn = rowElement.lastElementChild as HTMLElement | null;
      const territory = document.createElement("p");
      territory.className = "uppercase text-[#00378d]";
      territory.textContent = roundOneTerritories[index] ?? "";

      if (resultColumn) {
        rowElement.insertBefore(territory, resultColumn);
        const results = roundOneResults[index];
        if (results) {
          resultColumn.innerHTML = results.map(resultBadge).join("");
        }
      } else {
        rowElement.append(territory);
      }
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
