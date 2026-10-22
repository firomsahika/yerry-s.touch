"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Eye,
  GraduationCap,
  Crown,
  CheckCircle2,
  Calendar,
  BookOpen,
  ArrowRight,
  ShieldCheck,
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
    tagline: "Bridal, Melse & Red Carpet",
    icon: Sparkles,
    badge: "Signature Craft",
    description:
      "Haute bridal complexion design, traditional Habesha Melse crowning glam, and sculpted 4K editorial finishes tailored to every skin undertone.",
    offerings: [
      "Royal Ethiopian Wedding & Melse Glam",
      "Editorial & High-Fashion 4K Strobes",
      "Milestone, Birthday & Graduation Looks",
      "Pre-Ceremony Dermal Hydration Shield",
    ],
    duration: "1.5 – 3 Hours",
  },
  {
    id: "hair",
    title: "Hair Styling",
    tagline: "Bridal Updos & Traditional Braids",
    icon: Scissors,
    badge: "Couture Styling",
    description:
      "Architectural bridal styling, Hollywood waves, traditional Ethiopian crowning hair architectures, and secure veil & kaba setting.",
    offerings: [
      "Traditional Royal Crowning & Kaba Setting",
      "Sculpted Bridal Chignons & Romantic Updos",
      "Hollywood Glam Waves & Sleek Ponytails",
      "Traditional Habesha Braiding & Weaving",
    ],
    duration: "1 – 2.5 Hours",
  },
  {
    id: "ilash",
    title: "Ilash (Eyelash)",
    tagline: "Custom 3D Mink & Silk Mapping",
    icon: Eye,
    badge: "Weightless Volume",
    description:
      "Bespoke lash styling customized for each eye architecture. From fluttery natural extensions to opulent Russian 3D volume mapping.",
    offerings: [
      "3D Silk & Mink Individual Extensions",
      "Custom Eye-Shape Lash Mapping",
      "Weightless Volume & Hybrid Sets",
      "Keratin Lash Infusions & Tinting",
    ],
    duration: "1 – 2 Hours",
  },
  {
    id: "nail",
    title: "Nail Artistry",
    tagline: "Gel, Acrylic & Bridal Manicures",
    icon: NailPolishIcon,
    badge: "Artisanal Care",
    description:
      "Immaculate nail sculpture, Russian dry manicures, longwear gel overlays, and bespoke gold leaf bridal accents that photograph flawlessly.",
    offerings: [
      "Luxury Bridal Gel Extensions & Acrylics",
      "Champagne Gold Leaf & Chrome Accents",
      "Sterilized Russian Cuticle Care & Shape",
      "Longwear Chip-Resistant Gel Polish",
    ],
    duration: "45 Min – 1.5 Hours",
  },
];

// Beauty School & Academy Courses
const academyCourses = [
  {
    id: "academy-makeup",
    title: "Beauty & Makeup Masterclass",
    tagline: "Pro Bridal & Melanin Complexion",
    icon: Sparkles,
    badge: "Accredited Intensive",
    duration: "5 to 10 Days",
    description:
      "Comprehensive mastery of color theory, undertone neutralization for African complexions, 16-hr sweat-proof chemistry, and bridal business pacing.",
    syllabus: [
      "Melanin undertone & foundation formulation",
      "Cut-crease, smokey & traditional eyes",
      "Bridal emergency kits & live client timing",
      "Sterilization & hygiene certification",
    ],
  },
  {
    id: "academy-hair",
    title: "Hair Styling Academy",
    tagline: "Bridal Sculpting & Traditional Crown",
    icon: Scissors,
    badge: "Hands-on Workshop",
    duration: "3 to 7 Days",
    description:
      "Professional training in bridal updos, texture preparation, traditional Ethiopian crowning structures, veil mechanics, and heat longevity.",
    syllabus: [
      "Crown pin architecture & kaba balancing",
      "Bridal chignon & modern red-carpet waves",
      "Thermal styling & weather-proof hold",
      "Hairpiece integration & padding craft",
    ],
  },
  {
    id: "academy-ilash",
    title: "Ilash (Eyelash) Certification",
    tagline: "Classic, Hybrid & Russian Volume",
    icon: Eye,
    badge: "Certified Specialist",
    duration: "3 to 5 Days",
    description:
      "Master the delicate craft of individual lash extensions, glue polymer safety, eye anatomy mapping, and high-retention isolation.",
    syllabus: [
      "Sanitary eye isolation & glue chemistry",
      "Classic, hybrid & volume fan making",
      "Client eye morphology & styling charts",
      "Aftercare, refills & safe lash removals",
    ],
  },
  {
    id: "academy-nail",
    title: "Nail Artistry Certification",
    tagline: "Gel Sculpture & Salon Technique",
    icon: NailPolishIcon,
    badge: "Professional Diploma",
    duration: "4 to 7 Days",
    description:
      "Step into the high-demand world of professional nail tech. Learn apex sculpting, Russian e-file cuticle techniques, and luxury bridal nail art.",
    syllabus: [
      "Natural nail health & e-file preparation",
      "Acrylic extension & hard gel apex build",
      "Modern French, chrome & 3D nail art",
      "Salon sanitation & client booking system",
    ],
  },
];

export default function SpecialtiesSection({ onOpenBooking }: SpecialtiesSectionProps) {
  const [activeTab, setActiveTab] = useState<"salon" | "school">("salon");

  return (
    <section id="specialties" className="py-16 sm:py-24 relative bg-ivory bg-fluted-texture overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-700 text-[10px] font-bold uppercase tracking-widest">
            <Crown className="w-3 h-3" />
            Specialized Craft &amp; Education
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso">
            Studio Services &amp;{" "}
            <span className="gold-foil-text italic">Beauty School</span>
          </h2>

          <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed max-w-lg mx-auto">
            Explore our 4 core salon pillars—<strong className="text-espresso font-semibold">Makeup, Hair, Ilash, and Nail</strong>—and our accredited academy courses taught directly by Yeron Habtamu in Gullele.
          </p>

          {/* Interactive Dual-Mode Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-white/80 border border-gold/35 shadow-sm">
              <button
                onClick={() => setActiveTab("salon")}
                className={`px-4 sm:px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "salon"
                    ? "gold-gradient-bg text-espresso shadow-gold scale-102"
                    : "text-espresso/70 hover:text-espresso"
                }`}
              >
                Studio Salon Services (4)
              </button>

              <button
                onClick={() => setActiveTab("school")}
                className={`px-4 sm:px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === "school"
                    ? "gold-gradient-bg text-espresso shadow-gold scale-102"
                    : "text-espresso/70 hover:text-espresso"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Beauty School &amp; Academy (4)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs Animation */}
        <AnimatePresence mode="wait">
          {activeTab === "salon" ? (
            /* TAB 1: STUDIO SALON SERVICES (Makeup, Hair, Ilash, Nail) */
            <motion.div
              key="salon"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {salonServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-5 rounded-2xl glass-luxury-card border border-gold/30 hover:border-gold/60 shadow-luxury flex flex-col justify-between group transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 text-gold-700 flex items-center justify-center group-hover:bg-gold group-hover:text-espresso transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold/15 text-gold-800 border border-gold/30">
                            {service.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-gold-700 transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-gold-700 block mt-0.5">
                            {service.tagline}
                          </span>
                          <p className="text-[11px] text-espresso/75 mt-1.5 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-espresso/10 space-y-1.5">
                          {service.offerings.map((item, oIdx) => (
                            <div key={oIdx} className="flex items-start gap-1.5 text-[11px] text-espresso/80">
                              <CheckCircle2 className="w-3 h-3 text-gold-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-espresso/10 flex items-center justify-between">
                        <span className="text-[10px] text-espresso/60 font-medium">
                          Duration: {service.duration}
                        </span>
                        <button
                          onClick={() => onOpenBooking(service.title)}
                          className="px-3 py-1.5 rounded-lg gold-gradient-bg text-espresso text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm hover:shadow-gold transition-all"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* TAB 2: BEAUTY SCHOOL & ACADEMY (Makeup, Hair, Ilash, Nail) */
            <motion.div
              key="school"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Academy Credentials Micro Banner */}
              <div className="p-4 rounded-2xl gold-gradient-bg text-espresso shadow-gold flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-velvet text-gold-300 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wide">
                      Yerry&apos;s Touch Academy Certification
                    </h4>
                    <p className="text-[11px] font-medium opacity-90">
                      Accredited professional masterclasses with hands-on live model mentorship from Yeron Habtamu.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking("Professional MUA Masterclass (1-on-1)")}
                  className="px-4 py-2 rounded-xl bg-velvet text-ivory hover:text-gold-300 text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md flex-shrink-0"
                >
                  Enroll / Inquire Syllabus
                </button>
              </div>

              {/* 4 School Courses (Makeup, Hair, Ilash, Nail) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {academyCourses.map((course, index) => {
                  const Icon = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-5 rounded-2xl bg-white/95 border border-gold/35 hover:border-gold shadow-luxury flex flex-col justify-between group transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-velvet text-gold-300 flex items-center justify-center group-hover:bg-gold group-hover:text-espresso transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold/15 text-gold-800 border border-gold/30">
                            {course.duration}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-gold-700 transition-colors">
                            {course.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-gold-700 block mt-0.5">
                            {course.tagline}
                          </span>
                          <p className="text-[11px] text-espresso/75 mt-1.5 leading-relaxed">
                            {course.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-espresso/10 space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-espresso/60 block">
                            Key Curriculum:
                          </span>
                          {course.syllabus.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start gap-1.5 text-[11px] text-espresso/80">
                              <BookOpen className="w-3 h-3 text-gold-600 flex-shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-espresso/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-gold-600" />
                          Certified
                        </span>
                        <button
                          onClick={() => onOpenBooking(`Academy: ${course.title}`)}
                          className="px-3 py-1.5 rounded-lg gold-gradient-bg text-espresso text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm hover:shadow-gold transition-all"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3 h-3" />
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
