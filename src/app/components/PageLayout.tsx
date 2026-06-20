import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";

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
