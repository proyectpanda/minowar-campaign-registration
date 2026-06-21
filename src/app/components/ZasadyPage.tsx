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
              <RulesSection title="Rozgrywka">
                <RuleCard title="18 Tactics Cards">
                  Przed każdą bitwą każdy gracz powinien dysponować talią 18 różnych Tactics Cards dostępnych dla swojego gangu (np. karty uniwersalne i house’owe). Talia może zmieniać się przed każdą grą.
                  <br />
                  Jeśli scenariusz każe wylosować karty, to należy wylosować ich wskazaną liczbę. Jeśli pozwala je wybrać, wylosuj o jedną więcej i odrzuć jedną z kart na ręku.
                </RuleCard>

                <RuleCard title="Tactics Reinforcements">
                  Gracz, który umieszcza w swojej talii Tactics Cards pozwalające dodać do gangu Dramatis Personae, Scum, Bounty Huntera lub inne wsparcie, powinien mieć przygotowane odpowiednie modele i rozpisane Fighter Card przed bitwą- na przykład po to aby nie opóźniać rozgrywki po dobraniu karty- w sytuacji gdy trzeba stworzyć kartę Bounty Huntera u którego należy dobrać wyposażenie, skille oraz podliczyć całkowity koszt.
                </RuleCard>

                <RuleCard title="Sub-plots">
                  Przed bitwą gracze mogą wspólnie zdecydować o użyciu Sub-plots.
                  <br />
                  Jeżeli obaj gracze wyrażą zgodę, mogą korzystać z Universal Sub-plots albo Sub-plots dostępnych dla ich House.
                </RuleCard>

                <RuleCard title="MVP – Rule of Cool">
                  Raz na grę każdy gracz może przyznać jednemu fighterowi przeciwnika D3 XP za szczególnie efektowną/ryzykowną akcję.
                </RuleCard>
              </RulesSection>

              <RulesSection title="House Rules">
                <RuleCard title="Weapon Swapping Permitted">
                  Broń i Wargear mogą być dowolnie przenoszone między fighterami a Stash’em, za zgodą Arbitratora. Nadal obowiązują restrykcje dotyczące wyposażenia dostępnego dla danego fightera.
                  <br />
                  Dzięki temu fighter nie jest na stałe związany z przypisaną mu bronią a zgoda Arbitratora zapobiega jednak transferom obchodzącym koszty wyposażenia, np. przekazywaniu tańszej broni fighterowi, który ma ją dostępną ale za wyższy koszt, albo przenoszeniu wyposażenia z fightera In Recovery na dostępnego do gry.
                </RuleCard>

                <RuleCard title="Plasma Grenade Fixed">
                  Przy rzucie Plasma Grenade należy rzucić Firepower dice. Unstable ma zastosowanie tylko, jeśli wypadnie Ammo symbol.
                </RuleCard>

                <RuleCard title="Unstable Trait">
                  Przy nieudanym rzucie dla Unstable fighter nie zostaje automatycznie Out of Action. Zamiast tego otrzymuje automatyczny hit z użytej broni, z Strength +1 i Damage +1.
                  <br />
                  Następnie broń nie może być używana do końca gry.
                </RuleCard>

                <RuleCard title="No Stray Shots in Friendly Base-to-Base">
                  Zasada Stray Shots nie dotyczy sojuszniczych modeli znajdujących się w odległości do 1&quot; od linii strzału, jeżeli jednocześnie pozostają one w base-to-base contact z atakującym modelem. Takie modele uznaje się za bezpieczne i pomija podczas rozstrzygania Stray Shots.
                  <br />
                  Więcej informacji o tym: {" "}
                  <a
                    href="https://www.minowar.com/necromunda/reforge-stray-shots"
                    className="text-[#00378d] underline"
                  >
                    https://www.minowar.com/necromunda/reforge-stray-shots
                  </a>
                </RuleCard>

                <RuleCard title="Lasting Injury – Multiple Out of Action">
                  O ile nie zaznaczono inaczej, wykonuje się tylko jeden rzut na tabeli Lasting Injuries, niezależnie od liczby wyników Out of Action z tego samego Injury roll.
                </RuleCard>

                <RuleCard title="Hip Shooting + Twin Guns Blazing">
                  Twin Guns Blazing może być użyte podczas Run and Gun. Należy uwzględnić wszystkie modyfikatory wynikające z obu zasad. Można łączyć ze skillem Gunfighter.
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
      <p className="self-stretch text-[18px] leading-[28px] text-[#6e757c]" style={bodyStyle}>
        {children}
      </p>
    </article>
  );
}
