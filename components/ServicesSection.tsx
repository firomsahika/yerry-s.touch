"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera, GraduationCap, Sparkles, Clock, Check, ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const services = [
  {
    id: "bridal",
    title: "Royal Bridal & Melse",
    category: "Most Requested",
    description:
      "Comprehensive bridal couture styling covering royal crowning ceremonies, traditional Melse rituals, and glamorous evening wedding receptions. 16-hour sweat-proof, tear-proof radiance.",
    features: [
      "Custom 3D silk lash mapping",
      "On-site bridal emergency touch-up kit",
      "Veil, kaba & royal jewelry setting",
      "Lymphatic drainage pre-makeup massage",
    ],
    duration: "2.5 – 3.5 Hours",
    price: "Custom Bridal Package",
    badgeColor: "bg-gold/20 text-gold-800 border-gold/40",
    icon: Heart,
    highlight: true,
  },
  {
    id: "editorial",
    title: "Editorial & High-Fashion",
    category: "Studio & 4K",
    description:
      "Precision-sculpted, anti-flashback complexion design curated specifically for studio strobes, daylight editorial shoots, commercial campaigns, and runway appearances.",
    features: [
      "Non-reflective 4K ultra-matte or glass skin",
      "Cheekbone, jawline & collarbone contouring",
      "Dynamic eye concept (graphic liner, foils)",
      "Rapid set-change color adjustments",
    ],
    duration: "1.5 – 2 Hours",
    price: "ETB 4,500+",
    badgeColor: "bg-espresso/10 text-espresso border-espresso/20",
    icon: Camera,
    highlight: false,
  },
  {
    id: "graduation",
    title: "Milestone & Graduation",
    category: "Celebration",
    description:
      "Fresh, luminous, high-definition makeup crafted for university graduations, engagement banquets, anniversary galas, and milestone birthdays.",
    features: [
      "Hydrating skin-tuning prep",
      "Sophisticated nude or bold berry lip",
      "Cap, gown & flash-friendly longevity",
      "Fluttery weightless lash application",
    ],
    duration: "1.5 Hours",
    price: "ETB 3,500+",
    badgeColor: "bg-rose-milk text-espresso border-gold/30",
    icon: GraduationCap,
    highlight: false,
  },
  {
    id: "masterclass",
    title: "1-on-1 MUA Masterclass",
    category: "Accredited",
    description:
      "Private hands-on masterclass inside the Gullele studio suite. Learn professional color theory for melanin undertones, brush sanitization, bridal pacing, and client business management.",
    features: [
      "Official Yerry's Touch Certificate",
      "Live model practice coached by Yeron",
      "Luxury product sourcing guidance",
      "Sanitation & sterile kit hygiene protocols",
    ],
    duration: "3 to 5 Days Intensive",
    price: "Curriculum Inquiry",
    badgeColor: "bg-gold-500 text-espresso font-bold border-gold-600",
    icon: Sparkles,
    highlight: false,
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-24 relative bg-[#F6F3EE] bg-fluted-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
              Bespoke Offerings
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso">
            Signature Artistry &amp; <span className="gold-foil-text italic">Bridal Packages</span>
          </h2>

          <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed">
            Every bespoke appointment includes customized skincare priming, luxury lash mapping, and high-performance setting techniques calibrated for Addis Ababa.
          </p>
        </div>

        {/* 4 Bento Services Grid (Compact cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative group border ${
                  service.highlight
                    ? "bg-white/95 border-gold shadow-gold-lg"
                    : "glass-luxury-card border-gold/30 hover:border-gold/60 shadow-luxury"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full gold-gradient-bg text-espresso text-[9px] font-bold uppercase tracking-widest shadow-sm">
                    Featured
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-700 group-hover:bg-gold group-hover:text-espresso transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${service.badgeColor}`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-espresso/75 mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2.5 border-t border-espresso/10 space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-espresso/80">
                        <Check className="w-3 h-3 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Price & CTA */}
                <div className="pt-4 mt-4 border-t border-espresso/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] text-espresso/60">
                      <Clock className="w-3 h-3 text-gold-600" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-[11px] font-serif font-bold text-gold-700">
                      {service.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 rounded-xl bg-espresso/5 group-hover:gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 border border-espresso/10 group-hover:border-gold/50"
                  >
                    <span>Inquire Availability</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
