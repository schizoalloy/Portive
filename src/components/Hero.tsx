"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "4", label: "Trade Corridors" },
  { value: "5", label: "Service Lines" },
  { value: "2026", label: "Est." },
  { value: "ISB", label: "Headquarters" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#5AAB8E 1px, transparent 1px), linear-gradient(to right, #5AAB8E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      {/* Faded background logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.1 }}
        className="absolute top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <Image
          src="/logo.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="w-[420px] lg:w-[580px] xl:w-[660px] h-auto opacity-[0.045]"
          priority
        />
      </motion.div>

      {/* Left vertical line accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent origin-top"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-gold-600/40 bg-gold-600/10 px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
            Islamabad, Pakistan &nbsp;·&nbsp; Est. 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white max-w-4xl"
        >
          Industrial Trade,{" "}
          <span className="text-gold-gradient">Simplified.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed font-body"
        >
          Portive Exports connects Pakistan's industrial manufacturing belt with
          regional buyers across Saudi Arabia, UAE, China, and Malaysia.
          Machinery, freight, and full-service trade facilitation under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-8 py-3.5 text-sm tracking-wider transition-all duration-300"
          >
            Start a Trade Enquiry
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="flex items-center gap-2 border border-white/20 hover:border-gold-500/60 text-white/80 hover:text-white px-8 py-3.5 text-sm tracking-wider transition-all duration-300"
          >
            Our Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <span className="font-display text-3xl lg:text-4xl font-bold text-gold-400">
                {s.value}
              </span>
              <span className="text-xs text-white/40 tracking-[0.15em] uppercase">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-gold-400 transition-colors"
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
