"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Factory,
  Globe2,
  ShieldCheck,
  GraduationCap,
  Zap,
} from "lucide-react";

const points = [
  {
    icon: Cpu,
    title: "Technology-First Operations",
    description:
      "We digitise trade workflows from enquiry to delivery. Digital documentation, real-time tracking, and streamlined communication reduce lead times and eliminate paper-trail delays.",
  },
  {
    icon: Factory,
    title: "Depth in Industrial Machinery",
    description:
      "Not a generalist broker. We operate with genuine category knowledge in CNC, hydraulic, and workshop machinery, enabling accurate sourcing, better pricing, and reliable quality checks.",
  },
  {
    icon: Globe2,
    title: "Strong Regional Network",
    description:
      "Established relationships with manufacturers in Pakistan's industrial belt, trusted freight forwarding agents, and customs brokers in key international markets.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Accountability",
    description:
      "One point of contact for the entire transaction: sourcing through documentation through freight to final delivery. No hand-offs to unknown parties at critical stages.",
  },
  {
    icon: GraduationCap,
    title: "Academically Grounded Strategy",
    description:
      "Our leadership combines regulatory expertise from institutional political science with commercial execution, trade compliance and strategy backed by academic rigour.",
  },
  {
    icon: Zap,
    title: "Lean and Responsive",
    description:
      "Built without bureaucracy. Fast decisions, direct communication, and the ability to move quickly on time-sensitive shipments that larger firms cannot prioritise.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      {/* Large decorative number */}
      <div className="absolute right-8 top-16 font-display text-[20rem] font-bold text-white/[0.015] select-none pointer-events-none leading-none">
        6
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Why Portive
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            What Sets Us <span className="text-gold-gradient">Apart</span>
          </h2>
          <p className="mt-4 text-white/50 text-base lg:text-lg leading-relaxed">
            Six reasons international buyers and suppliers choose Portive Exports over
            generic freight and trading intermediaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 bg-navy-800/30 border border-white/[0.05] hover:bg-navy-800/50 hover:border-gold-600/25 transition-all duration-400"
            >
              {/* Index */}
              <span className="absolute top-6 right-6 font-mono text-xs text-white/15">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-11 h-11 flex items-center justify-center bg-gold-600/10 border border-gold-600/20 mb-6 group-hover:bg-gold-600/20 transition-colors duration-300">
                <p.icon size={20} className="text-gold-400" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
