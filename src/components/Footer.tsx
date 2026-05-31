"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#corridors", label: "Corridors" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Portive Exports"
              width={48}
              height={48}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gold-500 text-sm font-display italic mb-3">Trade Simplified.</p>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              A modern Pakistani import/export company focused on industrial machinery trading
              and end-to-end trade facilitation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-5">Contact</p>
            <div className="space-y-4">
              <a
                href="mailto:support@portiveimpex.com"
                className="flex items-center gap-2 text-white/50 hover:text-gold-400 text-sm transition-colors"
              >
                <Mail size={14} className="text-gold-600/60" />
                support@portiveimpex.com
              </a>
              <a
                href="https://linkedin.com/company/portive-exports/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-gold-400 text-sm transition-colors"
              >
                <Linkedin size={14} className="text-gold-600/60" />
                linkedin.com/company/portive-exports
              </a>
              <p className="text-white/30 text-sm leading-relaxed">
                Office No. 232, 2nd Floor<br />
                Swiss Center, D-12 Markaz<br />
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex items-center justify-center text-white/25 text-xs">
          <p>© {new Date().getFullYear()} Portive Exports Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
