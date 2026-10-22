"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronDown, MapPin, Star, Award, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-velvet text-white pt-20 pb-12 lg:pt-28 lg:pb-16"
    >
      {/* Background Video Layer: High Clarity, Minimized Cropping & Minimized Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/Gallery/yerry.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? "opacity-95" : "opacity-60"
          }`}
        >
          <source src="/Gallery/Yerry.mp4" type="video/mp4" />
          <source src="/videos/Yerry.mp4" type="video/mp4" />
        </video>

        {/* Minimized Luxury Gradient Overlay: Keeps Video Vibrant & Fully Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0F0C0B]/90 z-10" />

        {/* Subtle, soft champagne lighting accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-10" />

        {/* Audio Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 right-6 z-30 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-gold/40 text-gold-300 hover:text-white hover:bg-black/70 transition-all shadow-gold"
          title={isMuted ? "Unmute Studio Sound" : "Mute Sound"}
          aria-label="Toggle Sound"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Foreground Hero Content (Refined, smaller, elegant luxury scale) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Animated Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/40 shadow-sm mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider text-gold-200 uppercase">
            Certified Makeup Artistry • Gullele Studio
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold-400" />
          <span className="hidden sm:inline-block text-[10px] text-white/80">Addis Ababa</span>
        </motion.div>

        {/* Refined Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory max-w-3xl leading-[1.18]"
        >
          Nurturing Natural Beauty, Crafting{" "}
          <span className="gold-foil-text italic block sm:inline font-serif">
            Unforgettable Glamour
          </span>{" "}
          <span className="inline-block transform hover:rotate-12 transition-transform select-none text-xl sm:text-2xl">
            🦋
          </span>
        </motion.h1>

        {/* Subheadline with smaller, cleaner font size */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-4 text-xs sm:text-sm md:text-base text-ivory/90 max-w-xl font-light leading-relaxed"
        >
          Bespoke bridal, celebratory, and editorial artistry by certified professional MUA{" "}
          <strong className="text-white font-medium">Yeron Habtamu</strong> in Addis Ababa. Where royal Ethiopian poise meets modern pigment precision.
        </motion.p>

        {/* Dual Call To Actions (Compact & Sleek) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-full gold-gradient-bg text-espresso font-bold uppercase tracking-wider text-xs shadow-gold hover:shadow-gold-lg active:scale-95 transition-all duration-300 animate-shimmer flex items-center justify-center gap-2 group"
          >
            <span>Reserve Your Session</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <Link
            href="/gallery"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-gold/40 text-ivory font-semibold uppercase tracking-wider text-xs hover:border-gold transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <span>Explore Lookbook</span>
          </Link>
        </motion.div>

        {/* Floating Trust Badges (Compact, dense) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
        >
          <div className="glass-dark-card px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] text-ivory/90 border border-gold/30">
            <Star className="w-3 h-3 fill-gold-300 text-gold-300" />
            <span>
              <strong className="text-gold-300">★ 5.0 Star</strong> Rated Artistry
            </span>
          </div>

          <div className="glass-dark-card px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] text-ivory/90 border border-gold/30">
            <MapPin className="w-3 h-3 text-gold-300" />
            <span>Gullele • In front of Medhanealem School</span>
          </div>

          <div className="glass-dark-card px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] text-ivory/90 border border-gold/30">
            <Award className="w-3 h-3 text-gold-300" />
            <span>Certified Master MUA &amp; Educator</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 inline-flex flex-col items-center gap-1 text-ivory/60 hover:text-gold-300 transition-colors group cursor-pointer"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-gold-400 group-hover:text-gold-200" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
