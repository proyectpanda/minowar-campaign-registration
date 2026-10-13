import { PageLayout } from "./PageLayout";
import { motion } from "motion/react";
import necromundaLogo from "@/imports/Necromunda.b64";

const labelStyle = { fontFamily: '"Barlow Condensed", sans-serif' };
const bodyStyle = { fontFamily: '"Roboto Condensed", system-ui, sans-serif' };

export function RaportPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-10 lg:pt-16 pb-16">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} src={necromundaLogo} alt="Necromunda" className="absolute left-1/2 -translate-x-1/2 top-4 lg:left-auto lg:translate-x-0 lg:right-[80px] lg:top-8 w-[300px] max-w-[40%] z-10" />
          <div className="relative z-10 max-w-[1640px] mr-auto ml-[max(0px,min(calc((100%-1640px)/2),200px))]">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="uppercase font-semibold leading-[normal] text-[#0d0d0e] text-[80px] sm:text-[120px] mb-10 mt-[57px] lg:mt-0" style={labelStyle}>RAPORT</motion.h1>
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
