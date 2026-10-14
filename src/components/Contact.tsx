"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  // Lets CTAs elsewhere on the page (e.g. the Canton Fair "Place Order" button) preselect a service.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      setForm((prev) => ({ ...prev, service }));
      setStatus((prev) => (prev === "sending" ? prev : "idle"));
    };
    window.addEventListener("portive:select-service", onSelect);
    return () => window.removeEventListener("portive:select-service", onSelect);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="gold-rule absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Start a Trade <span className="text-gold-gradient">Conversation</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl text-base leading-relaxed">
            Whether you're placing a Canton Fair order, sourcing products, planning an export
            shipment, or looking for a reliable procurement partner in Pakistan. Get in touch
            and we'll respond within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 bg-gold-600/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Email</p>
                <a
                  href="mailto:support@portiveimpex.com"
                  className="text-white/80 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  support@portiveimpex.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 bg-gold-600/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Office</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Office No. 232, 2nd Floor<br />
                  Swiss Center, D-12 Markaz<br />
                  Islamabad, Pakistan
                </p>
                <a
                  href="https://maps.google.com/?q=Swiss+Center+D-12+Markaz+Islamabad+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-gold-500/70 hover:text-gold-400 text-xs transition-colors"
                >
                  Open in Maps <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-white/10 overflow-hidden"
            >
              <iframe
                title="Portive Exports Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.0925131723388!2d72.94983902945741!3d33.70065846935511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd13dac05b67%3A0x56f01f422762372c!2sPortive%20Exports%20Private%20Limited!5e0!3m2!1sen!2sus!4v1780086480360!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            id="enquiry"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 scroll-mt-28"
          >
            <AnimatePresence mode="wait">
              {status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-navy-800/50 border border-red-500/30 p-8 text-center space-y-3"
                >
                  <p className="text-red-400 text-sm font-medium">{errorMsg}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-white/40 hover:text-gold-400 transition-colors underline"
                  >
                    Try again
                  </button>
                </motion.div>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-navy-800/50 border border-gold-600/30 p-12 flex flex-col items-center text-center gap-4"
                >
                  <CheckCircle size={48} className="text-gold-400" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-white">Message Received</h3>
                  <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. We'll review your enquiry and respond within
                    one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Trade enquiry form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-white/40 tracking-wider uppercase">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-navy-800/60 border border-white/10 focus:border-gold-500/60 text-white/80 placeholder-white/20 text-sm px-4 py-3 outline-none transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs text-white/40 tracking-wider uppercase">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="bg-navy-800/60 border border-white/10 focus:border-gold-500/60 text-white/80 placeholder-white/20 text-sm px-4 py-3 outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs text-white/40 tracking-wider uppercase">
                      Email Address <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-navy-800/60 border border-white/10 focus:border-gold-500/60 text-white/80 placeholder-white/20 text-sm px-4 py-3 outline-none transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs text-white/40 tracking-wider uppercase">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="bg-navy-800/60 border border-white/10 focus:border-gold-500/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="" className="bg-navy-900">Select a service (optional)</option>
                      <option value="canton-fair" className="bg-navy-900">Canton Fair</option>
                      <option value="export-services" className="bg-navy-900">Export Services</option>
                      <option value="import-services" className="bg-navy-900">Import Services</option>
                      <option value="sourcing-procurement" className="bg-navy-900">Sourcing &amp; Procurement</option>
                      <option value="freight-logistics" className="bg-navy-900">Freight Forwarding &amp; Logistics</option>
                      <option value="other" className="bg-navy-900">Other / I want to ask something else</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-white/40 tracking-wider uppercase">
                      Message <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={
                        form.service === "canton-fair"
                          ? "What would you like ordered from the Canton Fair: product, specs, quantity, target price, delivery timeline..."
                          : "Describe your trade requirement: product, quantity, destination, timeline..."
                      }
                      className="bg-navy-800/60 border border-white/10 focus:border-gold-500/60 text-white/80 placeholder-white/20 text-sm px-4 py-3 outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-wait text-navy-950 font-semibold py-3.5 text-sm tracking-wider transition-all duration-300"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
