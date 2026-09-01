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

const roundSixMatches = [
  ["Ender", "Salamanders", "Ironhead Squat Prospectors", "Nahar", "Femgaj Boyzz", "Goliath"],
  ["Wikoroo", "The Thousandfold Charge", "Van Saar", "Ildephonse", "Denim Demons", "Orlock"],
  ["Piotr", "Unit Four", "Enforcers", "Adam1983", "Blades of Primus", "Escher"],
  ["ProjectPanda", "Vaag’Inesh Unwashed", "Underhive Outcasts", "Marcin z Chmielu", "Chains & Corsets", "Escher"],
  ["Karmatis", "Purple Scars", "Corpse Grinder Cult", "Twentytwo", "Bad Mojo", "Escher"],
  ["LosAntos", "Żelazne Kufle", "Ironhead Squat Prospectors", "Blaz", "Fever Dream", "Van Saar"],
  ["Telchar", "Rad Queens", "Escher", "Toll", "Róże dla Agnes", "Goliath"],
  ["Marcin / Ciruell", "Śmieciarze / Garbage collectors", "Van Saar", "Billiskner", "Precinct 139513", "Enforcers"],
  ["Pix", "Rusted Foxes", "Ash Waste Nomads", "stooopak", "Chłopcy z Ośrodka (GWC)", "Delaque"],
  ["Magos Hehetek", "Brain Dancers", "Helot Chaos Cults", "Helljumper", "Ironheads", "Orlock"],
  ["Werjan", "Moxxi's phenomena menagerie waw", "Escher", "Kapisu", "Żelazne Gatory", "Goliath"],
  ["metalfan", "The Neon Spectre", "Delaque", "Paul Formann", "The Death Asterism", "Spyre Hunters"],
] as const;

const roundSixLore = [
  "Znaczna część Kopca przez długie cykle pozostawała pogrążona w ciemności. W martwych korytarzach nie było widać niemal nic - tylko co jakiś czas mrok rozcinały serie wystrzałów, błyski plazmy i krótkie eksplozje, po których wszystko znowu znikało w czerni. Odcięcie zasilania miało złamać gangi. Zamiast tego zaczęło łamać sam Kopiec.",
  "Wraz z energią padły systemy wentylacji, filtry, pompy, śluzy i zabezpieczenia chroniące niższe sektory przed tym, co od dawna próbowało dostać się do środka. Toksyczne opary zaczęły sączyć się do habów, kanały przepełnił chemiczny szlam, a tysiące szczurów i innych stworzeń uciekających z zalewanych tuneli ruszyły ku wyższym poziomom. W jednych sektorach zabrakło powietrza, w innych zawiodły drzwi bezpieczeństwa, gdzie indziej stare instalacje zaczęły wyrzucać do wnętrza Kopca wszystko, co przez lata miały trzymać na zewnątrz.",
  "Aby powstrzymać katastrofę, zasilanie zostało przywrócone. Problem w tym, że Kopiec nie obudził się tak, jak zasnął. Systemy uruchamiają się losowo, światła migoczą, wentylatory dławią się toksycznym pyłem, alarmy wyją bez powodu, a kolejne awarie wywołują następne.",
  "Jeszcze nigdy nie było tu tak źle.",
];

function createResultBadge(result: RoundFiveResult) {
  const badge = document.createElement("span");
  badge.className = `inline-flex items-center justify-center min-w-12 h-8 px-2 rounded-md text-[16px] font-semibold uppercase text-white ${result === "win" ? "bg-[#00378d]" : "bg-[#6e757c]"}`;
  badge.textContent = result.toUpperCase();
  return badge;
}

function createRoundSixReport() {
  const section = document.createElement("section");
  section.id = "round-six-report";
  section.className = "space-y-6 pt-6";

  const heading = document.createElement("h2");
  heading.className = "text-[#1c3b56] text-[32px] font-semibold leading-[normal]";
  heading.textContent = "RUNDA VI - PLAGI";

  const image = document.createElement("img");
  image.src = "/runda06.jpg";
  image.alt = "Plagi i awarie po przywróceniu zasilania w Kopcu";
  image.className = "w-full h-[260px] sm:h-[380px] lg:h-[703px] object-cover";

  const lore = document.createElement("div");
  lore.className = "space-y-1 text-[#6e757c] text-[18px] leading-[28px]";
  lore.style.fontFamily = '"Roboto Condensed", system-ui, sans-serif';
  roundSixLore.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    lore.append(paragraph);
  });

  const info = document.createElement("p");
  info.className = "self-stretch text-[32px] font-semibold leading-[normal] text-[#1c3b56]";
  info.innerHTML = "Scenariusz: Escape the Badzone<br>Termin 6 rundy: 01.09-15.09";

  section.append(heading, image, lore, info);

  const tableSection = document.createElement("section");
  tableSection.className = "overflow-x-auto";

  const tableOuter = document.createElement("div");
  tableOuter.className = "min-w-[1120px]";

  const header = document.createElement("div");
  header.className = "grid grid-cols-[minmax(250px,0.9fr)_minmax(390px,1.7fr)_minmax(170px,0.7fr)_112px] gap-6 px-4 py-2 border-b-2 border-[#0d0d0e] text-[#0d0d0e] text-[18px] font-medium uppercase";
  ["Gracze", "Gangi", "Terytoria", "Wynik"].forEach((label) => {
    const cell = document.createElement("span");
    cell.textContent = label;
    header.append(cell);
  });

  const rows = document.createElement("div");
  roundSixMatches.forEach(([playerOne, gangOne, houseOne, playerTwo, gangTwo, houseTwo]) => {
    const row = document.createElement("div");
    row.className = "grid grid-cols-[minmax(250px,0.9fr)_minmax(390px,1.7fr)_minmax(170px,0.7fr)_112px] gap-6 items-center pl-4 pr-6 py-3 bg-[#f9f5f3] border-b border-[#bebdbc] text-[20px] font-semibold leading-[normal]";

    const players = document.createElement("p");
    players.innerHTML = `<span class="uppercase text-[#00378d]">${playerOne}</span> <span class="text-[#0d0d0e]">vs</span> <span class="uppercase text-[#00378d]">${playerTwo}</span>`;

    const gangs = document.createElement("p");
    gangs.innerHTML = `<span class="uppercase text-[#00378d]">${gangOne}</span> <span class="text-[#0d0d0e]">(${houseOne}) vs </span><span class="uppercase text-[#00378d]">${gangTwo}</span> <span class="text-[#0d0d0e]">(${houseTwo})</span>`;

    const territory = document.createElement("p");
    territory.className = "uppercase text-[#00378d]";

    const result = document.createElement("div");
    result.className = "flex items-center gap-4 min-h-8";

    row.append(players, gangs, territory, result);
    rows.append(row);
  });

  tableOuter.append(header, rows);
  tableSection.append(tableOuter);

  return { section, tableSection };
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

    if (rowsContainer) {
      Array.from(rowsContainer.children).forEach((row, index) => {
        const resultColumn = row.lastElementChild as HTMLElement | null;
        if (!resultColumn) return;

        resultColumn.replaceChildren();
        const result = roundFiveResults[index];
        if (!result) return;

        resultColumn.append(createResultBadge(result[0]), createResultBadge(result[1]));
      });
    }

    if (!document.getElementById("round-six-report") && tableSection?.parentElement) {
      const roundSix = createRoundSixReport();
      tableSection.parentElement.append(roundSix.section, roundSix.tableSection);
    }
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
