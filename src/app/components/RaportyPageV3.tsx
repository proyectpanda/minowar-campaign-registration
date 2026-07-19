import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";

type Result = "win" | "lose" | "draw";

type Match = {
  playerOne: string;
  gangOne: string;
  houseOne: string;
  playerTwo: string;
  gangTwo: string;
  houseTwo: string;
  territory: string;
  resultOne?: Result;
  resultTwo?: Result;
};

const roundOneMatches: Match[] = [
  { playerOne: "ProjectPanda", gangOne: "Vaag’Inesh Unwashed", houseOne: "Underhive Outcasts", playerTwo: "Billiskner", gangTwo: "Precinct 139513", houseTwo: "Enforcers", territory: "Wastes", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Nahar", gangOne: "Femgaj Boyzz", houseOne: "Goliath", playerTwo: "BarTolomai", gangTwo: "Wastefarers", houseTwo: "Ash Waste Nomads", territory: "Slag Furnace", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Piotr", gangOne: "Unit Four", houseOne: "Enforcers", playerTwo: "Magos Hehetek", gangTwo: "Brain Dancers", houseTwo: "Helot Chaos Cults", territory: "Rogue Doc Shop", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Werjan", gangOne: "Moxxi's phenomena menagerie waw", houseOne: "Escher", playerTwo: "metalfan", gangTwo: "The Neon Spectre", houseTwo: "Delaque", territory: "Needle Ways", resultOne: "draw", resultTwo: "draw" },
  { playerOne: "Helljumper", gangOne: "Ironheads", houseOne: "Orlock", playerTwo: "Toll", gangTwo: "Róże dla Agnes", houseTwo: "Goliath", territory: "Mine Workings", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Marcin z Chmielu", gangOne: "Chains & Corsets", houseOne: "Escher", playerTwo: "Kastor", gangTwo: "Tactical Squadron Nimrod - Σ", houseTwo: "Enforcers", territory: "Synth Still", resultOne: "win", resultTwo: "lose" },
  { playerOne: "stooopak", gangOne: "Chłopcy z Ośrodka (GWC)", houseOne: "Delaque", playerTwo: "Twentytwo", gangTwo: "Bad Mojo", houseTwo: "Escher", territory: "Stinger Mould Sprawl", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Ender", gangOne: "Salamanders", houseOne: "Ironhead Squat Prospectors", playerTwo: "Ildephonse", gangTwo: "Denim Demons", houseTwo: "Orlock", territory: "Tunnels", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Paul Formann", gangOne: "The Death Asterism", houseOne: "Spyre Hunters", playerTwo: "Marcin / Ciruell", gangTwo: "Śmieciarze / Garbage collectors", houseTwo: "Van Saar", territory: "Generatorium", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Karmatis", gangOne: "Purple Scars", houseOne: "Corpse Grinder Cult", playerTwo: "Blaz", gangTwo: "Fever Dream", houseTwo: "Van Saar", territory: "Tech Bazaar", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Telchar", gangOne: "Rad Queens", houseOne: "Escher", playerTwo: "LosAntos", gangTwo: "Żelazne Kufle", houseTwo: "Ironhead Squat Prospectors", territory: "Narco Den", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Wikoroo", gangOne: "The Thousandfold Charge", houseOne: "Van Saar", playerTwo: "Kapisu", gangTwo: "Żelazne Gatory", houseTwo: "Goliath", territory: "Smelting Works", resultOne: "win", resultTwo: "lose" },
  { playerOne: "jj_wh40k", gangOne: "N27", houseOne: "Van Saar", playerTwo: "Adam1983", gangTwo: "Blades of Primus", houseTwo: "Escher", territory: "Archaeotech Device", resultOne: "lose", resultTwo: "win" },
];

const roundTwoMatches: Match[] = [
  { playerOne: "stooopak", gangOne: "Chłopcy z Ośrodka (GWC)", houseOne: "Delaque", playerTwo: "Billiskner", gangTwo: "Precinct 139513", houseTwo: "Enforcers", territory: "Needle Ways", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Helljumper", gangOne: "Ironheads", houseOne: "Orlock", playerTwo: "Ildephonse", gangTwo: "Denim Demons", houseTwo: "Orlock", territory: "Toll Crossing", resultOne: "draw", resultTwo: "draw" },
  { playerOne: "Piotr", gangOne: "Unit Four", houseOne: "Enforcers", playerTwo: "Werjan", gangTwo: "Moxxi's phenomena menagerie waw", houseTwo: "Escher", territory: "Old Ruins", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Kastor", gangOne: "Tactical Squadron Nimrod - Σ", houseOne: "Enforcers", playerTwo: "Marcin / Ciruell", gangTwo: "Śmieciarze / Garbage collectors", houseTwo: "Van Saar", territory: "Promethium Cache", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Blaz", gangOne: "Fever Dream", houseOne: "Van Saar", playerTwo: "ProjectPanda", gangTwo: "Vaag’Inesh Unwashed", houseTwo: "Underhive Outcasts", territory: "Sludge Sea", resultOne: "draw", resultTwo: "draw" },
  { playerOne: "Toll", gangOne: "Róże dla Agnes", houseOne: "Goliath", playerTwo: "Kapisu", gangTwo: "Żelazne Gatory", houseTwo: "Goliath", territory: "Fighting Pit", resultOne: "win", resultTwo: "lose" },
  { playerOne: "Magos Hehetek", gangOne: "Brain Dancers", houseOne: "Helot Chaos Cults", playerTwo: "LosAntos", gangTwo: "Żelazne Kufle", houseTwo: "Ironhead Squat Prospectors", territory: "Refuse Drift", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Karmatis", gangOne: "Purple Scars", houseOne: "Corpse Grinder Cult", playerTwo: "Ender", gangTwo: "Salamanders", houseTwo: "Ironhead Squat Prospectors", territory: "Corpse Farm", resultOne: "lose", resultTwo: "win" },
  { playerOne: "metalfan", gangOne: "The Neon Spectre", houseOne: "Delaque", playerTwo: "Nahar", gangTwo: "Femgaj Boyzz", houseTwo: "Goliath", territory: "Drinking Hole" },
  { playerOne: "Marcin z Chmielu", gangOne: "Chains & Corsets", houseOne: "Escher", playerTwo: "Twentytwo", gangTwo: "Bad Mojo", houseTwo: "Escher", territory: "Collapsed Dome", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Telchar", gangOne: "Rad Queens", houseOne: "Escher", playerTwo: "Paul Formann", gangTwo: "The Death Asterism", houseTwo: "Spyre Hunters", territory: "Bone Shrine", resultOne: "lose", resultTwo: "win" },
  { playerOne: "Wikoroo", gangOne: "The Thousandfold Charge", houseOne: "Van Saar", playerTwo: "Adam1983", gangTwo: "Blades of Primus", houseTwo: "Escher", territory: "Gambling Den", resultOne: "win", resultTwo: "lose" },
];

const roundOneLore = [
  "Nowy Kopiec dopiero wyrasta z popiołów. Nad rozrastającymi się hab-blokami wiszą dźwigi, niedokończone wieże, a pod nimi tysiące robotników, osadników, kontraktorów i wyrzutków próbują wyrwać dla siebie kawałek przyszłości. Jedni przybyli tu pracować. Drudzy handlować. Większość po prostu liczy, że przeżyje wystarczająco długo, by nie umrzeć biednie. Na Necromundzie każda nowa osada jest obietnicą zysku. A każda obietnica zysku prędzej czy później kończy się trupem.",
  "Pierwsze strzały i pierwsze ciała zaczęły znikać w odpływach, zsuwając się przez kanały i rozbite rury procesowe do toksycznych sumpów pod fundamentami kopca, tam, gdzie chemikalia żrą stal, a martwe mięso przestaje mieć imię.",
  "Nowy kopiec przyciąga wielu różnych typów. Każdy chce pilnować swoich interesów: klany, pracowników kontraktowych, handlarzy, ochroniarzy i ambitnych liderów. Jednak znacznie szybciej zjawiają się ci, którzy nie chcą niczego budować. Różne gangi przybywają po magazyny, transporty, wodę, paliwo, chemy, broń i cudzy strach. Czasami łatwiej jest odebrać niż zapracować.",
  "Z popielnych pustkowi nadchodzą także brudne bandy. Dla nich młody kopiec nie jest domem ani nadzieją. Jest raną w ziemi, którą można ograbić. Konwoje znikają na drogach, zwiadowcy wracają bez skóry, a ci, którzy widzieli zakapturzone sylwetki przesuwające się przez żółty pył, przestają spać przy wygaszonych światłach.",
  "W cieniu niedokończonych faktoriów rosną też kulty. Fałszywi prorocy obiecują głodnym pracownikom przeżycie, przyjemności a także zbawienie. Rekrutują niezrzeszonych, zagubionych i tych, których nikt nie będzie szukał. Dają im maskę, broń i nowe imię. Potem każą klękać przed zmyślonymi bogami.",
  "Palanite Enforcerzy próbują narzucić Kopcowi Pax Helmawr. Stawiają barykady, zamykają sektory, rozbijają zbiegowiska i każą wisieć pierwszym przykładowym trupom tam, gdzie wszyscy mogą je zobaczyć. Ale porządek w młodym kopcu jest tylko cienką warstwą farby położoną na zardzewiałym metalu.",
  "Pod nią czeka głód. Chciwość. Strach. I wojna.",
  "Nie będzie tu bohaterów. Będą tylko ci, którzy przeżyją wystarczająco długo, by nazwać siebie zwycięzcami.",
];

const roundTwoLore = [
  "Pierwsze dni wojny skończyły się szybciej, niż ktokolwiek w administracji przewidywał. Niedokończone sektory już mają swoich właścicieli, a ich granice wyznaczają nie mapy i akty własności, lecz wypalone ślady po plazmie, porzucone łuski i ciała spływające kanałami ku sumpom.",
  "Escherki przejęły inicjatywę. Ich bandy pojawiają się wszędzie: w tunelach, na targowiskach, przy magazynach i w cieniu świeżo postawionych faktoriów. Prawie każdy, kto stanął im na drodze, został rozbity, przepędzony albo zostawiony na zimnych kratownicach. Zdobyły cenny Archaeotech Device, przejęły tunel z leczniczym grzybem i dały całemu Kopcowi jasny sygnał: to one jako pierwsze zrozumiały, że tu nie chodzi o przetrwanie. Tu chodzi o dominację.",
  "Nie tylko one ruszyły po władzę. Spaczone bandy Chaosu przedarły się do wnętrza osady, przynosząc ze sobą rytuały, rzeź i obietnice siły dla każdego, kto jest dość głodny, zdesperowany albo głupi, by ich słuchać. W miejscach, gdzie jeszcze niedawno pracownicy składali konstrukcje pod nowe hab-bloki, teraz pojawiają się znaki wymalowane krwią i stosy ciał, których nikt nie chce zabierać.",
  "Van Saarowie zdołali wyrwać dla siebie Smelting Works, ale ich technologiczna przewaga nie ochroniła ich na innych frontach. Goliathy także pokazali, że są gotowi rozbijać wszystko, czego nie mogą przesunąć siłą mięśni. Każda huta, generator, bazar i zapomniany fragment archeotechnologii staje się teraz punktem zapalnym.",
  "A Enforcerzy zawiedli. Zamiast zdusić przemoc w zarodku, zostali upokorzeni, rozproszeni i zmuszeni do odwrotu. Ich odznaki nie budzą jeszcze strachu, a Pax Helmawr brzmi w Kopcu jak pusty slogan. Władze będą musiały zmienić strategię. Patrole i ostrzeżenia nie wystarczą.",
  "Kopiec nie jest już placem budowy. Stał się polem łowieckim.",
];

const labelStyle = { fontFamily: '"Barlow Condensed", sans-serif' };
const bodyStyle = { fontFamily: '"Roboto Condensed", system-ui, sans-serif' };
const tableGrid = "grid-cols-[minmax(250px,0.9fr)_minmax(390px,1.7fr)_minmax(170px,0.7fr)_112px]";

export function RaportyPageV3() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} src={necromundaLogo} alt="Necromunda" className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10" />
          <div className="relative z-10 max-w-[1640px] mr-auto ml-[max(0px,min(calc((100%-1640px)/2),200px))]">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-10 mt-[57px] lg:mt-0" style={labelStyle}>Raporty</motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="space-y-10">
              <RoundSection title="Runda 1 - Początek." image="/GWC01.jpg" imageAlt="Wędrowcy zmierzający ku młodemu kopcowi Great Warsaw Campaign" lore={roundOneLore} info={<><span>Scenariusz: Tunnel Skirmish / Stand-off</span><br /><span>Termin 1 rundy: 22.06-05.07</span><br /><span>Rewards: używany jest rewards z Tunnel Skirmish niezależnie od tego czy gra się rozgrywa w Tunelach czy na Zone Mortalis, czyli 2D6x10 dla wygranego, D3x5 dla przegranego i D6x10 dla każdego w przypadku remisu.</span></>} />
              <ReportsTable matches={roundOneMatches} />
              <RoundSection title="Runda 2 - Nowe porządki." image="/runda02.jpg" imageAlt="Walka o władzę w sektorach nowego Kopca" lore={roundTwoLore} info={<><span>Scenariusz: Border Dispute</span><br /><span>Termin 2 rundy: 06.07-19.07</span></>} />
              <ReportsTable matches={roundTwoMatches} />
            </motion.div>
          </div>
        </section>
        <div className="border-t border-[#bebdbc]"><p className="text-[#6e757c] text-[12px] text-center py-4 px-6 lg:px-16" style={{ fontFamily: '"Roboto Mono", monospace' }}>Necromunda and all associated logos, characters, names, and artwork are trademarks and/or copyrights of Games Workshop Ltd. This website and campaign are unofficial fan projects and are not endorsed by Games Workshop.</p></div>
      </div>
    </PageLayout>
  );
}

function RoundSection({ title, image, imageAlt, lore, info }: { title: string; image: string; imageAlt: string; lore: string[]; info: React.ReactNode }) {
  return (
    <section className="space-y-6 pt-6">
      <h2 className="text-[#1c3b56] text-[32px] font-semibold leading-[normal]" style={labelStyle}>{title}</h2>
      <img src={image} alt={imageAlt} className="w-full h-[260px] sm:h-[380px] lg:h-[703px] object-cover" />
      <div className="space-y-1 text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>{lore.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <p className="self-stretch text-[32px] font-semibold leading-[normal] text-[#1c3b56]" style={labelStyle}>{info}</p>
    </section>
  );
}

function ReportsTable({ matches }: { matches: Match[] }) {
  return (
    <section className="overflow-x-auto">
      <div className="min-w-[1120px]">
        <div className={`grid ${tableGrid} gap-6 px-4 py-2 border-b-2 border-[#0d0d0e] text-[#0d0d0e] text-[18px] font-medium uppercase`} style={labelStyle}><span>Gracze</span><span>Gangi</span><span>Terytoria</span><span>Wynik</span></div>
        <div>{matches.map((match) => <MatchRow key={`${match.playerOne}-${match.playerTwo}`} match={match} />)}</div>
      </div>
    </section>
  );
}

function MatchRow({ match }: { match: Match }) {
  return (
    <div className={`grid ${tableGrid} gap-6 items-center pl-4 pr-6 py-3 bg-[#f9f5f3] border-b border-[#bebdbc] text-[20px] font-semibold leading-[normal]`} style={labelStyle}>
      <p><span className="uppercase text-[#00378d]">{match.playerOne}</span> <span className="text-[#0d0d0e]">vs</span> <span className="uppercase text-[#00378d]">{match.playerTwo}</span></p>
      <p><span className="uppercase text-[#00378d]">{match.gangOne}</span> <span className="text-[#0d0d0e]">({match.houseOne}) vs </span><span className="uppercase text-[#00378d]">{match.gangTwo}</span> <span className="text-[#0d0d0e]">({match.houseTwo})</span></p>
      <p className="uppercase text-[#00378d]">{match.territory}</p>
      <div className="flex items-center gap-4 min-h-8">{match.resultOne && <ResultTag result={match.resultOne} />}{match.resultTwo && <ResultTag result={match.resultTwo} />}</div>
    </div>
  );
}

function ResultTag({ result }: { result: Result }) {
  const isLose = result === "lose";
  return <span className={`inline-flex items-center justify-center min-w-12 h-8 px-2 rounded-md text-[16px] font-semibold uppercase text-white ${isLose ? "bg-[#6e757c]" : "bg-[#00378d]"}`} style={labelStyle}>{result.toUpperCase()}</span>;
}
