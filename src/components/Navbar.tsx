"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Lock } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrolledBg =
    theme === "light"
      ? "bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#E0DDD6] shadow-sm"
      : "bg-navy-900/95 backdrop-blur-md border-b border-gold-600/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]";

  const mobileMenuBg =
    theme === "light"
      ? "bg-[#F5F3EE]/99 backdrop-blur-lg"
      : "bg-navy-950/98 backdrop-blur-lg";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? scrolledBg : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Portive Exports"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="font-display italic text-white/90 text-lg tracking-wide">
              Portive Exports
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-gold-400 transition-colors duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={17} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -30 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="https://intel.portiveimpex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 flex items-center gap-1.5 border border-white/20 text-white/70 text-sm font-medium tracking-wide hover:border-white/40 hover:text-white transition-all duration-200"
            >
              <Lock size={14} />
              Login
            </a>

            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-5 py-2 border border-gold-500 text-gold-400 text-sm font-medium tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile right controls */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-gold-400 transition-colors"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="w-11 h-11 flex items-center justify-center text-white/80 hover:text-gold-400 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 ${mobileMenuBg} flex flex-col pt-24 px-8 pb-12`}
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(l.href)}
                  className="text-left text-2xl font-display font-medium text-white/80 hover:text-gold-400 transition-colors py-2 border-b border-white/5"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                onClick={() => handleNav("#contact")}
                className="mt-4 py-3 border border-gold-500 text-gold-400 text-lg font-medium tracking-wider hover:bg-gold-500 hover:text-navy-900 transition-all"
              >
                Get in Touch
              </motion.button>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                href="https://intel.portiveimpex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 py-3 border border-white/20 text-white/80 flex items-center justify-center gap-2 text-base font-medium tracking-wide hover:border-white/40 hover:text-white transition-all"
              >
                <Lock size={16} />
                Login
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
