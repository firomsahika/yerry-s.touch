"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplet, ShieldCheck, Armchair, Sparkles } from "lucide-react";

export default function Differentiators() {
  const differentiators = [
    {
      icon: Droplet,
      title: "Skin-First Architecture",
      tagline: "Custom Typing & Deep Hydration",
      description:
        "Every session commences with bespoke dermal analysis, lymphatic drainage massage, and pH-balancing primers. Foundation breathes naturally and remains pristine until the last celebration dance.",
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Hygiene",
      tagline: "Zero Cross-Contamination",
      description:
        "Uncompromising sanitary protocol. We implement 70%+ medical-grade isopropyl sterilizations, disposable mascara wands, stainless steel palettes, and sealed brush sets for every client.",
    },
    {
      icon: Armchair,
      title: "Private VIP Studio Suite",
      tagline: "Serene Gullele Sanctuary",
      description:
        "Nestled in Gullele across from Medhanealem School, our private suite offers an oasis of bridal tranquility. Enjoy artisanal Ethiopian Buna ceremonies and chilled champagne away from city noise.",
    },
  ];

  return (
    <section id="different" className="py-16 sm:py-24 relative bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="glass-luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold/35 shadow-luxury relative overflow-hidden bg-white/80">
          <div className="absolute inset-0 bg-fluted-texture pointer-events-none opacity-30" />

          {/* Section Heading: 'Standard' */}
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-700 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Standard
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso">
              Elevated Artistry,{" "}
              <span className="gold-foil-text italic">Uncompromising Care</span>
            </h2>

            <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed">
              Why Addis Ababa&apos;s most discerning brides and public figures trust Yeron Habtamu with their most photographed mornings.
            </p>
          </div>

          {/* 3 Pillars Grid (Compact) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 rounded-xl bg-white/95 border border-gold/25 hover:border-gold/50 shadow-sm hover:shadow-gold transition-all duration-300 space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 text-gold-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-espresso">
                      {diff.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 block mt-0.5">
                      {diff.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-espresso/75 leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
