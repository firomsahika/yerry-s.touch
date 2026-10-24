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
    <section id="services" className="py-16 sm:py-24 relative bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
              Curated Packages
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
            Signature Artistry &amp; <span className="italic font-serif text-gold-600">Bridal Packages</span>
          </h2>

          <p className="text-sm text-espresso/70 leading-relaxed font-light">
            Every session includes personalized skincare prep and long-wear finishing calibrated for Addis Ababa celebrations.
          </p>
        </div>

        {/* 4 Clean Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl p-6 bg-white border border-espresso/5 shadow-sm flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] text-espresso/60 font-light flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {service.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-espresso">
                      {service.title}
                    </h3>
                    <p className="text-xs text-espresso/70 mt-1.5 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-espresso/5 space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-espresso/75">
                        <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-espresso/5 flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-gold-700">
                    {service.price}
                  </span>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold uppercase tracking-wider text-espresso hover:text-gold-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
