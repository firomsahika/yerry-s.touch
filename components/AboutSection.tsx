"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const stats = [
    { value: "500+", label: "Radiant Brides", detail: "Addis Ababa & Destination Weddings" },
    { value: "100%", label: "Tailored Skin Prep", detail: "Lymphatic & Dermal Priming" },
    { value: "16+ Hrs", label: "Wear Longevity", detail: "Tear & Humidity Proof Complexion" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-ivory bg-fluted-texture">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Asymmetric Dual Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-end">
              {/* Primary Image: Yeron Habtamu in Traditional Ceremonial Dress */}
              <div className="col-span-7 relative group">
                <div className="relative rounded-2xl overflow-hidden border border-gold/40 shadow-luxury bg-espresso/5 aspect-[3/4]">
                  <Image
                    src="/Gallery/yery.jpg"
                    alt="Certified MUA Yeron Habtamu in traditional Ethiopian ceremonial dress"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold-300 block">
                      Founder &amp; Creative Director
                    </span>
                    <p className="font-serif text-base font-semibold text-ivory">
                      Yeron Habtamu
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/60 rounded-tl-xl pointer-events-none" />
              </div>

              {/* Secondary Image: Studio Celebration Moment */}
              <div className="col-span-5 space-y-3">
                <div className="relative rounded-xl overflow-hidden border border-gold/40 shadow-sm aspect-square bg-espresso/5 group">
                  <Image
                    src="/Gallery/yerry.jpg"
                    alt="Yerry's Touch Luxury Studio Counter with Golden Wall Sign"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 35vw, 18vw"
                  />
                </div>

                <div className="glass-luxury-card p-3 rounded-xl border border-gold/30 shadow-sm space-y-1">
                  <div className="flex items-center gap-1.5 text-gold-700">
                    <Award className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Certified Master
                    </span>
                  </div>
                  <p className="text-[10px] text-espresso/75 leading-tight">
                    Accredited luxury bridal &amp; high-glam artistry.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="absolute -bottom-4 right-1 sm:-right-2 glass-luxury-card px-3 py-2 rounded-xl shadow-luxury border border-gold/50 flex items-center gap-2.5 max-w-[210px]"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold-700 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-espresso block leading-tight">
                  VIP Gullele Suite
                </span>
                <span className="text-[9px] text-espresso/60 uppercase tracking-wider block">
                  Private &amp; Serene
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Narrative Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
                Artisan Biography
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso leading-snug">
              Where Ethiopian Heritage Meets{" "}
              <span className="gold-foil-text italic">Haute Couture Skin</span>
            </h2>

            <div className="space-y-3 text-espresso/80 text-xs sm:text-sm leading-relaxed">
              <p>
                Led by certified makeup artist <strong className="text-espresso font-semibold">Yeron Habtamu</strong>,{" "}
                <span className="font-serif italic text-gold-700 font-semibold">Yerry&apos;s Touch</span> was founded on a singular conviction: high-glamour beauty should honor and elevate your natural facial architecture, never disguise it.
              </p>
              <p>
                From traditional Ethiopian bridal ceremonies (Melse and royal crowning) to red-carpet galas at Addis Ababa&apos;s premier venues, Yeron blends color theory with bespoke skin preparation so your look stays velvety, luminous, and camera-ready throughout 16+ hours of celebration.
              </p>
            </div>

            {/* Founder Pull Quote */}
            <blockquote className="p-4 sm:p-5 rounded-xl glass-luxury-card border-l-3 border-gold shadow-sm space-y-2">
              <p className="font-serif text-xs sm:text-sm italic text-espresso/90 leading-relaxed">
                &ldquo;Every face possesses its own unique, divine radiance. My craft is simply guiding it into the spotlight so that when a bride glances in the mirror, she beholds her most transcendent self.&rdquo;
              </p>
              <cite className="block text-[10px] uppercase tracking-widest font-bold text-gold-700 not-italic">
                — Yeron Habtamu, Founder &amp; Master Artist
              </cite>
            </blockquote>

            {/* 3 Pillars Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/75 border border-gold/25 space-y-1">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-espresso">
                  Certified Master
                </h4>
                <p className="text-[10px] text-espresso/70 leading-normal">
                  Accredited in editorial, bridal, and high-definition artistry.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/75 border border-gold/25 space-y-1">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-espresso">
                  Luxury Pigments
                </h4>
                <p className="text-[10px] text-espresso/70 leading-normal">
                  Dior, MAC, Huda &amp; NARS calibrated for diverse undertones.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/75 border border-gold/25 space-y-1">
                <HeartHandshake className="w-4 h-4 text-gold-600" />
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-espresso">
                  Skin-First Ritual
                </h4>
                <p className="text-[10px] text-espresso/70 leading-normal">
                  Hydration &amp; lymphatic depuffing before pigment application.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition-all"
              >
                Schedule Private Consultation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 pt-8 border-t border-gold/25 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-700">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-espresso">
                {stat.label}
              </div>
              <div className="text-[11px] text-espresso/60 max-w-xs mx-auto">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
