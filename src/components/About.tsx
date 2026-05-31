"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, MapPin } from "lucide-react";

const credentials = [
  { label: "SECP Incorporated", sub: "Registered Private Limited Company" },
  { label: "FBR / NTN Registered", sub: "Federal Board of Revenue" },
  { label: "ICCI Member", sub: "Islamabad Chamber of Commerce & Industry" },
  { label: "Pakistan Single Window", sub: "PSW Trade Portal Registered" },
];

const stats = [
  { icon: Building2, value: "2026", label: "Year Founded" },
  { icon: Award, value: "4", label: "Credentials" },
  { icon: Users, value: "2", label: "Senior Directors" },
  { icon: MapPin, value: "ISB", label: "Headquarters" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Building the <span className="text-gold-gradient">Infrastructure</span>{" "}
              for Modern Trade
            </h2>

            <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-5">
              Portive Exports Pvt. Ltd. was founded in 2026 with a clear mandate: make international
              trade between Pakistan and the region faster, more transparent, and genuinely accessible
              to industrial buyers who need reliable supply chains, not intermediary complexity.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              We operate from Islamabad with a focused team that combines technology execution,
              regulatory knowledge, and commercial relationships built across Pakistan's
              manufacturing belt and our key export markets.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Our first active client, Anwar Al Fateh Metals Company (Riyadh), reflects the type of
              regional industrial partner we are built to serve: established buyers who need dependable
              sourcing, seamless documentation, and a team that understands the practical realities
              of cross-border machinery trade.
            </p>

            {/* Mission statement */}
            <div className="border-l-2 border-gold-500 pl-6 py-1">
              <p className="text-white/80 text-lg font-display italic leading-relaxed">
                "Simplifying international trade: making it faster, more transparent,
                and accessible."
              </p>
            </div>
          </motion.div>

          {/* Right: credentials + stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="bg-navy-800/60 border border-white/[0.06] p-6 flex flex-col gap-2"
                >
                  <s.icon size={18} className="text-gold-500/60" strokeWidth={1.5} />
                  <span className="font-display text-3xl font-bold text-gold-400">{s.value}</span>
                  <span className="text-white/40 text-xs tracking-wider uppercase">{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Credentials */}
            <div className="bg-navy-800/40 border border-white/[0.06] p-6">
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
                Regulatory Credentials
              </p>
              <div className="space-y-4">
                {credentials.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <div>
                      <p className="text-white/80 text-sm font-medium">{c.label}</p>
                      <p className="text-white/35 text-xs">{c.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* HQ address */}
            <div className="flex items-start gap-3 text-white/40 text-sm">
              <MapPin size={16} className="text-gold-600/60 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <span>Office No. 232, 2nd Floor, Swiss Center, D-12 Markaz, Islamabad, Pakistan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
