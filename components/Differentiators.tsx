"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplet, ShieldCheck, Armchair, Sparkles } from "lucide-react";

export default function Differentiators() {
  const differentiators = [
    {
      icon: Droplet,
      title: "Skin-First Approach",
      tagline: "Deep hydration & gentle prep",
      description:
        "Every session begins with personalized skin preparation and gentle hydration, ensuring your complexion breathes naturally and stays radiant throughout your celebration.",
    },
    {
      icon: ShieldCheck,
      title: "Sanitary Excellence",
      tagline: "Highest hygiene standards",
      description:
        "Dedicated sanitization protocols with professional sterilization, clean palettes, and freshly prepped brush sets for every single appointment.",
    },
    {
      icon: Armchair,
      title: "Private Studio Space",
      tagline: "Peaceful Gullele sanctuary",
      description:
        "A welcoming, serene studio suite in Gullele across from Medhanealem School, designed for calm, unhurried bridal and beauty appointments.",
    },
  ];

  return (
    <section id="different" className="py-16 sm:py-24 relative bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 border border-espresso/5 shadow-sm relative overflow-hidden bg-white/70">
          {/* Section Heading */}
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10 relative z-10">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                The Experience
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
              Elevated Artistry,{" "}
              <span className="italic font-serif text-gold-600">Thoughtful Care</span>
            </h2>

            <p className="text-sm text-espresso/70 leading-relaxed font-light">
              Crafting calm, radiant mornings for brides and clients across Addis Ababa.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-espresso/5 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-espresso">
                      {diff.title}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-gold-700 block mt-0.5">
                      {diff.tagline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
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
