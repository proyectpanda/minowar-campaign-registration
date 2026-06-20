import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";
import matisoftLogo from "@/imports/matisoft.b64";
import chmielLogo from "@/imports/chmiel.b64";

const labelStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
};
const bodyStyle = {
  fontFamily: '"Roboto Condensed", system-ui, sans-serif',
};

export function OKampaniiPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          {/* Necromunda logo */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src={necromundaLogo}
            alt="Necromunda"
            className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10"
          />

          <div className="relative z-10 max-w-[1400px] mr-auto ml-[max(0px,min(calc((100%-1400px)/2),200px))]">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-6 mt-[57px] lg:mt-0"
              style={labelStyle}
            >
              Kampania
            </motion.h1>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-6"
            >
              <Section title="Pomysł">
                <p className="text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                  Wielka Kampania Warszawska to wydarzenie stworzone po to, aby w końcu zebrać graczy Necromundy z Warszawy i okolic w jednym, wspólnym wydarzeniu. Chcemy połączyć ludzi z różnych klubów, sklepów i lokalnych grup, ułatwić umawianie gier, poznać nowych przeciwników i zbudować regularną społeczność wokół Necromundy. Wszyscy gramy w różnych miejscach, mamy różne grupy znajomych i absolutnie nie chcemy tego zmieniać. Chcemy stworzyć okazje aby móc w końcu się zrzeszyć pod jednym szyldem w systemie który tak bardzo uwielbiamy.
                </p>
              </Section>

              <Section title="Organizatorzy i partnerzy">
                <p className="text-[#6e757c] text-[18px] leading-[28px] mb-6" style={bodyStyle}>
                  Poniżej macie logosy organizatorów. Każdy z właścicieli danej bazy w której grać będziemy szefuje lokalnie. Także w razie jakiś zapytań czy sporów, to oni służą pomocą.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
                  <a
                    href="https://www.minowar.com"
                    aria-label="Minowar.com"
                    className="transition-all duration-200 hover:scale-105 hover:opacity-90"
                  >
                    <span
                      className="text-black text-[32px] sm:text-[40px] font-bold"
                      style={{ fontFamily: '"Teko", "Barlow Condensed", sans-serif' }}
                    >
                      Minowar.com
                    </span>
                  </a>
                  <a
                    href="https://mgc.com.pl/"
                    aria-label="Matisoft"
                    className="transition-all duration-200 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src={matisoftLogo}
                      alt="Matisoft"
                      className="h-[120px] object-contain"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/ChmieliSlod/"
                    aria-label="Chmiel i Słód"
                    className="transition-all duration-200 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src={chmielLogo}
                      alt="Chmiel i Słód"
                      className="h-[120px] w-[120px] object-contain"
                    />
                  </a>
                  <img
                    src="/lootpile-logo.svg"
                    alt="LootPile.eu"
                    className="h-[120px] w-[160px] object-contain"
                  />
                </div>
              </Section>

              <Section title="Dla kogo ta kampania?">
                <div className="text-[#6e757c] text-[18px] leading-[28px] space-y-4" style={bodyStyle}>
                  <p>W skrócie - dla wszystkich!</p>
                  <p>
                    To nie jest zamknięta kampania dla weteranów ani turniej dla najbardziej odjechanych rozpisek. To wydarzenie dla wszystkich, którzy chcą grać, świetnie się bawić, poznawać innych graczy i wspólnie tworzyć necromundową historię w Wwie. Dla nowych, dla starych i dla skłóconych ze sobą. To wydarzenie jest okazją aby zresetować pewne spory i po prostu grać.
                  </p>
                  <p>Nie musisz być ekspertem od zasad. Ważne, żeby znać podstawy i mieć chęć do gry.</p>
                </div>
              </Section>

              <Section title="Główne założenia">
                <ul className="text-[#6e757c] text-[18px] leading-[28px] list-disc pl-6 space-y-2" style={bodyStyle}>
                  <li>Kampania będzie otwarta dla graczy z Warszawy i okolic. Jeśli ktoś ma ochotę pograć w większym gronie i jest z drugiego końca Polski to też zapraszamy!</li>
                  <li>Przy rejestracji gracz wybiera swoją domyślną bazę, czyli miejsce, z którym chce być przypisany organizacyjnie. Nie oznacza to jednak, że musi grać tylko tam. To ma pomóc w planowaniu kampanii i sprawdzeniu, gdzie zbiera się najwięcej graczy.</li>
                  <li>Za kampanię pobieramy wpisowe w kwocie 100zł. Te pieniądze przeznaczamy na opłacenie organizatorów, stołów, zarządzanie kampanią, a także na nagrody. Pieniądze są też potrzebne aby zebrać budżet na przygotowanie zaplecza terenowego na kolejne edycje eventów, bo jak każdy pewnie wie - ten system wymaga naprawdę rozbudowanego terenu do przyjemnej gry. Bez tego organizacja tego typu wydarzeń nie będzie możliwa.</li>
                  <li>Wiadomo, każdy gra aby dołożyć przeciwnikowi, pokazać kto rządzi w Hive'ie ale proszę pamietać o jednym - to nie turniej, to nie gra o złote goliackie gacie. Necromunda jest grą nie do końca zbalansowaną służącą przede wszystkim do dobrej zabawy i taką atmosferę chcemy stworzyć. Grajcie aby wygrać, w Kopcu nie ma litości! ale pamiętajcie żeby być po prostu fajnym gościem z którym każdy ponownie chętnie zagra.</li>
                  <li>Gramy w kilku lokalizacjach partnerskich: Matisoft, Chmiel i Słód. Liczymy że w przyszłości więcej klubów do nas dołączy i rozszerzymy zakres miejscówek.</li>
                  <li>Kampania będzie przyjazna dla nowych graczy.</li>
                  <li>Pomalowane gangi są mile widziane, ale nie będą wymagane w tej edycji.</li>
                  <li>Modele powinny być czytelne dla przeciwnika i rozsądnie reprezentować swój ekwipunek (WYSIWYG wskazany).</li>
                  <li>Najważniejsze informacje odnośnie kampanii, pary, scenariusze będą publikowane na głównym kanale komunikacyjnym kampanii (Discord).</li>
                  <li>
                    Szczegółowe zasady będą opisane osobno w{" "}
                    <a href="/regulamin" className="text-[#1c3b56] underline">regulaminie</a>.
                  </li>
                  <li>Przewidziane są nagrody dla najmocniejszych gangów ale także dla najbardziej fair graczy</li>
                </ul>
              </Section>

              <Section title="Jak będzie wyglądać kampania?">
                <div className="text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                  <p className="mb-4">W skrócie:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kampania będzie oparta na klasycznym formacie Dominion, z rozwojem gangów, kolejnymi rundami i wspólnymi scenariuszami dla graczy.</li>
                    <li>Każda runda będzie miała określony czas na rozegranie gry (do 2 tygodni).</li>
                    <li>Gracze sami umawiają się ze swoim przeciwnikiem na termin i miejsce rozgrywki.</li>
                    <li>
                      Całość ma być prowadzona w sposób prosty i przejrzysty na{" "}
                      <a href="https://www.mundamanager.com/" target="_blank" rel="noopener noreferrer" className="text-[#1c3b56] underline">
                        www.mundamanager.com
                      </a>.
                    </li>
                    <li>Na start nie chcemy komplikować gry niepotrzebnymi dodatkowymi zasadami, czy house rule'ami. Ograniczymy to niezbędnego minimum tak aby nowi gracze mogli łatwiej wejść w kampanię.</li>
                  </ul>
                </div>
              </Section>

              <Section title="Co dalej?">
                <p className="text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                  Jeśli kampania się przyjmie, planowane są kolejne edycje oraz wydarzenia towarzyszące, takie jak konkursy malarskie, kitbashowe czy specjalne scenariusze. Wiele zależy od was. Możemy wspomnieć że już rozmiawiamy z kolejnymi grupami i współorganizatorami. Necromunda jest silna!
                </p>
              </Section>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer strip */}
        <div className="border-t border-[#bebdbc]">
          <p
            className="text-[#6e757c] text-[12px] text-center py-4 px-6 lg:px-16"
            style={{ fontFamily: '"Roboto Mono", monospace' }}
          >
            Necromunda and all associated logos, characters, names, and artwork
            are trademarks and/or copyrights of Games Workshop Ltd. This website
            and campaign are unofficial fan projects and are not endorsed by
            Games Workshop.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2
        className="uppercase text-[#1c3b56] text-[32px] font-semibold leading-[normal]"
        style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
