const headingStyle = { fontFamily: '"Barlow Condensed", sans-serif' };
const bodyStyle = { fontFamily: '"Roboto Condensed", system-ui, sans-serif' };

const headingClass = "text-[#1c3b56] text-[32px] font-semibold leading-[normal]";
const subheadingClass = "text-[#1c3b56] text-[26px] font-semibold leading-[normal]";
const bodyClass = "space-y-4 text-[#6e757c] text-[18px] leading-[28px]";

export function CampaignConclusion() {
  return (
    <section id="campaign-conclusion" className="space-y-12 pt-10 mt-10 border-t border-[#bebdbc] [&_strong]:text-[#0D0D0E]">
      <section className="space-y-6">
        <h2 className={headingClass} style={headingStyle}>PODSUMOWANIE KAMPANII</h2>

        <div className={bodyClass} style={bodyStyle}>
          <p>Sześć rund. Dziesiątki strzelanin, połamanych kończyn, przejętych terenów, trupów pozostawionych w rynsztokach i planów, które spektakularnie poszły w diabły. Tak skończyła się nasza pierwsza kampania Dominion.</p>
          <p>Już pierwsza runda ustawiła ton całej kampanii — trzynaście starć i tylko jeden remis. Potem było już tylko gorzej. Albo lepiej, zależnie od tego, po której stronie lufy się stało. Z rundy na rundę coraz wyraźniej było widać, kto rzeczywiście zamierza wyrwać dla siebie kawał kopca, a kto będzie musiał zadowolić się bliznami i opowieściami przy barze. Do ostatnich cykli w czołówce utrzymywały się Salamanders, The Thousandfold Charge, Femgaj Boyzz, Rad Queens i Bad Mojo. Szósta runda <strong>Escape the Badzone</strong> nie była jednak formalnością. Femgaj Boyzz zdołali pokonać Salamanders, Bad Mojo dobiło Purple Scars, Vaag’Inesh Unwashed rozprawili się z Chains &amp; Corsets, a The Death Asterism po raz kolejny urządziło sobie egzekucję — tym razem na Tactical Squadron Nimrod. Denim Demons i The Thousandfold Charge zakończyli kampanię remisem.</p>
          <p>Jeżeli spojrzeć na regularne frakcje i <strong>odłożyć na bok Spyrerów oraz kultystów Chaosu</strong>, z kopca wychodzą trzy siły, które zostawiły po sobie największy ślad. <strong>Escher</strong> miały największą masę zwycięstw — pięć gangów tej frakcji zebrało łącznie 14 wygranych. <strong>Ironhead Squat Prospectors</strong> mieli ich 10, ale przy zaledwie dwóch gangach i 15 rozegranych bitwach byli zdecydowanie najbardziej skuteczną regularną frakcją. <strong>Van Saar</strong> dorzucili 9 zwycięstw i The Thousandfold Charge, który praktycznie przez całą kampanię siedział ścisłej czołówce. Za nimi zostali Orlockowie, Goliaci, Delaque i Enforcerzy.</p>
          <p>Czyli jeżeli ktoś dzisiaj pyta, <strong>kto rządzi w tym kopcu</strong>, odpowiedź brzmi mniej więcej tak: <strong>Skwoty mają siłę i pieniądze, Escherki są wszędzie i mają liczby, a Van Saar wciąż mają technologię oraz ludzi, których lepiej nie lekceważyć.</strong></p>
          <p>Ale tabelka zwycięstw to nie wszystko. Dominion miał swoich konkretnych zwyrodnialców, bohaterów i nieszczęśników:</p>
        </div>

        <ul className="list-disc pl-6 space-y-3 text-[#6e757c] text-[18px] leading-[28px] marker:text-[#1c3b56]" style={bodyStyle}>
          <li><strong>Dominator — Ender, Salamanders.</strong> Pięć zwycięstw w sześciu kampanijnych rundach i pięć kontrolowanych terenów. Za nimi ex aequo <strong>Femgaj Boyzz Nahara</strong> oraz <strong>The Thousandfold Charge Wikoroo</strong> z bilansem 4–1–1. Bad Mojo i Rad Queens również zakończyli kampanię z czterema zwycięstwami. <strong>Creditor</strong> także trafił do Salamanders, a Ender zgarnął również <strong>Warmongera</strong>, przy ośmiu rozegranych bitwach; Bad Mojo miało tyle samo starć.</li>
          <li><strong>Powerbroker — Żelazne Kufle, LosAntos / Antosik</strong>, z Reputation 17. Surowo wyżej znalazło się jeszcze The Death Asterism z 20, ale Spyrerzy to w tej historii osobna kategoria.</li>
          <li><strong>Slaughterer — Ildephonse, Denim Demons.</strong> <strong>33 wrogich fighterów Out of Action lub pojazdów Wrecked.</strong> Dla porównania Salamanders nabiły 31, a Spyrerzy 32 w samych grach kampanijnych. Orlockowie może nie przejęli kopca, ale przynajmniej zostawili za sobą odpowiednią liczbę worków na zwłoki.</li>
          <li><strong>Meatgrinder — Helljumper, Ironheads.</strong> Osiem utraconych fighterów. Kiedy inni liczyli kredyty i Reputation, Ironheads liczyli wolne miejsca na rosterze.</li>
          <li><strong>Mastermind — Twentytwo, Bad Mojo.</strong> Nie tylko wyniki, ale pełny klimat gangu, backstory, gang notes, prywatne zapiski, zdjęcia i konsekwentny pomysł na Chaos Escher. Wyróżnione zostały też Moxxi's Phenomena Menagerie, The Thousandfold Charge i Chłopcy z Ośrodka.</li>
          <li><strong>Pactkeeper — Wikoroo, The Thousandfold Charge.</strong> Za fair play, pomoc innym, znajomość zasad i ogólny wkład w kampanię. Czyli dowód, że można dużo wygrywać i nadal nie być dupkiem przy stole.</li>
          <li><strong>Unbroken — Kapisu, Żelazne Gatory.</strong> Sześć kampanijnych porażek i ani jednego „pierdolę, nie gram”. Gang dostawał po łbie, ale jego dowódca wracał na kolejną bitwę. I właśnie dlatego to wyróżnienie ma sens.</li>
        </ul>

        <div className={bodyClass} style={bodyStyle}>
          <p>Warto też pamiętać, że do kampanii weszło <strong>sześciu graczy oznaczonych jako całkowicie nowych w Necromundzie</strong>: Toll, Billiskner, Magos Hehetek, BarTolomai, metalfan i Kastor. Dla kampanii to równie ważne jak tabelka wyników — sześć kolejnych osób weszło do kopca i przekonało się na własnej skórze, że plan przestaje istnieć mniej więcej w momencie pierwszego rzutu kością.</p>
        </div>

        <div className="space-y-4">
          <h3 className={subheadingClass} style={headingStyle}>Problem numer jeden: Chaos</h3>
          <div className={bodyClass} style={bodyStyle}>
            <p>Bo jest jeszcze coś, o czym administracja kopca zapewne wolałaby nie mówić.</p>
            <p><strong>Vaag’Inesh Unwashed</strong> zakończyli kampanię z <strong>pięcioma zwycięstwami, jednym remisem i ani jedną porażką</strong>. Żadnej. Kult boga Vaag’Inesha nie przyszedł więc do kopca rozdawać ulotek — przyszedł zostać.</p>
            <p>I nie jest sam. W niższych poziomach kręcą się <strong>Brain Dancers</strong>, czyli Helot Chaos Cult, oraz <strong>Purple Scars</strong>, Corpse Grinder Cult. Wynikowo nie dorównali Nieumytym, ale jedno jest jasne: plugastwo nie wlazło do kopca jednym kanałem. Ono już siedzi w kilku.</p>
            <p>Skwoty mogą liczyć kredyty, Escherki dzielić strefy wpływów, a Van Saar ustawiać swoje celowniki laserowe — ale jeżeli w ścianach zaczynają szeptać imiona bogów Chaosu, to wszyscy mają ten sam problem.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className={subheadingClass} style={headingStyle}>I jeszcze Spyrerzy…</h3>
          <div className={bodyClass} style={bodyStyle}>
            <p>A nad tym całym burdelem są jeszcze <strong>oni</strong>.</p>
            <p><strong>The Death Asterism. Sześć bitew. Sześć zwycięstw. Zero remisów. Zero porażek.</strong></p>
            <p>Nie traktowałbym ich nawet jako kolejnej frakcji walczącej o władzę. Spyrerzy nie przyszli tutaj przejmować Drinking Hole czy kawałka starego Manufactorum. Przyjechali z innego kopca <strong>na polowanie</strong>.</p>
            <p>I najwyraźniej bardzo im się spodobało.</p>
            <p>W kampanijnych starciach zaliczyli 32 eliminacje, przebijając większość normalnych gangów. Nie budowali imperium. Po prostu schodzili na dół, znajdowali kolejną grupę uzbrojonych szumowin i sprawdzali, jak długo wytrzyma.</p>
            <p>Więc kiedy kurz po Dominion wreszcie opadł, kopiec może i ma nowych panów. <strong>Skwoty, Escher i Van Saar rozdają dziś karty. Chaos zapuszcza korzenie w jego wnętrznościach. A gdzieś wysoko nad nimi siedzą Spyrerzy, czyszczą broń i czekają, aż ktoś znowu da im pretekst, żeby zejść na dół.</strong></p>
            <p><strong>Kampania się skończyła. Kopiec zdecydowanie nie stał się przez to bezpieczniejszy.</strong></p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-[#bebdbc]">
        <h2 className={headingClass} style={headingStyle}>STATUS KOPCA // RAPORT PO KAMPANII DOMINION</h2>
        <div className="space-y-5 text-[#6e757c] text-[18px] leading-[28px]" style={bodyStyle}>
          <div>
            <p><strong>Dominujące siły:</strong></p>
            <p><strong style={{ color: "#00378D" }}>House Escher</strong> — obecnie najsilniejsza frakcja pod względem łącznej liczby zwycięstw.</p>
            <p><strong style={{ color: "#00378D" }}>Ironhead Squat Prospectors</strong> — druga siła kopca; nieliczni, ale wyjątkowo skuteczni.</p>
            <p><strong style={{ color: "#00378D" }}>House Van Saar</strong> — trzecia dominująca siła, nadal posiadająca znaczące wpływy i terytoria.</p>
          </div>
          <div>
            <p><strong>Indeks skażenia heretyckiego: <span style={{ color: "#BF0000" }}>PODWYŻSZONY</span></strong></p>
            <p>Potwierdzono działalność kilku ognisk kultów Chaosu. Na obecnym etapie sytuacja pozostaje lokalna, ale obecność heretyckich ugrupowań jest trwałym problemem i wymaga obserwacji.</p>
          </div>
          <div>
            <p><strong>Klasyfikacja zagrożeń zewnętrznych: <span style={{ color: "#BF0000" }}>WYSOKA</span></strong></p>
            <p>Kopiec został uznany przez Spyrerów za <strong>aktywny teren łowiecki</strong>. Powtarzające się polowania i brak skutecznego oporu sugerują, że arystokratyczni łowcy mogą powrócić przy pierwszej dogodnej okazji.</p>
          </div>
          <div>
            <p><strong>Poziom kontroli Palanite: <span style={{ color: "#BF0000" }}>NISKI</span></strong></p>
            <p>Lokalne siły Enforcerów nie zdołały uzyskać wyraźnej kontroli nad sektorem. Kolejne porażki gangów policyjnych oznaczają, że rzeczywista władza na niższych poziomach pozostaje przede wszystkim w rękach gangów.</p>
          </div>
          <div>
            <p><strong>Stan rozwoju kopca: <span style={{ color: "#00378D" }}>WCZESNA EKSPANSJA</span></strong></p>
            <p>To wciąż młody i niestabilny obszar. Kolejne sektory są odkrywane, zasiedlane i przejmowane, a infrastruktura oraz granice wpływów nadal się kształtują. Duża część kopca pozostaje niezbadana.</p>
          </div>
          <div>
            <p><strong>Ogólny status: <span style={{ color: "#00378D" }}>NIESTABILNY / ROZWIJAJĄCY SIĘ</span></strong></p>
            <p>Władza została częściowo podzielona między kilka dominujących frakcji, Chaos zapuścił pierwsze korzenie, służby porządkowe są zbyt słabe, a Spyrerzy zdążyli już uznać mieszkańców za zwierzynę łowną.</p>
          </div>
          <p><strong>Kopiec żyje. Kopiec rośnie. Kopiec ma problemy.</strong></p>
          <p>I właśnie taki format świetnie nadaje się do aktualizacji po każdej kolejnej kampanii: <strong>dominujące siły / skażenie / zagrożenia / kontrola Palanite / rozwój kopca / status ogólny</strong>. Po kilku sezonach będzie z tego prawdziwa kronika ewolucji waszego własnego kawałka Necromundy.</p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-[#bebdbc]">
        <h2 className={headingClass} style={headingStyle}>Podziękowania z głębi kopca</h2>
        <div className={bodyClass} style={bodyStyle}>
          <p>Ogromne dzięki dla wszystkich graczy i nekromundiarzy, którzy wzięli udział w naszej pierwszej tak dużej kampanii Necromundy w Warszawie. Zainteresowanie zdecydowanie przerosło nasze oczekiwania i tym bardziej cieszy mnie, że kampania została tak dobrze przyjęta, a przy stołach po prostu dobrze się bawiliśmy.</p>
          <p>Wielkie podziękowania należą się także współorganizatorom — <strong>Piotrkowi i Marcinowi z Chmiel i Słód w Legionowie</strong> oraz <strong>Matisoft Club Kowalczyka na Żeraniu</strong>. Za możliwość grania u Was, udostępnienie stołów, świetnych terenów i stworzenie miejsc, w których ten cały warszawski kopiec mógł naprawdę zacząć żyć.</p>
          <p>Osobne dzięki za przygotowanie <strong>klimatycznych nekromundowych trofeów i medali</strong>. Wyglądało to naprawdę świetnie i bardzo się cieszę, że tylu graczy wyszło z finału nie tylko ze wspomnieniami, ale też z konkretną pamiątką z kampanii. Nagrody, figurki, medale, trofea — było tego naprawdę sporo i dzięki temu zakończenie miało odpowiednią oprawę.</p>
          <p>Dziękuję również <strong>Lootpile.eu</strong> oraz <strong>Druckheim.pl</strong> za dorzucenie kuponów zakupowych, wydrukowanych dodatków i świetnych figurek. Dzięki temu mogliśmy naprawdę solidnie obsypać naszych gangerów nagrodami.</p>
          <p>Najważniejsza była jednak atmosfera. Była rywalizacja, były emocje, były strzały w plecy i trupy spadające z pomostów, ale była też masa wzajemnej pomocy. Wielu bardziej doświadczonych graczy pomagało przy zasadach, szczególnie osobom, które dopiero zaczynały swoją przygodę z Necromundą, a część z Was wręcz prowadziła nowych graczy przez ich pierwsze bitwy.</p>
          <p>Był klimat. Była zdrowa rywalizacja. Było dużo śmiechu i dużo trupów.</p>
          <p>Czyli dokładnie to, czego Necromunda potrzebuje.</p>
          <p>Najbardziej cieszy mnie jednak to, że wspólnie chcemy ciągnąć tę historię dalej. Warszawski kopiec dopiero zaczyna się rozrastać, a pierwsza kampania była tak naprawdę dopiero początkiem.</p>
          <p><strong>Nabór do kolejnej edycji ruszy już niedługo.</strong></p>
          <p>Do zobaczenia przy stołach i do usłyszenia.</p>
          <p><strong>Oczekujcie kolejnej transmisji ze szczytu kopca.</strong></p>
        </div>
      </section>
    </section>
  );
}
