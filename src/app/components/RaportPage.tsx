import { RoundOneGallery } from "./RoundOneGallery";
import { PageLayout } from "./PageLayout";
import { ReportsTable, type Match } from "./RaportyPageV3";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";

const labelStyle = { fontFamily: '"Barlow Condensed", sans-serif' };
const bodyStyle = { fontFamily: '"Roboto Condensed", system-ui, sans-serif' };
const roundHeadingClass = "text-[#1c3b56] text-[32px] font-semibold leading-[normal]";

const roundOneMatches: Match[] = [
  { playerOne: "Sir Cedric", gangOne: "Gluteus Maximus", houseOne: "Goliath", playerTwo: "Werjan", gangTwo: "Menażeria Moxxi", houseTwo: "Escher", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Ciruell", gangOne: "Chłopaki \"Gryzaki\"", houseOne: "Free Ogryns", playerTwo: "Vilard", gangTwo: "Judges of Sector 67", houseTwo: "Enforcers", resultOne: "draw", resultTwo: "draw" },
  { playerOne: "Projectpanda", gangOne: "Die Schrotthersteller", houseOne: "Free Ogryns", playerTwo: "LosAntos237", gangTwo: "Procesja Odkupienia", houseTwo: "Cawdor", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Projectpanda", gangOne: "Brood Zero", houseOne: "Malstrain Gangs", playerTwo: "Beton", gangTwo: "Brzydcy i źli", houseTwo: "Goliath", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Adam1983", gangOne: "Wyld Babes", houseOne: "Escher", playerTwo: "Karmatis", gangTwo: "Architekci Ciał", houseTwo: "Van Saar", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Marcin z Chmielu", gangOne: "TOO FAST FOR LOVE", houseOne: "Escher", playerTwo: "kacpa022", gangTwo: "Złomowi Piraci", houseTwo: "Orlock", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Blackart", gangOne: "Warp-Fried Spritzers", houseOne: "Escher", playerTwo: "End3r", gangTwo: "Salamanders", houseTwo: "Ironhead Squat Prospectors", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Aternn", gangOne: "The Blacklight Coven", houseOne: "Escher", playerTwo: "D’ark", gangTwo: "V-rage", houseTwo: "Goliath", resultOne: "lose", resultTwo: "win" },
  { playerOne: "", gangOne: "Cheap Bastards", houseOne: "", playerTwo: "Projectpanda", gangTwo: "Vaag’Inesh Unwashed", houseTwo: "Underhive Outcasts", resultOne: "lose", resultTwo: "win" },
];

const roundTwoMatches: Match[] = [
  { playerOne: "Blackart", gangOne: "Warp-Fried Spritzers", houseOne: "Escher", playerTwo: "Karmatis", gangTwo: "Architekci Ciał", houseTwo: "Van Saar" },
  { playerOne: "Aternn", gangOne: "The Blacklight Coven", houseOne: "Escher", playerTwo: "End3r", gangTwo: "Salamanders", houseTwo: "Ironhead Squat Prospectors" },
  { playerOne: "Werjan", gangOne: "Menażeria Moxxi", houseOne: "Escher", playerTwo: "kacpa022", gangTwo: "Złomowi Piraci", houseTwo: "Orlock" },
  { playerOne: "Marcin z Chmielu", gangOne: "TOO FAST FOR LOVE", houseOne: "Escher", playerTwo: "LosAntos237", gangTwo: "Procesja Odkupienia", houseTwo: "Cawdor" },
  { playerOne: "Adam1983", gangOne: "Wyld Babes", houseOne: "Escher", playerTwo: "Beton", gangTwo: "Brzydcy i źli", houseTwo: "Goliath" },
  { playerOne: "Ciruell", gangOne: "Chłopaki \"Gryzaki\"", houseOne: "Free Ogryns", playerTwo: "Sir Cedric", gangTwo: "Gluteus Maximus", houseTwo: "Goliath" },
  { playerOne: "Projectpanda", gangOne: "Die Schrotthersteller", houseOne: "Free Ogryns", playerTwo: "Vilard", gangTwo: "Judges of Sector 67", houseTwo: "Enforcers" },
  { playerOne: "D’ark", gangOne: "V-rage", houseOne: "Goliath", playerTwo: "", gangTwo: "Cheap Bastards", houseTwo: "" },
  { playerOne: "Projectpanda", gangOne: "Brood Zero", houseOne: "Malstrain Gangs", playerTwo: "Rezerwa", gangTwo: "Vaag’Inesh Unwashed", houseTwo: "Underhive Outcasts" },
];

export function RaportPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} src={necromundaLogo} alt="Necromunda" className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10" />
          <div className="relative z-10 max-w-[1640px] mr-auto ml-[max(0px,min(calc((100%-1640px)/2),200px))]">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-10 mt-[57px] lg:mt-0" style={labelStyle}>RAPORT</motion.h1>
            <section className="space-y-6 pt-6" aria-labelledby="round-one-title">
              <h2 id="round-one-title" className={roundHeadingClass} style={labelStyle}>RUNDA I — SZCZĘŚCIE NA MARTWYM TORZE</h2>
              <img
                src="/rund1.jpg"
                alt="Gangi walczą o przemysłowy właz prowadzący do wykolejonego wagonu"
                width={1915}
                height={821}
                className="h-auto w-full"
              />
              <div className="space-y-3 text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                <p>Plotka o wykolejonym wagonie pociągu towarowego na niższych poziomach Kopca rozeszła się szybciej niż zaraza w przeludnionych habach. Podobno transportował skrzynie pełne amunicji, broni i drogocennego zaopatrzenia, które teraz leżą rozrzucone wzdłuż torowiska. Nikt nie wie, ile w tym prawdy, ale w Kopcu za podobne pogłoski ludzie gotowi są poderżnąć sobie nawzajem gardła.</p>
                <p>Na miejsce prowadzi tylko jeden dostępny właz. Pierwsze gangi zdążyły już obsadzić przejście i zabarykadować wejście, gotowe posłać kulkę każdemu, kto spróbuje się zbliżyć. Pozostali nadciągają ze wszystkich stron, zwabieni obietnicą łatwego zarobku i zapachem cudzej krwi.</p>
                <p><strong>Kto utrzyma właz, ten zyska szansę dorwania się do łupów, zanim zrobią to inni.</strong></p>
              </div>
              <div className={roundHeadingClass} style={labelStyle}>
                <p>Deployment: Ambush</p>
                <p>Objective: Turf War</p>
                <p>Crew: Scouting Force</p>
                <p>Termin rundy: <time dateTime="2026-11-10">10</time>–<time dateTime="2026-11-22">22 listopada 2026</time></p>
              </div>
              <ReportsTable matches={roundOneMatches} showTerritories={false} />
              <RoundOneGallery />
            </section>
            <section className="mt-12 space-y-6 border-t border-[#bebdbc] pt-8" aria-labelledby="round-two-title">
              <h2 id="round-two-title" className={roundHeadingClass} style={labelStyle}>RUNDA II — PO TRUPACH DO FORTUNY</h2>
              <img
                src="/round-2.jpg"
                alt="Gangi walczą o porzucony ładunek w przemysłowym hangarze Kopca"
                width={1915}
                height={821}
                className="h-auto w-full"
                loading="lazy"
              />
              <div className="space-y-3 text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                <p>Plotki okazały się prawdziwe. Wzdłuż trasy kolejowej na niższym poziomie Kopca leżą ładunki, które wypadły z uszkodzonego pociągu. Co w nich jest, nie wiadomo, ale na pewno da się to sprzedać.</p>
                <p>Gangi, którym udało się zabezpieczyć włazy, ruszyły w głąb sektora, by zagarnąć jak najwięcej towaru. Tuż za nimi podążają ci, którzy przegrali walkę o przejście, ale nie zamierzają wracać z pustymi rękami. Rozpoczyna się brutalny pościg wśród przemysłowych ruin, zardzewiałych instalacji i porzuconych kontenerów.</p>
                <p><strong>Nie trzeba być pierwszym przy łupach. Wystarczy, że ci, którzy byli pierwsi, nie wrócą z nimi żywi.</strong></p>
              </div>
              <div className={roundHeadingClass} style={labelStyle}>
                <p>Deployment: Chance Encounter</p>
                <p>Objective: Tunnel Clash</p>
                <p>Crew: Escalating Engagement</p>
                <p>Termin rundy: <time dateTime="2026-11-26">26 listopada</time> – <time dateTime="2026-12-06">6 grudnia 2026</time></p>
              </div>
              <ReportsTable matches={roundTwoMatches} showTerritories={false} />
            </section>
          </div>
        </section>
        <div className="border-t border-[#bebdbc]">
          <p className="text-[#6e757c] text-[12px] text-center py-4 px-6 lg:px-16" style={{ fontFamily: '"Roboto Mono", monospace' }}>
            Necromunda and all associated logos, characters, names, and artwork are trademarks and/or copyrights of Games Workshop Ltd. This website and campaign are unofficial fan projects and are not endorsed by Games Workshop.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
