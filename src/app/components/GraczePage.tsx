import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import { usePlayers } from "../context/PlayersContext";
import necromundaLogo from "@/imports/Necromunda.b64";

const labelStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
};
const bodyStyle = {
  fontFamily: '"Roboto Condensed", system-ui, sans-serif',
};

export function GraczePage() {
  const { players } = usePlayers();
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
              className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-12 mt-[57px] lg:mt-0"
              style={labelStyle}
            >
              Gracze
            </motion.h1>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full max-w-[1640px]"
            >
              {/* Table Header */}
              <div className="border-b-2 border-[#0d0d0e] px-6 py-2">
                <div className="flex gap-20 items-center uppercase text-[#0d0d0e] text-[18px] font-medium" style={labelStyle}>
                  <div className="flex-1 md:min-w-[400px]">
                    <span className="md:hidden">Gang</span>
                    <span className="hidden md:inline">Nazwa Gangu</span>
                  </div>
                  <div className="w-[200px] hidden md:block">House</div>
                  <div className="w-[200px] hidden md:block">Nazwa gracza</div>
                </div>
              </div>

              {/* Table Rows / Cards */}
              <div className="space-y-0">
                {players.map((player, index) => (
                  <motion.div
                    key={`${player.gangName}-${player.playerName}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    className="bg-[#F9F5F3] border border-[#bebdbc] md:border-b md:border-x-0 md:border-t-0 px-4 md:px-4 py-3"
                  >
                    {/* Mobile Card Layout */}
                    <div className="flex flex-col gap-4 md:hidden">
                      <div
                        className="uppercase text-[#00378D] text-[24px] font-semibold tracking-[1.2px]"
                        style={labelStyle}
                      >
                        {player.gangName}
                      </div>
                      <div className="flex justify-between text-[#0d0d0e] text-[18px] font-medium" style={bodyStyle}>
                        <div>{player.gangHouse}</div>
                        <div>{player.playerName}</div>
                      </div>
                    </div>

                    {/* Desktop Table Layout */}
                    <div className="hidden md:flex gap-20 items-center">
                      <div
                        className="flex-1 min-w-[400px] uppercase text-[#00378D] text-[24px] font-semibold tracking-[1.2px]"
                        style={labelStyle}
                      >
                        {player.gangName}
                      </div>
                      <div
                        className="w-[200px] text-[#0d0d0e] text-[18px] font-medium"
                        style={bodyStyle}
                      >
                        {player.gangHouse}
                      </div>
                      <div
                        className="w-[200px] text-[#0d0d0e] text-[18px] font-medium"
                        style={bodyStyle}
                      >
                        {player.playerName}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
