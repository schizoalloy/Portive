"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "CNC & Precision",
    description:
      "High-accuracy computer-controlled machines for cutting, milling, and finishing operations, sourced from Pakistan's precision manufacturing ecosystem.",
    items: ["CNC Cutting Machines", "CNC Milling Machines", "Hobbing Machines", "Honing Machines"],
    accent: "from-gold-600/20 to-transparent",
  },
  {
    title: "General Workshop",
    description:
      "Core workshop machinery trusted across metalworking, fabrication, and industrial production facilities throughout the region.",
    items: ["Lathe Machines", "Drilling Machines", "Surface Grinders", "Industrial Mixers"],
    accent: "from-gold-600/10 to-transparent",
  },
  {
    title: "Heavy & Hydraulic",
    description:
      "Heavy-duty hydraulic and pneumatic equipment for high-load industrial applications, inspected and certified before dispatch.",
    items: ["Hydraulic Presses", "Industrial Pumps", "Compressors", "Tools & Accessories"],
    accent: "from-gold-700/15 to-transparent",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Products
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
            Industrial Machinery <span className="text-gold-gradient">Catalogue</span>
          </h2>
        </motion.div>

        {/* New / Refurbished note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 mb-14 flex items-start gap-3 max-w-2xl"
        >
          <div className="mt-1 w-1 h-full min-h-[40px] bg-gold-500/60 flex-shrink-0" />
          <p className="text-white/50 text-base leading-relaxed">
            All equipment is available as <span className="text-white/80 font-medium">new</span> or{" "}
            <span className="text-white/80 font-medium">professionally refurbished</span>. Refurbished
            units undergo full inspection, mechanical reconditioning, and functional testing before
            dispatch, documented and guaranteed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-navy-800/40 border border-white/[0.07] overflow-hidden group hover:border-gold-600/30 transition-colors duration-400"
            >
              {/* Gradient header band */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${cat.accent} pointer-events-none`} />

              <div className="relative p-8">
                {/* Category number */}
                <span className="text-gold-600/40 text-xs font-mono tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-display text-2xl font-bold text-white mt-2 mb-4">
                  {cat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {cat.description}
                </p>

                {/* Machine list */}
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="w-4 h-px bg-gold-500/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom gold line */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-gold-500/40 to-transparent" />

                <div className="mt-5 flex gap-3">
                  <span className="text-xs border border-gold-600/30 text-gold-500/80 px-3 py-1 tracking-wide">
                    New Available
                  </span>
                  <span className="text-xs border border-white/10 text-white/40 px-3 py-1 tracking-wide">
                    Refurbished Available
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            Looking for a specific machine not listed here?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium border-b border-gold-500/40 hover:border-gold-400 pb-0.5 transition-colors duration-200"
          >
            Send us a sourcing enquiry →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
