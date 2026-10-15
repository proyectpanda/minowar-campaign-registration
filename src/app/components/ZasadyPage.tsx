import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";

const labelStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
};

const bodyStyle = {
  fontFamily: '"Roboto Condensed", system-ui, sans-serif',
};

export function ZasadyPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src={necromundaLogo}
            alt="Necromunda"
            className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10"
          />

          <div className="relative z-10 max-w-[1640px] mr-auto ml-[max(0px,min(calc((100%-1640px)/2),200px))]">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-12 mt-[57px] lg:mt-0"
              style={labelStyle}
            >
              Zasady
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-[60px]"
            >
              <div>
                <img
                  src="/edicta.png"
                  alt="Edicta Auctoritatis — tablica ogłoszeń władz Kopca Warszawskiego"
                  className="hidden md:block w-full h-auto object-contain"
                />
                <div className="md:hidden flex flex-col items-center gap-4" aria-label="Plakaty ogłoszeń Kopca">
                  {["poster01.png", "poster02.png", "poster03.png", "poster04.png"].map((poster, index) => (
                    <img
                      key={poster}
                      src={`/${poster}`}
                      alt={`Ogłoszenie władz Kopca — plakat ${index + 1} z 4`}
                      className="block w-full max-w-[360px] h-auto object-contain"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </div>
              </div>

              <RulesSection title="Kampania">
                <RuleCard title="Obowiązujące zasady kampanii — N26">
                  <p>Kampania jest oparta na najnowszej wersji zasad Necromundy Skirmish, oznaczonej <strong>N26.</strong> Ewentualne zasady dodatkowe i house rule’y będą opisane na tej podstronie.</p>
                </RuleCard>

                <RuleCard title="Fazy i cykle kampanii">
                  <p>Kampania składa się z <strong>6 cykli,</strong> z których każdy trwa <strong>dwa tygodnie.</strong> Między trzecim a czwartym cyklem przewidziany jest standardowy <strong>Downtime.</strong></p>
                  <p>W każdym cyklu pary graczy rozgrywają jedną główną bitwę kampanijną. Gracze sami między sobą ustalają termin oraz miejsce rozegrania gry.</p>
                </RuleCard>

                <RuleCard title="Tworzenie gangu">
                  <p>Gangi rozpisujemy na <strong>1000 kredytów.</strong> Dopuszczamy wszystkie oficjalne gangi Necromundy. Pomalowany gang nie jest wymagany. Gangi pomalowane i zaprezentowane na Discordzie w postaci zdjęcia i krótkiej historii otrzymują jednorazowo <strong>+1</strong> do Reputacji na start.</p>
                </RuleCard>

                <RuleCard title="Historia i dziedzictwo">
                  <p>Kampania stanowi kolejny rozdział wspólnej historii tego samego kopca, dlatego przy tworzeniu gangu dopuszczamy korzystanie z zasady <strong>Founding an Enduring Gang,</strong> opisanej na stronie 96 Core Rulebook. Pozwala ona rekrutować do nowego gangu wojowników z własnego gangu z poprzedniej kampanii. Zdobyte wcześniej triumfy mogą również zapewnić odpowiednią korzyść z tabeli zawartej w tej zasadzie. Rekrutację oraz przyznawanie korzyści należy przeprowadzić zgodnie z opisanymi tam warunkami i ograniczeniami.</p>
                  <p>Gracz który chce z tego skorzystać powinien uprzedzić o tym fakcie Arbitratora.</p>
                </RuleCard>

                <RuleCard title="Triumfy i wyróżnienia">
                  <p>Necromunda to brutalna walka ale i klimat, historie i przepiękne gangi. Jedni lubią w ten system grać dla niesamowitej rozwałki, testować nowe ciekawe buildy i czuć przyjemną adrenalinę z grania. Inni doceniają w tej grze klimat, historię nieskończone możliwości konwertowania i malowania czy tworzenia ciekawych rozpisek. Są tacy co lubią jedno i drugie. Pamiętamy cały czas czym jest Necromunda więc Kampania będzie nagradzać zarówno sukcesy na polu bitwy, jak i kreatywność oraz wkład w budowanie klimatu Necromundy. Dlatego przyznajemy <strong>dwie równorzędne nagrody główne</strong>, stanowiące <strong>dwa niezależne pierwsze miejsca</strong>:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Dominator</strong> — za najwięcej zwycięstw w bitwach zaliczanych do klasyfikacji kampanii. Przy remisie rozstrzyga liczba zadanych <strong>OOA.</strong></li>
                    <li><strong>Mastermind</strong> — dla gracza, który stworzy najbardziej klimatyczny i pomysłowy gang. Oceniany będzie całościowy charakter gangu: oryginalność rozpiski, malowanie i konwersje figurek, historia oraz sposób, w jaki gracz ożywia swój gang i wzbogaca nim opowieść kampanii.</li>
                  </ul>
                  <p>Przyznane zostaną również dodatkowe wyróżnienia:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Slaughterer</strong> — za największą liczbę wrogich wojowników wyeliminowanych poprzez Out of Action.</li>
                    <li><strong>Creditor</strong> — za zgromadzenie największego bogactwa (Wealth: Gang Rating + posiadane kredyty).</li>
                    <li><strong>Powerbroker</strong> — za najwyższą Reputację na koniec kampanii.</li>
                    <li><strong>Meatgrinder</strong> — za największą liczbę własnych wojowników utraconych jako DEAD.</li>
                  </ul>
                  <p>Organizatorzy mogą ogłaszać dodatkowe wyróżnienia inspirowane przebiegiem kampanii.</p>
                  <p>Z bitew dodatkowych nie wlicza się zwycięstw i porażek do klasyfikacji. Pozostałe osiągnięcia, w tym OOA, bogactwo i Reputacja, liczą się do wyróżnień.</p>
                </RuleCard>

                <RuleCard title="Terytoria — przydział i rozwój">
                  <p>Aby zachować balans i ograniczyć zbyt duże różnice między gangami przy dużej liczbie uczestników, kampania zakłada, że poszczególne House’y i frakcje mają już ugruntowaną pozycję w kopcu. Gangi reprezentują ich interesy i otrzymują pod kontrolę kolejne terytoria z posiadanych przez nie zasobów.</p>
                  <p>Każdy gang ma <strong>własną pulę terytoriów uniwersalnych oraz dedykowanych swojemu House’owi lub frakcji.</strong> Pule są niezależne, więc różne gangi mogą posiadać takie same terytoria.</p>
                  <p>Każdy gang rozpoczyna kampanię z dwoma terytoriami:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Settlement</strong> — stałym terytorium, którego nie można utracić ani przejąć.</li>
                    <li>Jednym wybranym terytorium ze swojej puli.</li>
                  </ul>
                  <p>Po rozegraniu głównej bitwy kampanijnej w danym cyklu każdy gang otrzymuje jedno dodatkowe terytorium ze swojej puli:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Zwycięstwo:</strong> gracz wybiera terytorium.</li>
                    <li><strong>Porażka:</strong> gracz losuje terytorium.</li>
                    <li><strong>Remis:</strong> obaj gracze losują po jednym terytorium.</li>
                  </ul>
                  <p>Nie można dobrać już posiadanego terytorium. W razie jego wylosowania losowanie należy powtórzyć.</p>
                  <p>Dodatkowe bitwy w cyklu nie przyznają kolejnych terytoriów. Dochody i korzyści z posiadanych terenów rozpatruje się zgodnie z obowiązującymi zasadami Necromundy.</p>
                </RuleCard>
              </RulesSection>

              <RulesSection title="Rozgrywka">
                <RuleCard title="Scenariusze">
                  <p><strong>Arbitrator</strong> dobiera/losuje w danym cyklu tę samą konfigurację dla wszystkich par:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Scenariusz/objective</strong></li>
                    <li><strong>Crew</strong> - czyli starting crew na grę</li>
                    <li><strong>Deployment Zone</strong></li>
                  </ul>
                  <p><strong>Gracze</strong> indywidualnie w parach losują:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Side Job</strong></li>
                  </ul>
                </RuleCard>

                <RuleCard title="Wybór pola bitwy">
                  <p>Przed bitwą każdy gracz wskazuje jedno ze swoich terytoriów jako proponowane miejsce starcia. Gracze wspólnie wybierają jedno z nich lub losują, jeśli nie osiągną porozumienia. Podczas bitwy obowiązują zasady wybranego terytorium. Terytorium, na którym odbyła się bitwa, pozostaje własnością dotychczasowego gangu.</p>
                </RuleCard>

                <RuleCard title="MVP – Rule of Cool">
                  <p>Raz na grę każdy gracz może przyznać jednemu fighterowi przeciwnika <strong>D3 XP</strong> za szczególnie efektowną/ryzykowną akcję.</p>
                </RuleCard>
              </RulesSection>

              <RulesSection title="Zasady dodatkowe i wydarzenia">
                <RuleCard title="Ród dominujący - rządy House Escher">
                  <p>Dzięki sukcesom w poprzedniej kampanii władzę nad kopcem sprawuje <strong>House Escher,</strong> określany jako <strong>ród dominujący.</strong> Po zawarciu sojuszu gangi tego rodu mogą wpływać na warunki w wybranych sektorach, kontrolując dostawy energii i wody oraz systemy wentylacji. Pozwala to m.in. odcinać oświetlenie i pogarszać warunki życia mieszkańców.</p>
                  <p>Szczegółowe zasady korzystania z przywilejów — wkrótce.</p>
                </RuleCard>

                <RuleCard title="Skażenie Chaosem oraz możliwa infekcja Malstrain">
                  <p>Specjalnie dla graczy, którzy z jakiegoś powodu nie mogą rozegrać swojej bitwy kampanijnej (np. przeciwnik oddał walkowera) stworzono misje dodatkowe.</p>
                  <p>Gracz gotowy do gry, którego przeciwnik oddał walkowera, może zamiast zwycięstwa walkowerem podjąć misję przeciwko kultystom Chaosu lub infekcji Malstrain. Wybór zagrożenia należy do gracza. Wynik misji zastępuje walkower w klasyfikacji i określa przydział terytorium. Za zwycięstwo gang otrzymuje dodatkowe <strong>100 kredytów</strong> oraz <strong>uznanie władz kopca.</strong></p>
                  <p>Władze kopca mogą również ogłaszać zlecenia oczyszczania podkopca z wyznawców Chaosu i nosicieli infekcji Malstrain. Zainteresowane gangi mogą zgłaszać się do ich realizacji. Są to bitwy dodatkowe: nie wliczają się do bilansu zwycięstw i porażek kampanii, ale pozwalają zdobywać doświadczenie oraz opisaną wyżej nagrodę.</p>
                </RuleCard>

                <RuleCard title="Teren łowiecki Spyrerów">
                  <p>Kopiec został ogłoszony terenem łowieckim <strong>Spyrerów.</strong> Po zgłoszeniu Arbitratorowi gang może podjąć walkę z nimi jako dodatkową bitwę w cyklu.</p>
                  <p>Jej wynik nie wlicza się do bilansu zwycięstw i porażek kampanii, ale pozwala zdobywać doświadczenie, dodatkową reputację oraz walczyć o <strong>unikatowy ekwipunek lub technologię</strong> Spyrerów.</p>
                </RuleCard>

                <RuleCard title="Ripperjacki pod nadzorem">
                  <p>W związku z podejrzeniem skażenia Chaosem i aktywnością kultystów Vaag’Ineesha, czczących Ripperjacki jako demony i namiestników swojego boga, ich posiadanie i używanie wymaga zgody władz kopca oraz jednorazowej opłaty <strong>5 kredytów</strong> za osobnika.</p>
                  <p>Przed każdą bitwą przeciwko gangowi z niezgłoszonymi lub nieopłaconymi Ripperjackami przeciwnik rzuca k6. Przy wyniku <strong>5+</strong> otrzymuje bezpłatne wsparcie na tę bitwę, ponad limit składu początkowego:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Patrol Officera Enforcerów</strong> z uzbrojeniem i ekwipunkiem o łącznej wartości do <strong>60 kredytów</strong>. Jeśli brak odpowiedniej figurki, zastępuje go <strong>Hive Scum</strong> na usługach władz.</li>
                    <li>Gang Enforcerów zamiast tego może wystawić <strong>jednego dodatkowego członka własnego gangu.</strong></li>
                  </ul>
                  <p>W przypadku gangu Enforcerów wsparcie pozwala zamiast tego wystawić jednego dodatkowego członka własnego gangu ponad limit składu początkowego.</p>
                  <p>Wsparcia nie otrzymują: Free Ogryns, Malstrain, Spyrers, Ash Waste Nomads, gangi poza prawem oraz wszelkie odmiany gangów Chaosu.</p>
                </RuleCard>

                <RuleCard title="Sojusze i walka o władzę">
                  <p>Gangi należące do tego samego House’u lub frakcji mogą zawrzeć <strong>sojusz</strong> i zgłosić go Arbitratorowi, wskazując House lub frakcję, przeciwko którym chcą występować. Otrzymują wówczas priorytet parowania ze wskazanymi przeciwnikami, w miarę ich dostępności. Dopiero w następnej kolejności będą parowane z pozostałymi gangami. Członkowie sojuszu nie będą parowani ze sobą.</p>
                  <p>Na koniec kampanii sumuje się zwycięstwa wszystkich gangów należących do danego House’u lub frakcji, niezależnie od tego, czy zawarły sojusz. Uzyskanie większej liczby zwycięstw niż obecnie dominujący House pozwala przejąć dominację w kopcu w następnej kampanii. Jeśli warunek ten spełnia kilka House’ów lub frakcji, dominację zdobywa ten z największą liczbą zwycięstw. Remis rozstrzyga Arbitrator.</p>
                  <p>Sojusz niedominującego House’u lub frakcji może wystąpić o wsparcie <strong>Enforcerów,</strong> jeśli rządzący House choć raz skorzystał z przywileju wpływania na warunki w kopcu, utrudniając innym gangom życie. Jeśli wszystkie gangi Enforcerów wyrażą taką chęć, Arbitrator może zatwierdzić dołączenie gangów Enforcerów do sojuszu w zamian za zobowiązanie jego członków do przywrócenia porządku i stabilnych dostaw w kopcu.</p>
                  <p>Wówczas na potrzeby walki o dominację zwycięstwa sojuszu i sprzymierzonych Enforcerów są liczone wspólnie. Dołączające gangi Enforcerów również otrzymują priorytet parowania przeciwko wskazanemu House’owi lub frakcji. Enforcerzy mogą wspierać tylko jeden sojusz. Ich zwycięstwa liczą się do wspólnego wyniku z tym sojuszem albo do własnego, jeśli utworzą swój sojusz — nie do obu jednocześnie. Uwzględnia się zwycięstwa z całej kampanii, także sprzed dołączenia. Po ustaniu sojuszu wcześniej przypisane zwycięstwa pozostają zaliczone.</p>
                  <p>Dodatkowe zasady sojuszy:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Gangi/frakcje, które nie mogą się układać z Enforcerami: Free Ogryns, Malstrain, Spyrers, Ash Waste Nomads, gangi poza prawem oraz wszelkie odmiany gangów Chaosu.</li>
                    <li>Genestealer Corrupted: Skażenie tych gangów może pozostawać niejawne, dlatego mogą one dołączać do sojuszy swojego macierzystego House’u lub frakcji, z zachowaniem ograniczeń dotyczących statusu prawnego.</li>
                    <li>Outcast: Gangi Outcast nie mogą tworzyć sojuszu między sobą. Każdy z nich może jednak indywidualnie dołączyć do innego sojuszu za zgodą wszystkich jego członków. Nie wymaga to udziału pozostałych gangów Outcast.</li>
                    <li>Status prawny: W jednym sojuszu nie mogą znajdować się jednocześnie gangi praworządne i gangi poza prawem (Outlaw). Niejawność skażenia nie znosi tego ograniczenia. Zmiana statusu prawnego na niezgodny z sojuszem oznacza konieczność wystąpienia z niego.</li>
                    <li>Wszelkie odmiany gangów Chaosu są liczone jako jedna frakcja również przy ustalaniu dominacji i mogą zawiązywać jeden sojusz.</li>
                  </ul>
                  <p><strong>Ważne:</strong> Utworzenie sojuszu wymaga zgody i udziału wszystkich gangów danego House’u lub frakcji. Wystąpienie choćby jednego z nich oznacza rozwiązanie sojuszu. Nie dotyczy to pojedynczych dołączonych Outcastów i sprzymierzonych Enforcerów.</p>
                </RuleCard>
              </RulesSection>
            </motion.div>
          </div>
        </section>

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

function RulesSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2
        className="text-[#1c3b56] text-[32px] font-semibold leading-[normal]"
        style={labelStyle}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function RuleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="flex flex-col justify-center items-start gap-4 pl-4 pr-6 py-3 bg-[#f9f5f3] border border-[#bebdbc]">
      <h3
        className="text-[#1c3b56] text-[32px] font-semibold leading-[normal]"
        style={labelStyle}
      >
        {title}
      </h3>
      <div className="self-stretch text-[18px] leading-[28px] text-[#6e757c] space-y-3" style={bodyStyle}>
        {children}
      </div>
    </article>
  );
}
