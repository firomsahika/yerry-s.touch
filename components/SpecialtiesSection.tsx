"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Eye,
  GraduationCap,
  ArrowRight,
  Award,
} from "lucide-react";

interface SpecialtiesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

// Custom Luxury Nail Icon
function NailPolishIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3h6v4H9z" />
      <path d="M10 7v3" />
      <path d="M14 7v3" />
      <rect x="7" y="10" width="10" height="11" rx="3" />
      <path d="M10 14h4" />
    </svg>
  );
}

// Studio Salon Services
const salonServices = [
  {
    id: "makeup",
    title: "Makeup Artistry",
    tagline: "Bridal, Melse & Occasions",
    icon: Sparkles,
    description:
      "Radiant bridal complexion design, traditional Habesha Melse glam, and refined editorial finishes tailored to your unique skin tones.",
    offerings: [
      "Royal Bridal & Traditional Melse",
      "Editorial & Celebration Looks",
      "Skin Hydration & Long-Wear Finish",
    ],
    duration: "1.5 – 3 Hours",
  },
  {
    id: "hair",
    title: "Hair Styling",
    tagline: "Bridal Updos & Traditional Styles",
    icon: Scissors,
    description:
      "Elegant wedding hairstyles, romantic chignons, classic waves, and traditional Habesha hair styling with secure veil placement.",
    offerings: [
      "Bridal Updos & Romantic Waves",
      "Traditional Hair & Kaba Setting",
      "Veil & Accessory Placement",
    ],
    duration: "1 – 2.5 Hours",
  },
  {
    id: "ilash",
    title: "Eyelash Artistry",
    tagline: "Custom Extensions & Enhancements",
    icon: Eye,
    description:
      "Natural, weightless eyelash extensions and treatments designed to complement your eye shape with comfort and longevity.",
    offerings: [
      "Classic & Hybrid Extensions",
      "Eye-Shape Mapping & Styling",
      "Gentle Infusions & Tinting",
    ],
    duration: "1 – 2 Hours",
  },
  {
    id: "nail",
    title: "Nail Care & Artistry",
    tagline: "Gel, Acrylic & Bridal Manicures",
    icon: NailPolishIcon,
    description:
      "Meticulous nail care, gentle cuticle preparation, long-wear gel polish, and elegant bridal nail designs.",
    offerings: [
      "Bridal Gel & Acrylic Overlays",
      "Gentle Cuticle Care & Shaping",
      "Chip-Resistant Longwear Polish",
    ],
    duration: "45 Min – 1.5 Hours",
  },
];

// Beauty School & Academy Courses
const academyCourses = [
  {
    id: "academy-makeup",
    title: "Makeup Artistry Course",
    tagline: "Technique & Melanin Complexions",
    icon: Sparkles,
    duration: "5 to 10 Days",
    description:
      "Hands-on masterclass covering color theory, undertone matching for diverse African complexions, and long-wear bridal techniques.",
    syllabus: [
      "Color theory & foundation matching",
      "Bridal pacing & live model practice",
      "Sanitation & professional hygiene",
    ],
  },
  {
    id: "academy-hair",
    title: "Hair Styling Academy",
    tagline: "Bridal Updos & Traditional Styles",
    icon: Scissors,
    duration: "3 to 7 Days",
    description:
      "Practical instruction in bridal chignons, modern waves, traditional Ethiopian crowning structures, and secure veil placement.",
    syllabus: [
      "Bridal updos & wave techniques",
      "Traditional hair setting & kaba balance",
      "Hair prep & heat styling longevity",
    ],
  },
  {
    id: "academy-ilash",
    title: "Lash Extension Certification",
    tagline: "Classic, Hybrid & Volume Mapping",
    icon: Eye,
    duration: "3 to 5 Days",
    description:
      "Step-by-step guidance on gentle lash isolation, proper adhesive use, eye shape mapping, and aftercare.",
    syllabus: [
      "Safe isolation & adhesive safety",
      "Classic & volume fan techniques",
      "Client eye morphology & styling",
    ],
  },
  {
    id: "academy-nail",
    title: "Nail Artistry Course",
    tagline: "Gel Sculpture & Salon Fundamentals",
    icon: NailPolishIcon,
    duration: "4 to 7 Days",
    description:
      "Hands-on training in professional gel sculpting, nail prep, clean cuticle techniques, and bridal nail styling.",
    syllabus: [
      "Nail health & gentle prep",
      "Gel sculpting & apex structure",
      "Bridal French & natural nail art",
    ],
  },
];

export default function SpecialtiesSection({ onOpenBooking }: SpecialtiesSectionProps) {
  const [activeTab, setActiveTab] = useState<"salon" | "school">("salon");

  return (
    <section id="specialties" className="py-16 sm:py-24 relative bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
              Services &amp; Academy
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
            Artistry &amp; <span className="italic font-serif text-gold-600">Professional Training</span>
          </h2>

          <p className="text-sm text-espresso/70 leading-relaxed max-w-md mx-auto font-light">
            Bespoke studio appointments and hands-on academy courses taught by Yeron Habtamu.
          </p>

          {/* Interactive Switcher */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-espresso/5 border border-espresso/10">
              <button
                onClick={() => setActiveTab("salon")}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-200 ${
                  activeTab === "salon"
                    ? "bg-white text-espresso shadow-sm"
                    : "text-espresso/70 hover:text-espresso"
                }`}
              >
                Studio Services
              </button>

              <button
                onClick={() => setActiveTab("school")}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "school"
                    ? "bg-white text-espresso shadow-sm"
                    : "text-espresso/70 hover:text-espresso"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Beauty Academy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <AnimatePresence mode="wait">
          {activeTab === "salon" ? (
            /* TAB 1: STUDIO SERVICES */
            <motion.div
              key="salon"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {salonServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-6 rounded-2xl bg-white border border-espresso/5 shadow-sm flex flex-col justify-between group transition-all"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-bold text-espresso">
                          {service.title}
                        </h3>
                        <span className="text-[11px] font-medium text-gold-700 block mt-0.5">
                          {service.tagline}
                        </span>
                        <p className="text-xs text-espresso/70 mt-2 leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-espresso/5 space-y-1.5">
                        {service.offerings.map((item, oIdx) => (
                          <div key={oIdx} className="text-xs text-espresso/75 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-espresso/5 flex items-center justify-between">
                      <span className="text-[11px] text-espresso/60 font-light">
                        {service.duration}
                      </span>
                      <button
                        onClick={() => onOpenBooking(service.title)}
                        className="text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-espresso flex items-center gap-1 transition-colors"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* TAB 2: BEAUTY ACADEMY */
            <motion.div
              key="school"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Academy Overview Banner */}
              <div className="p-6 rounded-2xl bg-espresso text-ivory flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-300 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-medium">
                      Hands-On Professional Masterclasses
                    </h4>
                    <p className="text-xs text-ivory/70 font-light mt-0.5">
                      Intensive courses with live model practice and mentorship from Yeron Habtamu in Gullele.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking("Professional Masterclass Inquiry")}
                  className="px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-espresso text-xs font-semibold uppercase tracking-wider transition-colors flex-shrink-0"
                >
                  Inquire Curriculum
                </button>
              </div>

              {/* 4 School Courses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {academyCourses.map((course, index) => {
                  const Icon = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-6 rounded-2xl bg-white border border-espresso/5 shadow-sm flex flex-col justify-between group transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-medium text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full">
                            {course.duration}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-espresso">
                            {course.title}
                          </h3>
                          <span className="text-[11px] font-medium text-gold-700 block mt-0.5">
                            {course.tagline}
                          </span>
                          <p className="text-xs text-espresso/70 mt-2 leading-relaxed font-light">
                            {course.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-espresso/5 space-y-1.5">
                          {course.syllabus.map((topic, tIdx) => (
                            <div key={tIdx} className="text-xs text-espresso/75 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gold-500" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-espresso/5 flex items-center justify-between">
                        <span className="text-[11px] text-espresso/60 font-light">
                          Certification
                        </span>
                        <button
                          onClick={() => onOpenBooking(`Academy: ${course.title}`)}
                          className="text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-espresso flex items-center gap-1 transition-colors"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
