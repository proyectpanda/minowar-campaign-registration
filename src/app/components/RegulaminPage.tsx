import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";

const labelStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
};
const bodyStyle = {
  fontFamily: '"Roboto Condensed", system-ui, sans-serif',
};

export function RegulaminPage() {
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
              Regulamin
            </motion.h1>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-6"
            >
              <Section title="1. Cel kampanii">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Wielka Necromunda Warszawska to kampania organizowana w celu zebrania i zintegrowania graczy Necromundy z Warszawy i okolic.</li>
                  <li>Kampania ma charakter społecznościowy i ma wspierać regularne granie, poznawanie nowych graczy oraz rozwój lokalnej sceny Necromundy.</li>
                  <li>Kampania jest otwarta zarówno dla doświadczonych graczy, jak i osób, które dopiero zaczynają swoją przygodę z Necromundą.</li>
                  <li>Celem kampanii nie jest stworzenie zamkniętego turnieju dla najbardziej doświadczonych graczy, ale wspólnej, aktywnej i przyjaznej społeczności.</li>
                </ol>
              </Section>

              <Section title="2. Organizatorzy i lokalizacje">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Głównym organizatorem kampanii jest Minowar.com, znany jako "projectpanda_" na Discord o imieniu Dominik.</li>
                  <li>Główny organizator pełni również funkcję głównego arbitra kampanii.</li>
                  <li>
                    Współorganizatorami kampanii są lokalne kluby, sklepy oraz osoby opiekujące się danymi miejscami gry:
                    <br />- Chmiel i Słód — Marcin, Piotrek,
                    <br />- Matisoft — Toll Kowalski.
                  </li>
                  <li>
                    Organizatorzy i lokalni opiekunowie pomagają graczom w sprawach związanych z:
                    <br />- organizacją gier,
                    <br />- pytaniami dotyczącymi kampanii,
                    <br />- podstawowymi wątpliwościami dotyczącymi zasad,
                    <br />- rozwiązywaniem sporów,
                    <br />- kontaktem z lokalną społecznością.
                  </li>
                  <li>Ostateczna decyzja organizacyjna oraz ostateczna interpretacja spornych sytuacji należy do głównego organizatora.</li>
                  <li>Każda lokalizacja partnerska zapewnia możliwość gry oraz dostęp do stołów i terenów.</li>
                </ol>
              </Section>

              <Section title="3. Start kampanii">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Dokładny termin startu kampanii zostanie ustalony po zebraniu zgłoszeń i sprawdzeniu zainteresowania graczy.</li>
                  <li>Planowany start kampanii - 22 czerwca.</li>
                  <li>Pierwsza edycja kampanii może zostać potraktowana jako sezon testowy / pilotażowy.</li>
                </ol>
              </Section>

              <Section title="4. Rejestracja">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Rejestracja do kampanii będzie odbywać się przez stronę wydarzenia.</li>
                  <li>
                    Podczas rejestracji gracz będzie mógł:
                    <br />- zapisać się do kampanii,
                    <br />- wpisać swój gang,
                    <br />- wybrać domyślną lokalizację / bazę.
                  </li>
                  <li>Domyślna lokalizacja / baza służy głównie celom organizacyjnym i statystycznym.</li>
                  <li>Wybór domyślnej lokalizacji nie oznacza obowiązku grania wyłącznie w tym miejscu.</li>
                  <li>Gracze mogą rozgrywać swoje gry w dowolnej lokalizacji partnerskiej.</li>
                  <li>Rejestracja będzie dostępna do końca 19 czerwca. Od 20 czerwca formularz rejestracji nie będzie już dostępny, gdyż rozpoczną się przygotowania do startu Kampanii.</li>
                </ol>
              </Section>

              <Section title="5. Wpisowe i nagrody">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Wpisowe do kampanii jest obowiązkowe.</li>
                  <li>Wysokość wpisowego to 100zł w pierwszej edycji.</li>
                  <li>Jeśli kampania nie dojdzie do skutku z przyczyn decyzji organizatora to pieniądze są zwracane.</li>
                  <li>Wpisowe jest przeznaczone na organizację kampanii, wsparcie lokalizacji partnerskich oraz pulę nagród oraz na przygotowanie zaplecza terenowego pod kolejne edycje.</li>
                  <li>Wpisowe nie podlega zwrotowi w przypadku rezygnacji gracza lub wykluczenia z kampanii przez organizatora.</li>
                  <li>Szczegółowe odnośnie wpłaty wpisowego będzie przesłane w wiadomości na adres e-mail wpisany podczas rejestracji.</li>
                </ol>
              </Section>

              <Section title="6. Format kampanii">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Kampania będzie oparta na standardowej kampanii Dominion.</li>
                  <li>Kampania będzie składać się z 6 cykli / rund.</li>
                  <li>Każda runda trwa maksymalnie 2 tygodnie.</li>
                  <li>Jeśli wszystkie gry w danej rundzie zostaną rozegrane wcześniej, kolejna runda może rozpocząć się szybciej.</li>
                  <li>Kampania nie będzie opóźniana przez nierozgrywanie meczów w terminie.</li>
                  <li>Każda runda będzie miała jeden wspólny scenariusz wskazany przez organizatora.</li>
                  <li>Wszyscy gracze w danej rundzie grają ten sam scenariusz.</li>
                  <li>Pairingi będą losowane co rundę.</li>
                  <li>Organizatorzy będą starać się unikać powtarzania tych samych par graczy.</li>
                  <li>Kampania będzie prowadzona w aplikacji Munda Manager.</li>
                  <li>Organizatorzy dołożą wszelkich starań aby nowi/niedoświadczeni gracze byli w początkowych fazach dobierani w pary z “Mentorami”, czyli graczami którzy będą służyć wsparciem w pierwszych grach i wprowadzą w klimat świata gry.</li>
                </ol>
              </Section>

              <Section title="7. Gangi i rozpiski">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Startowa rozpiska gangu wynosi 1000 kredytów.</li>
                  <li>Wszystkie oficjalne gangi Necromundy są dopuszczone do kampanii.</li>
                  <li>Gracz odpowiada za prawidłowe przygotowanie swojej rozpiski.</li>
                  <li>House rules będą ograniczone do minimum.</li>
                  <li>Jeśli w kampanii zostaną użyte dodatkowe zasady, zostaną opisane w osobnym dokumencie i udostępnione wszystkim graczom.</li>
                  <li>Rozpiski można dopracowywać i zmieniać do końca 19 czerwca. Po tym czasie wszelkie zmiany nie będą dozwolone.</li>
                  <li>Necromunda nie jest idealnie zbalansowanym systemem, dlatego prosimy graczy o zachowanie zdrowego rozsądku przy tworzeniu gangów. Nie chcemy nadmiernie ograniczać dostępnych zasad i opcji, ale zachęcamy do przygotowywania rozpisek klimatycznych, ciekawych i przyjemnych do gry dla obu stron, bez przesadnego wykorzystywania najmocniejszych kombinacji.</li>
                  <li>Po zalockowaniu rozpisek organizatorzy dołożą wszelkich starań, aby zweryfikować ich zgodność z zasadami kampanii i obowiązującymi zasadami gry.</li>
                </ol>
              </Section>

              <Section title="8. Punktacja i rozgrywki">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Wyniki kampanii będą prowadzone w Munda Managerze i określane wedle zasad kampanii Dominion.</li>
                  <li>
                    Proponowany system punktacji:
                    <br />- 3 pkt — zwycięstwo,
                    <br />- 2 pkt — remis,
                    <br />- 1 pkt — porażka,
                    <br />- 0 pkt — walkower z winy gracza,
                    <br />- 2 pkt — dla gracza gotowego do gry, jeśli przeciwnik nie rozegrał meczu.
                  </li>
                  <li>Dodatkowo liczone będą kille / fragi.</li>
                  <li>Kille / fragi mogą być używane jako tie-breaker w przypadku remisu punktowego dlatego zaleca się ich odnotowywanie.</li>
                  <li>Po każdej grze należy dodać Battle Report w Munda Managerze oraz w polu tekstowym dostępnym dla dodatkowej treści opisu zapisać fragi (ilość modeli Out of Action dla każdej ze stron) które każdy z graczy zdobył.</li>
                  <li>Po zakończonej kampanii będą nadawane wyróżnienia (Triumphs) należne graczom którzy je osiągnęli.</li>
                  <li>Głównym zwycięzcą zostanie gracz, który wygra najwięcej gier głównych wynikających. Misje/rozgrywki dodatkowe (np. Rescue Mission itp) nie będą przy tym uwzględniane.</li>
                </ol>
              </Section>

              <Section title="9. Umawianie gier i walkowery">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Gracze sami umawiają się na termin oraz miejsce rozegrania gry w ramach danej rundy.</li>
                  <li>Gra musi zostać rozegrana w czasie trwania rundy.</li>
                  <li>Jeśli mecz nie zostanie rozegrany w terminie, kampania nie zostaje opóźniona.</li>
                  <li>Jeśli brak rozegrania gry wynika z winy jednego gracza, ten gracz otrzymuje walkower.</li>
                  <li>Gracz, który był gotowy do gry, ale nie mógł jej rozegrać z winy przeciwnika, otrzymuje punkty zgodnie z systemem punktacji.</li>
                  <li>Jeśli obie strony nie doprowadziły do rozegrania meczu, obie otrzymują 0 punktów.</li>
                  <li>W sytuacjach spornych decyzję podejmują organizatorzy lub główny organizator.</li>
                </ol>
              </Section>

              <Section title="10. Modele, proxy i malowanie">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Pomalowane gangi są mile widziane.</li>
                  <li>W tej edycji kampanii pomalowany gang nie jest wymagany.</li>
                  <li>Modele powinny być możliwie czytelne dla przeciwnika.</li>
                  <li>Pełny WYSIWYG nie jest wymagany.</li>
                  <li>Uzbrojenie i ekwipunek powinny być jednak reprezentowane w rozsądny sposób.</li>
                  <li>Niedopuszczalne są mylące proxy oraz modele całkowicie niepasujące do reprezentowanego ekwipunku.</li>
                  <li>Przykład niedopuszczalnego proxy: model Space Marine z lascannonem używany jako zwykły ganger ze stub gunem.</li>
                  <li>W przypadku wątpliwości gracz powinien wyjaśnić przeciwnikowi przed grą, co reprezentują jego modele.</li>
                </ol>
              </Section>

              <Section title="11. Nowi gracze i znajomość zasad">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Kampania ma być przyjazna dla nowych graczy.</li>
                  <li>Organizatorzy i bardziej doświadczeni gracze mogą pomagać nowym osobom przy pytaniach i podstawowych zasadach.</li>
                  <li>Zalecane jest wcześniejsze zapoznanie się z podstawowymi zasadami gry.</li>
                  <li>Podczas rozgrywki może nie być czasu na pełne tłumaczenie wszystkich zasad od podstaw.</li>
                  <li>Gracze powinni znać podstawowe mechaniki swojej frakcji, broni i gangu.</li>
                  <li>Kampania wykorzystuje standardowe mechaniki wspierające słabsze gangi, np. House Favours.</li>
                  <li>Organizatorzy dołożą wszelkich starań aby nowi/niedoświadczeni gracze byli w początkowych fazach dobierani w pary z “Mentorami”, czyli graczami którzy będą służyć wsparciem w pierwszych grach i wprowadzą w klimat świata gry.</li>
                </ol>
              </Section>

              <Section title="12. Komunikacja">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Główna komunikacja kampanii będzie prowadzona na specjalnie wydzielonym kanale Discordzie serweru Minowar.</li>
                  <li>
                    Na głównym kanale kampanii będą publikowane:
                    <br />- pairingi,
                    <br />- scenariusze,
                    <br />- terminy rund,
                    <br />- ogłoszenia,
                    <br />- ważne decyzje organizacyjne.
                  </li>
                  <li>
                    Gracze mogą również korzystać z lokalnych Discordów i kanałów komunikacji należących:
                    <br />- Matisoft,
                    <br />- Chmiel i Słód.
                  </li>
                  <li>Informacje publikowane na głównym kanale kampanii są traktowane jako oficjalne informacje organizacyjne.</li>
                  <li>Gracz powinien śledzić główny kanał kampanii, aby być na bieżąco z rundami, terminami i decyzjami organizacyjnymi.</li>
                  <li>Do momentu startu pierwszej rundy kampanii, a także w wyjątkowych sytuacjach i w jej trakcie, mogą być wysyłane wiadomości z ważnymi komunikatami organizacyjnymi na adresy email wpisane przez graczy podczas rejestracji.</li>
                </ol>
              </Section>

              <Section title="13. Promocja kampanii">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Po ustaleniu terminu i zasad kampanii sklepy i kluby biorące udział w wydarzeniu mogą publikować informacje o kampanii na swoich kanałach.</li>
                  <li>
                    Informacje o kampanii mogą pojawić się między innymi na:
                    <br />- Facebooku,
                    <br />- Discordzie,
                    <br />- lokalnych grupach społecznościowych,
                    <br />- stronach sklepów i klubów.
                  </li>
                  <li>Celem promocji jest dotarcie do jak największej liczby graczy Necromundy z Warszawy i okolic.</li>
                </ol>
              </Section>

              <Section title="14. Kultura gry i fair play">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>W kampanii obowiązuje normalna kultura osobista i fair play.</li>
                  <li>Gracze powinni traktować przeciwników z szacunkiem.</li>
                  <li>Kampania ma być miejscem przyjaznym dla nowych i doświadczonych graczy.</li>
                  <li>Agresja, toksyczne zachowanie, obrażanie innych graczy lub powtarzające się skargi mogą skutkować wykluczeniem z kampanii.</li>
                  <li>Decyzję o wykluczeniu gracza podejmują organizatorzy lub główny organizator.</li>
                  <li>W przypadku wykluczenia wpisowe nie podlega zwrotowi.</li>
                </ol>
              </Section>

              <Section title="15. Spory i interpretacje zasad">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>W przypadku wątpliwości dotyczących zasad gracze mogą zwrócić się do organizatorów lub lokalnych opiekunów.</li>
                  <li>Spory przy stole powinny być rozwiązywane spokojnie i z poszanowaniem przeciwnika.</li>
                  <li>Jeśli gracze nie są w stanie dojść do porozumienia, decyzję podejmuje organizator lub główny arbiter.</li>
                  <li>Ostateczna interpretacja zasad i sytuacji spornych należy do głównego organizatora.</li>
                </ol>
              </Section>

              <Section title="16. Postanowienia końcowe">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Udział w kampanii oznacza akceptację regulaminu.</li>
                  <li>Organizatorzy mogą aktualizować regulamin przed startem kampanii.</li>
                  <li>Ewentualne zmiany regulaminu w trakcie kampanii powinny być ogłaszane na głównym kanale komunikacji.</li>
                  <li>Celem regulaminu jest zapewnienie sprawnej organizacji, jasnych zasad i dobrej atmosfery podczas kampanii.</li>
                </ol>
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
        className="uppercase text-[#1c3b56] text-[32px] font-semibold leading-[38px]"
        style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
