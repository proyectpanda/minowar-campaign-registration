import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";
import { Link } from "react-router";

const labelStyle = { fontFamily: '"Barlow Condensed", sans-serif' };
const bodyStyle = { fontFamily: '"Roboto Condensed", system-ui, sans-serif' };

export function ArchiwumPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} src={necromundaLogo} alt="Necromunda" className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10" />
          <div className="relative z-10 max-w-[1640px] mr-auto ml-[max(0px,min(calc((100%-1640px)/2),200px))]">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-10 mt-[57px] lg:mt-0" style={labelStyle}>ARCHIWUM</motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="space-y-5">
              <h2 className="text-[#1c3b56] text-[32px] font-semibold" style={labelStyle}>KAMPANIE</h2>
              <Link
                to="/archiwum/great-warsaw-campaign-lato-2026"
                className="group flex flex-col items-start justify-center w-full gap-2 pl-4 pr-6 py-3 rounded-md bg-[#f9f5f3] hover:bg-gradient-to-t hover:from-[#1a2b3a] hover:to-[#1c3b56] border-2 border-[#6e757c] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00378D]"
              >
                <span className="text-[32px] font-semibold text-[#1c3b56] group-hover:text-white group-focus-visible:text-white" style={labelStyle}>
                  Great Warsaw Campaign - lato 2026
                </span>
                <span className="text-[18px] text-[#6e757c] group-hover:text-white group-focus-visible:text-white" style={bodyStyle}>
                  Kampania pilotażowa w której uczestniczyło 24 graczy na zasadach wersji N23.
                </span>
              </Link>
            </motion.div>
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
