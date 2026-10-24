"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Background Video Layer: Instant Priority Poster + Faststart Streamed Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Instant High-Priority LCP Poster Image: Eliminates any blank or delayed loading on deployed link */}
        <Image
          src="/images/yerry.jpg"
          alt="Yerry's Touch Luxury Makeup Studio"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0 pointer-events-none" : "opacity-90"
          }`}
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/yerry.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? "opacity-95" : "opacity-0"
          }`}
        >
          <source src="/videos/Yerry.mp4" type="video/mp4" />
          <source src="/Gallery/Yerry.mp4" type="video/mp4" />
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

      {/* Foreground Hero Content (Natural, serene, clean luxury) */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Subtle, elegant eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-[11px] tracking-[0.2em] uppercase text-ivory/90 mb-5 font-medium"
        >
          <span>Yerry&apos;s Touch</span>
          <span className="w-1 h-1 rounded-full bg-gold-300/60" />
          <span>Addis Ababa</span>
        </motion.div>

        {/* Clean, poetic headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ivory max-w-2xl leading-[1.18]"
        >
          Natural Beauty,{" "}
          <span className="italic font-serif text-gold-200">
            Timeless Elegance
          </span>
        </motion.h1>

        {/* Natural subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-5 text-sm sm:text-base text-ivory/80 max-w-lg font-light leading-relaxed"
        >
          Bespoke bridal, traditional Melse, and editorial makeup artistry by Yeron Habtamu.
        </motion.p>

        {/* Clean Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-espresso font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Appointment
          </button>

          <Link
            href="/gallery"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-ivory font-medium text-xs uppercase tracking-widest transition-all duration-300"
          >
            View Gallery
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 inline-flex flex-col items-center gap-1 text-ivory/50 hover:text-gold-200 transition-colors group cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
