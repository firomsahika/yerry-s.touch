"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  venue: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Selamawit Mengistu",
    role: "Bride",
    venue: "Skylight Hotel Addis",
    quote:
      "Yeron was the calming light of my wedding morning! My makeup did not budge through 14 hours of crying, dancing, and hugs. Everyone kept complimenting how natural, royal, and velvety my skin looked.",
    rating: 5,
    initials: "SM",
  },
  {
    id: "t2",
    name: "Helen Tesfaye",
    role: "Bride",
    venue: "Sheraton Addis Reception & Melse",
    quote:
      "Her mastery of traditional Ethiopian Melse glam is truly unmatched in Addis. She knew exactly how to balance lip and cheek undertones with our gold Habesha kemis patterns. Yerry's Touch is the undisputed gold standard.",
    rating: 5,
    initials: "HT",
  },
  {
    id: "t3",
    name: "Bethelhem Alemu",
    role: "MUA & Masterclass Graduate",
    venue: "Yerry's Touch Studio Academy",
    quote:
      "I completed Yeron's 5-day professional intensive masterclass at her studio. Her knowledge on sanitary technique, undertone correction for Ethiopian skin, and bridal pacing elevated my confidence 100x.",
    rating: 5,
    initials: "BA",
  },
  {
    id: "t4",
    name: "Rahel Girma",
    role: "Bride",
    venue: "Haile Grand Addis Ababa",
    quote:
      "From the morning buna ritual in her peaceful Gullele studio to the final touch-up kit she handed me, every single detail felt like pure royalty. My husband was speechless when he saw me walk down the aisle.",
    rating: 5,
    initials: "RG",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
              Client Reflections
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
            Kind Words from <span className="italic font-serif text-gold-600">Our Brides</span>
          </h2>

          <p className="text-sm text-espresso/70 leading-relaxed font-light">
            Reflections and experiences from wedding mornings across Addis Ababa.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="rounded-3xl p-7 sm:p-10 bg-white border border-espresso/5 shadow-sm relative min-h-[250px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 relative z-10"
              >
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg text-espresso/90 italic leading-relaxed font-normal">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-espresso/5">
                  <div className="w-9 h-9 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center font-serif font-semibold text-gold-800 text-xs">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-espresso">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-espresso/60 font-light">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].venue}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between pt-5 mt-4 border-t border-espresso/10 relative z-10">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(dotIndex);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === dotIndex ? "w-6 bg-gold-600" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white hover:bg-gold/20 border border-gold/35 text-espresso transition-all active:scale-95 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white hover:bg-gold/20 border border-gold/35 text-espresso transition-all active:scale-95 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
