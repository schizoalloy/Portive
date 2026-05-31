"use client";

import { motion } from "framer-motion";
import { Linkedin, UserRound } from "lucide-react";

const team = [
  {
    name: "Muhammad Ali",
    role: "Chief Executive Officer",
    bio: "Entrepreneur and IT student building digital infrastructure to modernise trade processes. Leads commercial strategy and technology at Portive, combining software thinking with operational trade execution to streamline every stage of the supply chain.",
    credentials: ["Commercial Strategy", "Technology & Digital Ops", "Trade Infrastructure"],
    linkedin: "https://www.linkedin.com/in/all0y/",
  },
  {
    name: "Maryam Jabeen",
    role: "Director",
    bio: "BSc Hons Political Science & Government, University of London. Currently completing MSc Military Strategic Studies. Leads regulatory strategy and institutional relations at Portive, bringing academic depth in international governance to trade compliance and policy navigation.",
    credentials: [
      "BSc Political Science & Government, University of London",
      "MSc Military Strategic Studies (in progress)",
      "Regulatory Strategy · Institutional Relations",
    ],
    linkedin: "https://www.linkedin.com/in/maryam-jabeen-50595b280/",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      {/* Decorative background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gold-600/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Leadership
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            The <span className="text-gold-gradient">Team</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            A lean leadership team combining commercial execution, technology, and academic
            expertise in international governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-navy-800/50 border border-white/[0.07] hover:border-gold-600/30 p-10 transition-all duration-400 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent group-hover:via-gold-400/80 transition-all duration-400" />

              {/* Avatar */}
              <div className="mb-6 w-16 h-16 bg-gold-600/10 border-2 border-gold-600/30 flex items-center justify-center group-hover:bg-gold-600/15 transition-colors duration-300">
                <UserRound size={28} className="text-gold-500/70" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
                {member.role}
              </p>

              <p className="text-white/50 text-sm leading-relaxed mb-8">{member.bio}</p>

              {/* Credentials */}
              <div className="space-y-2">
                {member.credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500/60 flex-shrink-0" />
                    <span className="text-white/40 text-xs leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-white/30 hover:text-gold-400 transition-colors text-xs"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
