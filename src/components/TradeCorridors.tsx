"use client";

import { motion } from "framer-motion";

const corridors = [
  {
    from: "Pakistan",
    to: "Saudi Arabia",
    fromCode: "PK",
    toCode: "SA",
    flag: "🇵🇰 → 🇸🇦",
    status: "Primary",
    description:
      "Our most active corridor. Machinery and industrial equipment shipped to Saudi industrial zones, with full export documentation and marine insurance.",
    detail: "Karachi / Port Qasim → Jeddah / Dammam",
  },
  {
    from: "Pakistan",
    to: "UAE",
    fromCode: "PK",
    toCode: "AE",
    flag: "🇵🇰 ↔ 🇦🇪",
    status: "Active",
    description:
      "Bilateral trade facilitation: Pakistani goods into the UAE free trade zones and re-export markets, with full customs clearance support.",
    detail: "Karachi → Jebel Ali / Abu Dhabi",
  },
  {
    from: "Pakistan",
    to: "China",
    fromCode: "PK",
    toCode: "CN",
    flag: "🇵🇰 ↔ 🇨🇳",
    status: "Active",
    description:
      "Procurement and inbound sourcing from China's manufacturing regions, with coordinated logistics, pre-shipment inspections, and customs duty advisory.",
    detail: "Guangdong / Shanghai → Karachi",
  },
  {
    from: "Pakistan",
    to: "Malaysia",
    fromCode: "PK",
    toCode: "MY",
    flag: "🇵🇰 ↔ 🇲🇾",
    status: "Active",
    description:
      "Growing corridor servicing Malaysian industrial buyers with Pakistani machinery and equipment, via sea freight with full B/L coordination.",
    detail: "Karachi / Port Qasim → Port Klang",
  },
];

const statusColors: Record<string, string> = {
  Primary: "text-gold-400 border-gold-500/60 bg-gold-600/10",
  Active: "text-white/60 border-white/20 bg-white/5",
};

export default function TradeCorridors() {
  return (
    <section id="corridors" className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      {/* World map dots decorative bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #5AAB8E 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Coverage
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
            Active Trade <span className="text-gold-gradient">Corridors</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl text-base lg:text-lg leading-relaxed">
            Four regional corridors connecting Pakistan's industrial base with key markets
            across the Middle East, South-East Asia, and China.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corridors.map((c, i) => (
            <motion.div
              key={`${c.from}-${c.to}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-navy-800/50 border border-white/[0.07] hover:border-gold-600/30 p-8 transition-all duration-400 overflow-hidden"
            >
              {/* Highlight on primary */}
              {c.status === "Primary" && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-2xl font-bold text-white">
                      {c.from}
                    </span>
                    <span className="text-gold-500/60 text-lg">↔</span>
                    <span className="font-display text-2xl font-bold text-white">
                      {c.to}
                    </span>
                  </div>
                  <span className="text-white/30 text-xs tracking-wider">{c.detail}</span>
                </div>
                <span
                  className={`text-xs font-medium border px-3 py-1 tracking-wider ${statusColors[c.status]}`}
                >
                  {c.status}
                </span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">{c.description}</p>

              {/* Animated bottom line */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-500/50 to-transparent transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Pakistan hub note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4 text-white/30 text-xs tracking-widest uppercase"
        >
          <div className="h-px flex-1 bg-white/10" />
          <span>All corridors originate or terminate at Pakistan's commercial ports</span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
