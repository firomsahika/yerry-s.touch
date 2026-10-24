"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
            <div className="grid grid-cols-12 gap-4 items-end">
              {/* Primary Image: Yeron Habtamu in Traditional Ceremonial Dress */}
              <div className="col-span-7 relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-espresso/5 aspect-[3/4]">
                  <Image
                    src="/images/yery.jpg"
                    alt="Certified MUA Yeron Habtamu in traditional Ethiopian ceremonial dress"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-medium tracking-widest text-gold-200 block">
                      Founder &amp; Creative Director
                    </span>
                    <p className="font-serif text-base font-semibold text-ivory">
                      Yeron Habtamu
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Image: Studio Celebration Moment */}
              <div className="col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-espresso/5 group">
                  <Image
                    src="/images/yerry.jpg"
                    alt="Yerry's Touch Luxury Studio Counter with Golden Wall Sign"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 35vw, 18vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                Our Story
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso leading-snug">
              Elevating Natural Grace with{" "}
              <span className="italic font-serif text-gold-600">Thoughtful Artistry</span>
            </h2>

            <div className="space-y-4 text-espresso/75 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Founded by certified makeup artist <strong className="text-espresso font-medium">Yeron Habtamu</strong>,{" "}
                <span className="font-serif italic text-espresso font-medium">Yerry&apos;s Touch</span> is devoted to honoring your natural features rather than masking them.
              </p>
              <p>
                From traditional Ethiopian wedding ceremonies (Melse and royal crowning) to red-carpet occasions across Addis Ababa, our craft brings together personalized skin preparation and harmonious color palettes that feel light, radiant, and enduring.
              </p>
            </div>

            {/* Founder Pull Quote */}
            <blockquote className="p-5 rounded-2xl bg-white/70 border-l-2 border-gold-400 shadow-sm space-y-2">
              <p className="font-serif text-sm sm:text-base italic text-espresso/85 leading-relaxed font-light">
                &ldquo;Every face possesses its own natural radiance. My role is to bring that beauty forward so you feel effortlessly confident and timelessly yourself.&rdquo;
              </p>
              <cite className="block text-[11px] uppercase tracking-widest font-semibold text-gold-700 not-italic">
                — Yeron Habtamu
              </cite>
            </blockquote>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-espresso hover:bg-gold-700 text-ivory text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Book a Consultation
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
