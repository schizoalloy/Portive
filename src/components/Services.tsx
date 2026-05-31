"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cog,
  FileText,
  PackageSearch,
  ShoppingBag,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Machinery & Equipment Trading",
    description:
      "Source, inspect, and supply industrial machinery (new and professionally refurbished) from Pakistan's manufacturing belt to regional buyers. Every unit verified before shipment.",
    tags: ["CNC Machines", "Lathes", "Hydraulic Presses", "Compressors"],
  },
  {
    icon: FileText,
    title: "Export Services",
    description:
      "Full outbound trade management from Pakistan. We handle documentation, Certificate of Origin, customs agent coordination, and marine insurance so you don't have to.",
    tags: ["CO Certification", "Customs Coordination", "Marine Insurance", "Documentation"],
  },
  {
    icon: PackageSearch,
    title: "Import Services",
    description:
      "Seamless inbound logistics to Pakistan: pre-shipment filing, customs duty advisory, port handling, and demurrage management, keeping your cargo moving.",
    tags: ["Pre-Shipment Filing", "Customs Duty Advisory", "Port Handling", "Demurrage Mgmt"],
  },
  {
    icon: ShoppingBag,
    title: "Sourcing & Procurement",
    description:
      "We act as your procurement arm in Pakistan. Direct access to vetted manufacturers and suppliers: quality-checked, price-benchmarked, and delivery-tracked.",
    tags: ["Vendor Vetting", "Price Benchmarking", "Quality Checks", "Supplier Access"],
  },
  {
    icon: Truck,
    title: "Freight Forwarding & Logistics",
    description:
      "FCL and LCL sea freight coordination, forwarder management, real-time shipment tracking, and Bill of Lading coordination across all active corridors.",
    tags: ["FCL / LCL", "Forwarder Management", "B/L Coordination", "Tracking"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-pad bg-navy-900 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="gold-rule absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
            End-to-End Trade <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl text-base lg:text-lg leading-relaxed">
            Five integrated service lines that cover every stage of international trade, from
            sourcing through documentation to final delivery.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={item}
              className={`group relative bg-navy-800/60 border border-white/[0.06] hover:border-gold-600/40 p-8 transition-all duration-400 hover:-translate-y-1 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-600/60 group-hover:border-gold-400 transition-colors duration-300" />

              <div className="mb-6 w-12 h-12 flex items-center justify-center bg-gold-600/10 border border-gold-600/20 group-hover:bg-gold-600/20 transition-colors duration-300">
                <svc.icon size={22} className="text-gold-400" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-3 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{svc.description}</p>

              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gold-500/80 border border-gold-600/20 px-2.5 py-1 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
