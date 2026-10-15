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
                  <li>Kampania ma charakter społecznościowy. Wspiera regularne granie, poznawanie nowych graczy oraz rozwój lokalnej sceny Necromundy.</li>
                  <li>Kampania jest otwarta zarówno dla doświadczonych graczy, jak i osób, które dopiero zaczynają swoją przygodę z Necromundą.</li>
                  <li>Celem kampanii jest budowanie wspólnej, aktywnej i przyjaznej społeczności.</li>
                </ol>
              </Section>

              <Section title="2. Organizatorzy i lokalizacje">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Głównym organizatorem kampanii jest Dominik z Minowar.com, znany na Discordzie jako „projectpanda_”.</li>
                  <li>Główny organizator pełni również funkcję głównego arbitra kampanii (Arbitratora).</li>
                  <li>Współorganizatorami kampanii są Chmiel i Słód (opiekunowie: Marcin i Piotrek), Matisoft (opiekun: Toll Kowalski) oraz Battle Hub Warszawa.</li>
                  <li>Organizatorzy i lokalni opiekunowie pomagają w organizacji bitew, pytaniach dotyczących kampanii, podstawowych wątpliwościach dotyczących zasad, rozwiązywaniu sporów i kontakcie z lokalną społecznością.</li>
                  <li>Ostateczne decyzje organizacyjne oraz interpretacje spornych sytuacji należą do głównego arbitra.</li>
                  <li>Bitwy odbywają się głównie w lokalizacjach partnerskich, zapewniających dostęp do stołów i terenów. Gracze mogą korzystać z dowolnej lokalizacji partnerskiej.</li>
                </ol>
              </Section>

              <Section title="3. Terminy">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Planowany start kampanii: <strong>9 listopada 2026 r.</strong></li>
                  <li>Rejestracja jest otwarta <strong>do końca 8 listopada 2026 r.</strong></li>
                  <li>Terminy poszczególnych cykli są ogłaszane na głównym kanale kampanii na Discordzie.</li>
                </ol>
              </Section>

              <Section title="4. Rejestracja">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Rejestracja odbywa się w dwóch etapach: zgłoszenia wstępnego i rejestracji właściwej.</li>
                  <li>Po uruchomieniu formularza na stronie wydarzenia gracz może przesłać zgłoszenie wstępne, podając wymagane dane, w tym adres e-mail, informacje o gangu oraz domyślną lokalizację gry.</li>
                  <li>Następnie organizatorzy sukcesywnie przesyłają na podane adresy e-mail zaproszenia do rejestracji właściwej. Wiadomość zawiera prośbę o uiszczenie wpisowego wraz z informacjami o płatności, zaproszenie na Discord kampanii oraz prośbę o przesłanie linku do rozpiski gangu w aplikacji MundaManager.</li>
                  <li>Gracz dokonuje rejestracji właściwej zgodnie z instrukcjami otrzymanymi w wiadomości.</li>
                  <li>Domyślna lokalizacja gry służy celom organizacyjnym i statystycznym. Jej wybór nie oznacza obowiązku rozgrywania wszystkich bitew w tym miejscu.</li>
                </ol>
              </Section>

              <Section title="5. Wpisowe i nagrody">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Wpisowe jest obowiązkowe i wynosi <strong>100 zł</strong>.</li>
                  <li>Informacje dotyczące płatności są przesyłane e-mailem w ramach rejestracji właściwej.</li>
                  <li>Jeśli kampania nie dojdzie do skutku, wpisowe jest zwracane.</li>
                  <li>Wpisowe jest przeznaczone na organizację kampanii, wsparcie lokalizacji partnerskich, pulę nagród oraz przygotowanie zaplecza terenowego pod kolejne edycje.</li>
                  <li>Wpisowe nie podlega zwrotowi w przypadku rezygnacji gracza lub wykluczenia go z kampanii przez organizatora.</li>
                  <li>Nagrody i kryteria ich przyznawania opisano w sekcji „Triumfy i wyróżnienia” na podstronie „Zasady kampanii”.</li>
                </ol>
              </Section>

              <Section title="6. Zasady gry i organizacja kampanii">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Podstawą rozgrywek jest <strong>Core Rulebook Necromunda Skirmish</strong>, określany na potrzeby kampanii jako <strong>N26</strong>, wraz z zasadami opisanymi na podstronie „Zasady kampanii”.</li>
                  <li>Strukturę kampanii określa sekcja „Fazy i cykle kampanii” w Zasadach kampanii.</li>
                  <li>Główny arbiter ustala dla wszystkich par w danym cyklu tę samą podstawową konfigurację głównej bitwy kampanijnej: scenariusz/objective, Crew oraz Deployment Zone. Szczegóły przygotowania bitwy opisano w sekcji „Scenariusze” w Zasadach kampanii.</li>
                  <li>Parowania uwzględniają priorytety i ograniczenia opisane w sekcji „Sojusze i walka o władzę” w Zasadach kampanii. W pierwszej kolejności gangi sojuszu są parowane ze wskazanym przez sojusz House’em lub frakcją, w miarę dostępności przeciwników, a następnie z pozostałymi gangami. Członkowie sojuszu nie są parowani ze sobą.</li>
                  <li>W ramach tych ograniczeń organizatorzy starają się unikać powtarzania tych samych par graczy.</li>
                  <li>Przy nieparzystej liczbie uczestników główny arbiter rozgrywa bitwę swoim gangiem awaryjnym, służącym do wyrównywania par. Pozostałe trudności w ustaleniu par rozwiązuje główny arbiter z uwzględnieniem zasad sojuszy.</li>
                  <li>Kampania jest prowadzona w aplikacji MundaManager.</li>
                </ol>
              </Section>

              <Section title="7. Gangi i rozpiski">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Gracz odpowiada za poprawność swojej rozpiski i prowadzenie gangu w MundaManagerze.</li>
                  <li>Budżet startowy i dopuszczone gangi określają Zasady kampanii.</li>
                  <li>Po rejestracji właściwej organizatorzy weryfikują rozpiski. Weryfikacja i konieczne korekty mogą odbywać się również po rozpoczęciu pierwszego cyklu.</li>
                  <li>Jeśli zostanie wykryty błąd, gracz ma obowiązek poprawić rozpiskę na prośbę głównego arbitra przed swoją kolejną bitwą.</li>
                  <li>Gracz zamierzający skorzystać z zasady „Founding an Enduring Gang” powinien uprzedzić o tym głównego arbitra. Warunki korzystania z tej możliwości opisano w sekcji „Historia i dziedzictwo” w Zasadach kampanii.</li>
                  <li>Dodatkowe zasady kampanii i house rules są publikowane na podstronie „Zasady kampanii”.</li>
                  <li>Necromunda nie jest idealnie zbalansowanym systemem, dlatego prosimy o zachowanie zdrowego rozsądku przy tworzeniu gangów. Zachęcamy do przygotowywania rozpisek klimatycznych, ciekawych i przyjemnych do gry dla obu stron, bez przesadnego wykorzystywania najmocniejszych kombinacji.</li>
                </ol>
              </Section>

              <Section title="8. Wyniki, punktacja i raporty">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Wyniki bitew są rejestrowane w MundaManagerze.</li>
                  <li>Dla głównych bitew kampanijnych obowiązuje następująca punktacja:
                  <div className="overflow-x-auto mt-3 mb-3">
                    <table className="w-full border-collapse text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
                      <thead><tr><th scope="col" className="border-b border-[#bebdbc] px-3 py-2 text-left font-semibold">Rozstrzygnięcie</th><th scope="col" className="border-b border-[#bebdbc] px-3 py-2 text-right font-semibold">Punkty</th></tr></thead>
                      <tbody>
                        <tr><td className="border-b border-[#bebdbc] px-3 py-2">Zwycięstwo</td><td className="border-b border-[#bebdbc] px-3 py-2 text-right tabular-nums">3</td></tr>
                        <tr><td className="border-b border-[#bebdbc] px-3 py-2">Remis</td><td className="border-b border-[#bebdbc] px-3 py-2 text-right tabular-nums">2</td></tr>
                        <tr><td className="border-b border-[#bebdbc] px-3 py-2">Porażka</td><td className="border-b border-[#bebdbc] px-3 py-2 text-right tabular-nums">1</td></tr>
                        <tr><td className="border-b border-[#bebdbc] px-3 py-2">Walkower z winy gracza</td><td className="border-b border-[#bebdbc] px-3 py-2 text-right tabular-nums">0</td></tr>
                        <tr><td className="border-b border-[#bebdbc] px-3 py-2">Zwycięstwo walkowerem gracza gotowego do gry, gdy przeciwnik nie rozegrał bitwy ze swojej winy</td><td className="border-b border-[#bebdbc] px-3 py-2 text-right tabular-nums">3</td></tr>
                      </tbody>
                    </table>
                  </div></li>
                  <li>Do nagrody Dominator liczy się <strong>liczba zwycięstw</strong>, a przy równej liczbie zwycięstw rozstrzyga <strong>liczba wrogich wojowników wyeliminowanych poprzez Out of Action (OOA)</strong>. Suma punktów nie zastępuje tych kryteriów.</li>
                  <li>Walkower i misję zastępczą rozlicza się zgodnie z rozdziałem 9. Za jeden cykl gracz może otrzymać tylko jedno rozstrzygnięcie zastępowanej głównej bitwy: zwycięstwo walkowerem albo wynik misji zastępczej.</li>
                  <li>Bitwy dodatkowe nie zwiększają punktacji ani bilansu zwycięstw i porażek uwzględnianego w klasyfikacji kampanii. Pozostałe osiągnięcia z tych bitew, w tym OOA, bogactwo i reputacja, mogą wpływać na odpowiednie wyróżnienia. Misja zastępcza rozliczana jako główna bitwa kampanijna nie jest na te potrzeby bitwą dodatkową.</li>
                  <li>Po każdej bitwie należy uzupełnić Battle Report w MundaManagerze. W opisie należy podać rodzaj bitwy — główna, zastępcza albo dodatkowa — oraz liczbę wrogich wojowników wyeliminowanych poprzez OOA przez każdą ze stron.</li>
                  <li>Pełną listę nagród i wyróżnień oraz ich kryteria określa sekcja „Triumfy i wyróżnienia” w Zasadach kampanii.</li>
                </ol>
              </Section>

              <Section title="9. Umawianie bitew, walkowery i misje zastępcze">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Gracze sami ustalają termin i miejsce bitwy w ramach danego cyklu.</li>
                  <li>Bitwa musi zostać rozegrana w czasie trwania cyklu. Nierozegranie bitwy w terminie nie opóźnia kampanii.</li>
                  <li>Problemy z rozegraniem bitwy należy zgłosić głównemu arbitrowi na Discordzie. Arbiter rozpatruje sytuację po wysłuchaniu obu stron.</li>
                  <li>Jeśli bitwa nie odbyła się z winy jednego gracza, otrzymuje on walkower i 0 punktów. Gracz gotowy do gry otrzymuje zwycięstwo walkowerem i 3 punkty.</li>
                  <li>Wyłącznie gracz gotowy do gry, który nie rozegrał bitwy z winy przeciwnika, może zamiast przyjęcia zwycięstwa walkowerem wybrać misję przeciwko Chaosowi lub Malstrain, opisaną w sekcji „Skażenie Chaosem oraz możliwa infekcja Malstrain” w Zasadach kampanii.</li>
                  <li>Misja zastępcza zastępuje główną bitwę zarówno na potrzeby klasyfikacji, jak i przydziału terytorium. Zalicza się jej rzeczywisty wynik: zwycięstwo, remis albo porażkę, wraz z odpowiadającą mu punktacją. Nie przyznaje się równocześnie zwycięstwa ani punktów za walkower.</li>
                  <li>Przy obustronnej winie obaj gracze otrzymują walkower i po 0 punktów.</li>
                  <li>Jeśli żadna ze stron nie ponosi winy za nierozegranie bitwy, rozstrzygnięcie należy do głównego arbitra.</li>
                </ol>
              </Section>

              <Section title="10. Modele, proxy i malowanie">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Pomalowane gangi są mile widziane, ale malowanie nie jest warunkiem udziału w kampanii.</li>
                  <li>Za pomalowany gang, opublikowanie jego zdjęcia na Discordzie kampanii oraz przygotowanie choćby krótkiej historii gangu przysługuje jednorazowy bonus na start <strong>+1 do Reputacji</strong>. Należy spełnić wszystkie trzy warunki.</li>
                  <li>Modele powinny być możliwie czytelne dla przeciwnika.</li>
                  <li>Pełny WYSIWYG nie jest wymagany, jednak uzbrojenie i ekwipunek powinny być reprezentowane w rozsądny sposób.</li>
                  <li>Niedopuszczalne są mylące proxy oraz modele całkowicie niepasujące do reprezentowanego ekwipunku. Przykładem niedopuszczalnego proxy jest model Space Marine z lascannonem używany jako zwykły ganger ze stub gunem.</li>
                  <li>W przypadku wątpliwości gracz powinien wyjaśnić przeciwnikowi przed bitwą, co reprezentują jego modele.</li>
                </ol>
              </Section>

              <Section title="11. Nowi gracze i znajomość zasad">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Kampania ma być przyjazna dla nowych graczy.</li>
                  <li>Organizatorzy i bardziej doświadczeni gracze mogą pomagać nowym osobom przy pytaniach i podstawowych zasadach.</li>
                  <li>Zalecane jest wcześniejsze zapoznanie się z podstawowymi zasadami gry. Podczas rozgrywki może nie być czasu na pełne tłumaczenie wszystkich zasad od podstaw.</li>
                  <li>Gracze powinni znać podstawowe mechaniki swojej frakcji, broni i gangu.</li>
                  <li>Organizatorzy będą starali się w początkowych cyklach dobierać nowych i niedoświadczonych graczy w pary z mentorami — graczami pomagającymi w poznaniu zasad i świata gry. Dobór ten uwzględnia obowiązujące ograniczenia parowania opisane w Zasadach kampanii.</li>
                </ol>
              </Section>

              <Section title="12. Komunikacja">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Główna komunikacja odbywa się na wydzielonym kanale kampanii na serwerze Discord Minowar.</li>
                  <li>Publikowane są tam parowania, konfiguracje bitew, terminy cykli, ogłoszenia i ważne decyzje organizacyjne.</li>
                  <li>Gracze mogą również korzystać z lokalnych kanałów komunikacji współorganizatorów.</li>
                  <li>Informacje publikowane na głównym kanale kampanii są oficjalnymi informacjami organizacyjnymi.</li>
                  <li>Gracz powinien śledzić główny kanał kampanii, aby być na bieżąco z terminami i decyzjami organizacyjnymi.</li>
                  <li>Przed rozpoczęciem kampanii, a w wyjątkowych sytuacjach także w jej trakcie, ważne komunikaty mogą być przesyłane na adresy e-mail podane podczas rejestracji.</li>
                </ol>
              </Section>

              <Section title="13. Kultura gry i fair play">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>W kampanii obowiązują kultura osobista i fair play.</li>
                  <li>Gracze powinni traktować przeciwników z szacunkiem.</li>
                  <li>Kampania ma być miejscem przyjaznym dla nowych i doświadczonych graczy.</li>
                  <li>Agresja, toksyczne zachowanie, obrażanie innych graczy lub powtarzające się skargi mogą skutkować wykluczeniem z kampanii.</li>
                  <li>Decyzję o wykluczeniu gracza podejmują organizatorzy lub główny organizator.</li>
                  <li>W przypadku wykluczenia stosuje się postanowienie dotyczące wpisowego zawarte w rozdziale „Wpisowe i nagrody”.</li>
                </ol>
              </Section>

              <Section title="14. Spory i interpretacje zasad">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>W przypadku wątpliwości dotyczących zasad gracze mogą zwrócić się do organizatorów lub lokalnych opiekunów.</li>
                  <li>Spory przy stole powinny być rozwiązywane spokojnie i z poszanowaniem przeciwnika.</li>
                  <li>Jeśli gracze nie są w stanie dojść do porozumienia, decyzję podejmuje organizator lub główny arbiter.</li>
                  <li>Ostateczna interpretacja zasad i sytuacji spornych należy do głównego arbitra.</li>
                </ol>
              </Section>

              <Section title="15. Postanowienia końcowe">
                <ol className="text-[#6e757c] text-[18px] leading-[28px] list-decimal pl-6 space-y-1" style={bodyStyle}>
                  <li>Udział w kampanii oznacza akceptację niniejszego Regulaminu oraz Zasad kampanii dotyczących tej edycji wydarzenia.</li>
                  <li>Organizatorzy mogą aktualizować Regulamin przed startem kampanii.</li>
                  <li>Ewentualne zmiany Regulaminu w trakcie kampanii powinny być ogłaszane na głównym kanale komunikacji.</li>
                  <li>Celem Regulaminu jest zapewnienie sprawnej organizacji, jasnych zasad i dobrej atmosfery podczas kampanii.</li>
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
