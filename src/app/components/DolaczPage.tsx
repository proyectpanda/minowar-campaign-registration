import { useEffect, useRef, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Beer, Factory, Skull, X } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePlayers } from "../context/PlayersContext";
import hiveCity from "@/imports/hivecity.b64";
import matisoftBase from "@/imports/matisoft_base.b64";
import wastlandBase from "@/imports/wastland.b64";
import necromundaLogo from "@/imports/Necromunda.b64";
import matisoftLogo from "@/imports/matisoft.b64";
import chmielLogo from "@/imports/chmiel.b64";
import wastelandIcon from "@/imports/wasteland.b64";
import matisoftIcon from "@/imports/matisoftIcon.b64";
import chmielIcon from "@/imports/chmielIcon.b64";
import skullIcon from "@/imports/Skull-1.svg?raw";
import necro8 from "@/imports/Frame162/334ad2f064f739ae630d3c516ab760d603ee645d.png";
import necro2 from "@/imports/Frame162/f3ce15be3334b56a281f33b5e98b1b8e42cc8e0b.png";
import necro12 from "@/imports/Frame162/3536e8c330a3c0e154a14eefc7f9b62e20d43ecd.png";
import necro6 from "@/imports/Frame162/05e48f6ccf679222a9cd0a5724853c42cbe29c6a.png";
import necro15 from "@/imports/Frame162/ea78cfabbb0e4ac20b8bbd2d186b863975fb0b8d.png";
import necro1 from "@/imports/Frame162/c2aa4d8ad8f6029e32095d0718f0fa848f1b09cb.png";
import necro3 from "@/imports/Frame162/db7e410f814d7e49136f2b7e71c0ee8e61fdb489.png";
import necro7 from "@/imports/Frame162/ae716034326f2721fe81a021a91dd729c114ed8c.png";

const gangHouses = [
  "Cawdor",
  "Escher",
  "Goliath",
  "Van Saar",
  "Orlock",
  "Delaque",
  "Corpse Grinder Cult",
  "Enforcers",
  "Ash Waste Nomads",
  "Genestealer Cults",
  "Ironhead Squat Prospectors",
  "Helot Chaos Cults",
  "Underhive Outcasts",
  "Slave Ogryns",
  "Venators",
  "Spyre Hunters",
  "Malstrain Gangs",
  "Inne",
];

type CampId = "chmiel" | "matisoft" | "wastes";

const camps: {
  id: CampId;
  name: string;
  Icon: typeof Beer;
  description: string;
}[] = [
  {
    id: "chmiel",
    name: "Chmiel i Słód",
    Icon: Beer,
    description:
      "Pub i lokalna baza kampanii w Legionowie. Kraftowe trunki z pianą oraz najlepsze zaplecze terenowe w sektorze mazowieckim.",
  },
  {
    id: "matisoft",
    name: "Matisoft",
    Icon: Factory,
    description:
      "Sklep, klub i baza kampanii na Żeraniu. Silny lokalny punkt dla różnych gier i figurkowych wydarzeń.",
  },
  {
    id: "wastes",
    name: "Wastes",
    Icon: Skull,
    description:
      "Opcja dla przybyszów z nieznanego terytorium niezwiązanych z żadnym z dostępnych obozów.",
  },
];

const labelStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
};
const bodyStyle = {
  fontFamily: '"Roboto Condensed", system-ui, sans-serif',
};

export function DolaczPage() {
  const { addPlayer } = usePlayers();
  const [player, setPlayer] = useState("");
  const [gangHouse, setGangHouse] = useState("");
  const [gangName, setGangName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<CampId>("chmiel");
  const [gangHouseOpen, setGangHouseOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successData, setSuccessData] = useState<{
    player: string;
    gangHouse: string;
    gangName: string;
    email: string;
    camp: string;
  } | null>(null);
  const [campInfoOpen, setCampInfoOpen] = useState(false);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const errors = {
    player: !player.trim() ? "Podaj imię lub ksywę." : "",
    gangHouse: !gangHouse ? "Wybierz gang house." : "",
    gangName: !gangName.trim() ? "Podaj nazwę gangu." : "",
    email: !email.trim() ? "Podaj adres email." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Podaj poprawny adres email." : "",
  };

  const shouldShow = (field: keyof typeof errors) =>
    (submitted || touched[field]) && errors[field];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (errors.player || errors.gangHouse || errors.gangName || errors.email) return;
    setLoading(true);
    setTimeout(() => {
      const campName = camps.find((c) => c.id === selectedCamp)!.name;

      // Dodaj gracza do listy
      addPlayer({
        playerName: player,
        gangHouse,
        gangName,
        email,
        camp: campName,
      });

      setLoading(false);
      setSuccessData({
        player,
        gangHouse,
        gangName,
        email,
        camp: campName,
      });
      setSuccessOpen(true);
    }, 500);
  };

  const activeCamp = camps.find((c) => c.id === selectedCamp)!;

  // Wybierz tło w zależności od wybranego obozu
  const backgroundImage =
    selectedCamp === "matisoft" ? matisoftBase :
    selectedCamp === "wastes" ? wastlandBase :
    hiveCity;

  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 lg:px-16 pt-10 lg:pt-16 pb-10">
          {/* Background image */}
          <motion.div
            key={selectedCamp}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-0 top-[692px] h-[400px] lg:top-0 lg:bottom-auto lg:h-full w-full pointer-events-none"
            aria-hidden
          >
            <ImageWithFallback
              src={backgroundImage}
              alt=""
              className="w-full h-full object-contain object-right lg:object-right-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EDE7E3]/80 via-transparent to-transparent" />
          </motion.div>

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
              className="uppercase font-semibold leading-[0.95] text-[#0d0d0e] text-center max-w-[480px] mx-auto lg:mx-0 lg:-ml-[6px] mt-[57px] md:mt-[79px] lg:mt-0"
              style={labelStyle}
            >
              <span className="block text-[60px] sm:text-[80px] relative top-[5px]">GREAT</span>
              <span className="block text-[80px] sm:text-[120px] tracking-tight">
                WARSAW
              </span>
              <span className="block text-[60px] sm:text-[80px]">CAMPAIGN</span>
            </motion.h1>

            {/* Form */}
            <motion.form
              id="registration-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px]"
            >
              <Field
                label="Gracz"
                error={shouldShow("player") ? errors.player : ""}
              >
                <input
                  id="player"
                  type="text"
                  value={player}
                  onChange={(e) => setPlayer(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, player: true }))}
                  placeholder="Wpisz swoje imię/ksywę..."
                  aria-invalid={!!shouldShow("player")}
                  aria-describedby={
                    shouldShow("player") ? "player-error" : undefined
                  }
                  className={inputClass(!!shouldShow("player"))}
                  style={bodyStyle}
                />
              </Field>

              <Field
                label="E-mail"
                error={shouldShow("email") ? errors.email : ""}
                className=""
              >
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="Wpisz email na który wyślemy potwierdzenie"
                  aria-invalid={!!shouldShow("email")}
                  aria-describedby={
                    shouldShow("email") ? "email-error" : undefined
                  }
                  className={inputClass(!!shouldShow("email"))}
                  style={bodyStyle}
                />
              </Field>

              <Field
                label="Nazwa gangu"
                error={shouldShow("gangName") ? errors.gangName : ""}
                className=""
              >
                <input
                  id="gangName"
                  type="text"
                  value={gangName}
                  onChange={(e) => setGangName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, gangName: true }))}
                  placeholder="Wpisz nazwę swojego gangu..."
                  aria-invalid={!!shouldShow("gangName")}
                  aria-describedby={
                    shouldShow("gangName") ? "gangName-error" : undefined
                  }
                  className={inputClass(!!shouldShow("gangName"))}
                  style={bodyStyle}
                />
              </Field>

              <Field
                label="Gang house"
                error={shouldShow("gangHouse") ? errors.gangHouse : ""}
              >
                <div className="relative">
                  <select
                    id="gangHouse"
                    value={gangHouse}
                    onChange={(e) => {
                      setGangHouse(e.target.value);
                      setGangHouseOpen(false);
                    }}
                    onMouseDown={() => setGangHouseOpen((o) => !o)}
                    onKeyDown={(e) => {
                      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
                        setGangHouseOpen(true);
                      } else if (e.key === "Escape" || e.key === "Tab") {
                        setGangHouseOpen(false);
                      }
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, gangHouse: true }));
                      setGangHouseOpen(false);
                    }}
                    aria-invalid={!!shouldShow("gangHouse")}
                    aria-describedby={
                      shouldShow("gangHouse") ? "gangHouse-error" : undefined
                    }
                    className={inputClass(!!shouldShow("gangHouse")) + " appearance-none pr-10 cursor-pointer"}
                    style={bodyStyle}
                  >
                    <option value="">Wybierz gang house...</option>
                    {gangHouses.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={`pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 w-6 h-6 transition-transform duration-200 ${gangHouseOpen ? "rotate-180" : ""}`}
                    fill="#6E757C"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </Field>

              {/* Camp selection */}
              <div className="md:col-span-2 mt-[320px] md:mt-0">
                <div className="flex items-center justify-between mb-1 max-w-[460px]">
                  <h2
                    className="uppercase tracking-[0.05em] text-[#1c3b56] text-[24px] font-semibold"
                    style={labelStyle}
                  >
                    Wybierz swój obóz
                  </h2>
                  <button
                    type="button"
                    onClick={() => setCampInfoOpen(true)}
                    className="uppercase text-[#00378D] text-[16px] font-semibold tracking-[0.8px] underline"
                    style={labelStyle}
                  >
                    O co chodzi z obozem?
                  </button>
                </div>
                <div
                  role="tablist"
                  aria-label="Wybór obozu"
                  className="grid grid-cols-3 max-w-[460px] rounded-md overflow-hidden border-2 border-[#6e757c]"
                >
                  {camps.map((camp) => {
                    const active = camp.id === selectedCamp;
                    const Icon = camp.Icon;
                    return (
                      <button
                        key={camp.id}
                        role="tab"
                        type="button"
                        aria-selected={active}
                        onClick={() => setSelectedCamp(camp.id)}
                        className={`flex flex-col items-center justify-center gap-2 px-4 py-5 transition-all duration-200 border-[#6e757c] border-r-2 [&:last-child]:border-r-0 ${
                          active
                            ? "bg-gradient-to-t from-[#1a2b3a] to-[#1c3b56] text-[#F9F5F3]"
                            : "bg-[#F9F5F3] text-[#0d0d0e] hover:bg-[#e0d9d3]"
                        }`}
                      >
                        {camp.id === "wastes" ? (
                          <img
                            src={wastelandIcon}
                            alt=""
                            className={`w-16 h-16 object-contain ${active ? "invert" : ""}`}
                          />
                        ) : camp.id === "matisoft" ? (
                          <img
                            src={matisoftIcon}
                            alt=""
                            className={`w-16 h-16 object-contain ${active ? "invert" : ""}`}
                          />
                        ) : (
                          <img
                            src={chmielIcon}
                            alt=""
                            className={`w-16 h-16 object-contain ${active ? "invert" : ""}`}
                          />
                        )}
                        <span
                          className="uppercase text-center text-[20px] font-semibold tracking-[1px] leading-[20px]"
                          style={labelStyle}
                        >
                          {camp.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Description card */}
                <div className="mt-3 w-[460px] bg-[#F9F5F3] border-2 border-[#6e757c] rounded-md py-4 px-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCamp.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-6"
                    >
                      {activeCamp.id === "wastes" ? (
                        <img
                          src={wastelandIcon}
                          alt=""
                          className="w-16 h-16 object-contain"
                        />
                      ) : activeCamp.id === "matisoft" ? (
                        <img
                          src={matisoftIcon}
                          alt=""
                          className="w-16 h-16 object-contain"
                        />
                      ) : (
                        <img
                          src={chmielIcon}
                          alt=""
                          className="w-16 h-16 object-contain"
                        />
                      )}
                      <div className="w-px h-16 bg-[#6e757c]" />
                      <div className="flex-1">
                        <h3
                          className="uppercase tracking-[0.05em] text-[#1c3b56] text-[20px] font-semibold"
                          style={labelStyle}
                        >
                          {activeCamp.name}
                        </h3>
                        <p
                          className="text-[#6e757c] text-[15px] mt-1"
                          style={bodyStyle}
                        >
                          {activeCamp.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.form>
          </div>

          {/* CTA */}
          <div className="mt-[60px] px-6 lg:px-16 text-center relative z-10">
            <motion.button
              ref={ctaRef}
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              type="submit"
              form="registration-form"
              disabled={loading}
              className="group bg-gradient-to-t from-[#1a2b3a] to-[#1c3b56] hover:from-[#22384a] hover:to-[#244b6d] text-[#F9F5F3] uppercase tracking-[0.05em] font-semibold text-[20px] sm:text-[22px] inline-flex h-[80px] px-[40px] py-[8px] justify-center items-center gap-6 rounded-md shadow-lg transition-colors disabled:opacity-70"
              style={labelStyle}
            >
              <span className="w-[32px] h-[32px] inline-block [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: skullIcon }} />
              {loading ? "Wysyłanie..." : "Dołącz do wielkiej kampanii"}
              <span className="w-[32px] h-[32px] inline-block [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: skullIcon }} />
            </motion.button>
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

        {/* Organizers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="px-6 lg:px-16 pt-8 pb-16 text-center"
        >
          <h2
            className="uppercase text-[#0d0d0e] text-[40px] sm:text-[60px] font-semibold"
            style={labelStyle}
          >
            Organizatorzy
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            <OrgLogo
              href="https://www.minowar.com"
              label="Minowar.com"
              renderLogo={() => (
                <span
                  className="text-black text-[32px] sm:text-[40px] font-bold"
                  style={{ fontFamily: '"Teko", "Barlow Condensed", sans-serif' }}
                >
                  Minowar.com
                </span>
              )}
            />
            <OrgLogo
              href="https://mgc.com.pl/"
              label="Matisoft"
              renderLogo={() => (
                <img
                  src={matisoftLogo}
                  alt="Matisoft"
                  className="h-[120px] object-contain"
                />
              )}
            />
            <OrgLogo
              href="https://www.facebook.com/ChmieliSlod/"
              label="Chmiel i Słód"
              renderLogo={() => (
                <img
                  src={chmielLogo}
                  alt="Chmiel i Słód"
                  className="h-[120px] w-[120px] object-contain"
                />
              )}
            />
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="px-6 lg:px-16 pb-16"
        >
          <div className="max-w-[1312px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { src: necro8, alt: "Necromunda game scene 1" },
                { src: necro2, alt: "Necromunda game scene 2" },
                { src: necro12, alt: "Necromunda game scene 3" },
                { src: necro6, alt: "Necromunda game scene 4" },
                { src: necro15, alt: "Necromunda game scene 5" },
                { src: necro1, alt: "Necromunda game scene 6" },
                { src: necro3, alt: "Necromunda game scene 7" },
                { src: necro7, alt: "Necromunda game scene 8" },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="relative w-full aspect-square overflow-hidden rounded-md"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {successOpen && successData && (
          <SuccessModal
            data={successData}
            onClose={() => {
              setSuccessOpen(false);
              ctaRef.current?.focus();
            }}
          />
        )}
      </AnimatePresence>

      {/* Camp info modal */}
      <AnimatePresence>
        {campInfoOpen && (
          <CampInfoModal onClose={() => setCampInfoOpen(false)} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

function inputClass(invalid: boolean) {
  return `w-full h-12 px-4 rounded-md bg-[#F9F5F3] text-[#0d0d0e] placeholder:text-[#6e757c] border-2 outline-none transition-all ${
    invalid
      ? "border-[#b3261e] focus:border-[#b3261e]"
      : "border-[#0d0d0e] focus:border-[#1c3b56] focus:shadow-[0_0_0_3px_rgba(28,59,86,0.2)]"
  }`;
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "");
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        htmlFor={id}
        className="uppercase tracking-[0.05em] text-[#1c3b56] text-[24px] font-semibold"
        style={labelStyle}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[#b3261e] text-sm"
            style={bodyStyle}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function OrgLogo({
  href,
  label,
  renderLogo,
}: {
  href: string;
  label: string;
  renderLogo: () => React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="transition-all duration-200 hover:scale-105 hover:opacity-90 flex items-center justify-center"
    >
      {renderLogo()}
    </a>
  );
}

function SuccessModal({
  data,
  onClose,
}: {
  data: { player: string; gangHouse: string; gangName: string; email: string; camp: string };
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F9F5F3] border-2 border-[#0d0d0e] rounded-md max-w-md w-full p-6 relative"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 text-[#0d0d0e] hover:text-[#1c3b56] p-1"
        >
          <X className="w-5 h-5" />
        </button>
        <h2
          id="success-title"
          className="uppercase tracking-[0.05em] text-[#1c3b56] text-[28px] font-semibold"
          style={labelStyle}
        >
          Zgłoszenie przyjęte
        </h2>
        <p className="text-[#6e757c] mt-2" style={bodyStyle}>
          Twoje zgłoszenie zostało zapisane.
        </p>
        <dl
          className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-[15px]"
          style={bodyStyle}
        >
          <dt className="text-[#6e757c] uppercase tracking-wide">Gracz</dt>
          <dd className="text-[#0d0d0e]">{data.player}</dd>
          <dt className="text-[#6e757c] uppercase tracking-wide">Gang house</dt>
          <dd className="text-[#0d0d0e]">{data.gangHouse}</dd>
          <dt className="text-[#6e757c] uppercase tracking-wide">Gang</dt>
          <dd className="text-[#0d0d0e]">{data.gangName}</dd>
          <dt className="text-[#6e757c] uppercase tracking-wide">E-mail</dt>
          <dd className="text-[#0d0d0e]">{data.email}</dd>
          <dt className="text-[#6e757c] uppercase tracking-wide">Obóz</dt>
          <dd className="text-[#0d0d0e]">{data.camp}</dd>
        </dl>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-t from-[#1a2b3a] to-[#1c3b56] text-[#F9F5F3] uppercase tracking-[0.05em] font-semibold py-3 rounded-md hover:from-[#22384a] hover:to-[#244b6d] transition-colors"
          style={labelStyle}
        >
          Zamknij
        </button>
      </motion.div>
    </motion.div>
  );
}

function CampInfoModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="camp-info-title"
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F9F5F3] border-2 border-[#0d0d0e] rounded-md max-w-2xl w-full p-6 relative"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 text-[#0d0d0e] hover:text-[#1c3b56] p-1"
        >
          <X className="w-5 h-5" />
        </button>
        <h2
          id="camp-info-title"
          className="uppercase tracking-[0.05em] text-[#1c3b56] text-[28px] font-semibold"
          style={labelStyle}
        >
          Wybieranie obozu
        </h2>
        <p className="text-[#0d0d0e] mt-4 text-[16px] leading-relaxed" style={bodyStyle}>
          Podczas rejestracji każdy gracz wybiera swój obóz, czyli domyślną bazę, z którą będzie organizacyjnie przypisany podczas kampanii. Nie oznacza to, że musisz grać wyłącznie w tym miejscu. Nadal możesz umawiać się na gry w dowolnej lokalizacji partnerskiej. Wybór obozu pomaga nam lepiej zaplanować kampanię: zobaczyć, gdzie zbiera się najwięcej graczy, które miejsca będą najbardziej aktywne i jak rozłożyć organizację wydarzenia między lokalizacje. Możesz więc potraktować obóz jako swoją bazę wypadową w warszawskim Underhive — miejsce, z którym twój gang jest najbardziej związany na potrzeby kampanii.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-t from-[#1a2b3a] to-[#1c3b56] text-[#F9F5F3] uppercase tracking-[0.05em] font-semibold py-3 rounded-md hover:from-[#22384a] hover:to-[#244b6d] transition-colors"
          style={labelStyle}
        >
          Zamknij
        </button>
      </motion.div>
    </motion.div>
  );
}
