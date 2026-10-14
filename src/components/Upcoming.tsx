"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ExternalLink, MapPin } from "lucide-react";

// Photos are hotlinked from Wikimedia Commons (standard thumbnail widths) and credited below.
const wm = (path: string, file: string, w: number) =>
  `https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/${w}px-${file}`;

const photos = [
  {
    path: "7/7e",
    file: "Aerial_View%2C_Zone_B%2C_Canton_Fair_Complex_20230701-C.jpg",
    widths: [960, 1920],
    alt: "Aerial view of Zone B of the Canton Fair Complex beside the Pearl River in Guangzhou",
    caption: "Canton Fair Complex, Pazhou, Guangzhou",
    credit: "Tim Wu",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Aerial_View,_Zone_B,_Canton_Fair_Complex_20230701-C.jpg",
  },
  {
    path: "f/f6",
    file: "Canton_Trade_Fair_%28tarotastic%29.jpg",
    widths: [500, 960],
    alt: "Arched steel-and-glass concourse inside the Canton Fair Complex",
    caption: "Exhibition concourse",
    credit: "Taro Taylor",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Canton_Trade_Fair_(tarotastic).jpg",
  },
  {
    path: "3/33",
    file: "Canton_Fair_Complex_at_night.jpg",
    widths: [500, 960],
    alt: "Canton Fair Complex and Canton Fair Building lit up at night",
    caption: "The complex at night",
    credit: "钉钉",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Canton_Fair_Complex_at_night.jpg",
  },
];

const facts = [
  { value: "1.55M m²", label: "Exhibition Area" },
  { value: "75,700", label: "Booths" },
  { value: "30,000+", label: "Exhibitors" },
  { value: "3", label: "Phases" },
];

// Times are Guangzhou local (UTC+8), daily fair hours 09:30–18:00.
const phases = [
  {
    label: "Phase 1",
    dates: "15 – 19 Oct",
    start: "2026-10-15T09:30:00+08:00",
    end: "2026-10-19T18:00:00+08:00",
    theme: "Advanced Manufacturing",
    items: [
      "Electronics & household appliances",
      "Industrial automation & machinery",
      "Vehicles & auto parts",
      "Hardware & tools",
      "Lighting & new energy",
    ],
  },
  {
    label: "Phase 2",
    dates: "23 – 27 Oct",
    start: "2026-10-23T09:30:00+08:00",
    end: "2026-10-27T18:00:00+08:00",
    theme: "Quality Home Life",
    items: [
      "Housewares & kitchenware",
      "Ceramics, gifts & decorations",
      "Furniture",
      "Building & decorative materials",
    ],
  },
  {
    label: "Phase 3",
    dates: "31 Oct – 4 Nov",
    start: "2026-10-31T09:30:00+08:00",
    end: "2026-11-04T18:00:00+08:00",
    theme: "Better Life",
    items: [
      "Textiles & garments",
      "Shoes, bags & fashion accessories",
      "Toys, baby & maternity products",
      "Office supplies",
      "Health, personal care & food",
    ],
  },
];

const steps = [
  "Tell us the products, quantities, and target price you need.",
  "We source from fair exhibitors, compare quotes, and negotiate on your behalf.",
  "We coordinate inspection, documentation, and freight through to delivery.",
];

type PhaseStatus = "upcoming" | "live" | "concluded";

const statusStyles: Record<PhaseStatus, { text: string; className: string }> = {
  upcoming: { text: "Upcoming", className: "border-gold-600/40 text-gold-400" },
  live: { text: "Live now", className: "border-gold-500 bg-gold-500 text-navy-950" },
  concluded: { text: "Concluded", className: "border-white/15 text-white/40" },
};

export default function Upcoming() {
  // Phase status depends on the visitor's clock, so it is resolved after mount to avoid hydration mismatches.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);

  const statusOf = (p: (typeof phases)[number]): PhaseStatus => {
    if (now === null || now < Date.parse(p.start)) return "upcoming";
    return now <= Date.parse(p.end) ? "live" : "concluded";
  };

  const placeOrder = () => {
    window.dispatchEvent(new CustomEvent("portive:select-service", { detail: "canton-fair" }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="upcoming" className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div className="absolute -left-40 top-24 w-[520px] h-[520px] bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="inline-flex items-center gap-2 border border-gold-600/40 bg-gold-600/10 px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
                Upcoming
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              Canton Fair <span className="text-gold-gradient">Autumn 2026</span>
            </h2>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CalendarDays size={15} className="text-gold-500" strokeWidth={1.5} />
                15 October – 4 November 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-gold-500" strokeWidth={1.5} />
                Canton Fair Complex, Guangzhou
              </span>
            </div>

            <p className="mt-6 text-white/50 text-base lg:text-lg leading-relaxed max-w-2xl">
              The 140th China Import and Export Fair, China&apos;s largest trade fair, held
              every spring and autumn since 1957, runs across three phases this season. Place
              your order with Portive and we&apos;ll handle it from the exhibition floor to your
              door.
            </p>

            <ol className="mt-8 space-y-3 max-w-2xl">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-white/70 text-sm leading-relaxed">
                  <span className="mt-0.5 font-mono text-xs text-gold-500 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  placeOrder();
                }}
                className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-8 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-300"
              >
                Place Order
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://www.cantonfair.org.cn/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-gold-400 text-sm transition-colors"
              >
                Official Canton Fair site <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Key facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="min-w-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 content-start"
          >
            {facts.map((f) => (
              <div
                key={f.label}
                className="bg-navy-800/60 border border-white/[0.06] p-5 sm:p-6 flex flex-col gap-2"
              >
                <span className="font-display text-2xl xl:text-3xl font-bold text-gold-400 whitespace-nowrap">{f.value}</span>
                <span className="text-white/40 text-xs tracking-wider uppercase">{f.label}</span>
              </div>
            ))}
            <p className="col-span-2 md:col-span-4 lg:col-span-2 text-white/35 text-xs leading-relaxed">
              Open daily 09:30 – 18:00 (China Standard Time) during each phase. China Import and
              Export Fair Complex, Pazhou, Haizhu District, Guangzhou.
            </p>
          </motion.div>
        </div>

        {/* Photo mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 md:h-[440px] lg:h-[520px]"
        >
          {photos.map((p, i) => (
            <figure
              key={p.file}
              className={`group relative overflow-hidden bg-navy-800 ${
                i === 0 ? "col-span-2 md:row-span-2 aspect-[3/2] md:aspect-auto" : "aspect-square md:aspect-auto"
              }`}
            >
              <img
                src={wm(p.path, p.file, p.widths[1])}
                srcSet={p.widths.map((w) => `${wm(p.path, p.file, w)} ${w}w`).join(", ")}
                sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pt-10 pb-3 text-[#EFEFEF] text-xs tracking-wide">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </motion.div>

        {/* Phases */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((ph, i) => {
            const status = statusStyles[statusOf(ph)];
            return (
              <motion.div
                key={ph.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-navy-800/50 border border-white/[0.07] hover:border-gold-600/30 p-8 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-600/60 group-hover:border-gold-400 transition-colors duration-300" />

                <div className="flex items-center justify-between gap-3">
                  <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium">
                    {ph.label}
                  </span>
                  {now !== null && (
                    <span className={`text-[10px] tracking-[0.15em] uppercase border px-2 py-0.5 ${status.className}`}>
                      {status.text}
                    </span>
                  )}
                </div>

                <p className="font-display text-2xl xl:text-3xl font-bold text-white mt-4 whitespace-nowrap">{ph.dates}</p>
                <p className="text-white/50 text-sm mt-1 mb-6">{ph.theme}</p>

                <ul className="space-y-3">
                  {ph.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="w-4 h-px bg-gold-500/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA + credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/[0.06] pt-8"
        >
          <p className="text-white/50 text-sm max-w-md leading-relaxed">
            Know what you want from the fair? Send us your requirement and we&apos;ll respond
            within one business day.
          </p>
          <a
            href="#enquiry"
            onClick={(e) => {
              e.preventDefault();
              placeOrder();
            }}
            className="group inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 font-semibold px-8 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-300 flex-shrink-0"
          >
            Place Order
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        <p className="mt-8 text-white/25 text-[11px] leading-relaxed">
          Photos via Wikimedia Commons:{" "}
          {photos.map((p, i) => (
            <span key={p.file}>
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 underline-offset-2 hover:underline transition-colors"
              >
                {p.credit}
              </a>{" "}
              ({p.license}){i < photos.length - 1 ? " · " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
