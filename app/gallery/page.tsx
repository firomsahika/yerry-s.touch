"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Camera,
  Crown,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "bridal" | "editorial" | "celebration" | "masterclass";
  categoryLabel: string;
  tag: string;
  sub: string;
  archiveCode: string;
  frame?: "arch" | "circle" | "capsule" | "letterbox" | "standard";
}

const allGalleryImages: GalleryImage[] = [
  {
    id: "img-1",
    src: "/images/first-bridal.jpg",
    alt: "Magnificent Ethiopian bride in handcrafted gold crown and royal Habesha Kemis",
    title: "The Imperial Empress Bride",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Melse Crowning • Skylight Hotel",
    sub: "18-Hour Tear-Proof Hydration Shield",
    archiveCode: "Arch Archive #01",
    frame: "arch",
  },
  {
    id: "img-2",
    src: "/images/yerry.jpg",
    alt: "Yeron Habtamu at beauty studio counter with roses and celebration cake",
    title: "Yeron Habtamu at Yerry's Touch",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Studio Founder & Lead Artist",
    sub: "Welcoming bridal muses to the Gullele Salon Suite",
    archiveCode: "Studio Archive #02",
    frame: "standard",
  },
  {
    id: "img-3",
    src: "/images/bridal-1.jpg",
    alt: "Extreme close up portrait of luxury bridal eye and lip artistry",
    title: "Precision Lip & Velvet Brow Craft",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Macro Pigment Study",
    sub: "Multi-dimensional undertone matching for heirloom photography",
    archiveCode: "Micro Study #03",
    frame: "circle",
  },
  {
    id: "img-4",
    src: "/images/yery.jpg",
    alt: "Yeron Habtamu speaking passionately on floral podium in traditional dress",
    title: "Bridal Masterclass Symposium",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Industry Keynote & Mentorship",
    sub: "Mentoring next-generation East African luxury makeup artists",
    archiveCode: "Keynote Archive #04",
    frame: "standard",
  },
  {
    id: "img-5",
    src: "/images/Screenshot_20261022_230822_Instagram.jpg",
    alt: "Editorial model with radiant bronze glowing complexion and winged liner",
    title: "The Alabaster Glow Concept",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Haute Runway Glow",
    sub: "Featured in Addis Fashion Lookbook",
    archiveCode: "Capsule Archive #05",
    frame: "capsule",
  },
  {
    id: "img-6",
    src: "/images/together.jpg",
    alt: "Joyful luxury Ethiopian bridal entourage celebration with bride and bridesmaids",
    title: "The Grand Melse Bridal Party",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Full Bridal Entourage Suite",
    sub: "Comprehensive 8-person VIP on-location beauty concierge",
    archiveCode: "Letterbox Archive #06",
    frame: "letterbox",
  },
  {
    id: "img-7",
    src: "/images/bridal-2.jpg",
    alt: "Modern wedding reception bride with dewy glass skin and nude lip",
    title: "Sheraton Addis Evening Bride",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Reception Glam",
    sub: "Luminous glass skin finish under ballroom chandeliers",
    archiveCode: "Reception Archive #07",
    frame: "standard",
  },
  {
    id: "img-8",
    src: "/images/Screenshot_20261022_233013_TikTok_Lite.jpg",
    alt: "Traditional Ethiopian bridal crowning and wedding ceremony",
    title: "Regal Habesha Heritage Artistry",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Crowning Ceremony",
    sub: "Coordinating gold jewelry with royal Habesha kemis patterns",
    archiveCode: "Heritage Archive #08",
    frame: "standard",
  },
  {
    id: "img-9",
    src: "/images/Screenshot_20261022_232850_TikTok_Lite.jpg",
    alt: "Model skin preparation and contouring demonstration in studio",
    title: "Melanin Undertone Correction Study",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Studio Intensive Demo",
    sub: "Live model masterclass demonstration in Gullele suite",
    archiveCode: "Academy Archive #09",
    frame: "standard",
  },
  {
    id: "img-10",
    src: "/images/Screenshot_20261022_232843_TikTok_Lite.jpg",
    alt: "Smiling university graduate with radiant celebration glam",
    title: "Commencement Day Glow",
    category: "celebration",
    categoryLabel: "Milestone & Graduation",
    tag: "Academic Commencement",
    sub: "Cap and gown friendly longevity with fluttery lash mapping",
    archiveCode: "Celebration Archive #10",
    frame: "standard",
  },
  {
    id: "img-11",
    src: "/images/Screenshot_20261022_230532_Instagram.jpg",
    alt: "Radiant bride adorned in traditional Ethiopian bridal fabrics",
    title: "Royal Melse Gold Radiance",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Traditional Elegance",
    sub: "Golden accents paired with velvet terracotta lips",
    archiveCode: "Melse Archive #11",
    frame: "standard",
  },
  {
    id: "img-12",
    src: "/images/Screenshot_20261022_230526_Instagram.jpg",
    alt: "Golden hour bridal glam with natural lighting",
    title: "Golden Hour Bride",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Daylight Ceremony",
    sub: "Warm sunlight highlights and sculpted brow definition",
    archiveCode: "Bridal Archive #12",
    frame: "standard",
  },
  {
    id: "img-13",
    src: "/images/Screenshot_20261022_230843_Instagram.jpg",
    alt: "High-fashion camera ready matte finish",
    title: "Studio Flash Camera Sculpt",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Anti-Glare 4K",
    sub: "Sculpted cheekbone geometry and velvet skin",
    archiveCode: "Editorial Archive #13",
    frame: "standard",
  },
  {
    id: "img-14",
    src: "/images/Screenshot_20261022_230722_Instagram.jpg",
    alt: "Traditional Ethiopian Crowning beauty look",
    title: "Empress Crowning Artistry",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Heritage Crowning",
    sub: "Calibrated for traditional headpieces and veil styling",
    archiveCode: "Crowning Archive #14",
    frame: "standard",
  },
  {
    id: "img-15",
    src: "/images/Screenshot_20261022_232837_TikTok_Lite.jpg",
    alt: "Celebration glam for university graduate",
    title: "Milestone Celebration Glow",
    category: "celebration",
    categoryLabel: "Milestone & Graduation",
    tag: "Graduation Banquet",
    sub: "Fresh peach blush with satin neutral lips",
    archiveCode: "Milestone Archive #15",
    frame: "standard",
  },
  {
    id: "img-16",
    src: "/images/Screenshot_20261022_233019_TikTok_Lite.jpg",
    alt: "Traditional wedding morning bride",
    title: "Heirloom Bridal Poise",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Wedding Morning",
    sub: "16-hour sweat-and-tear proof complexion design",
    archiveCode: "Heirloom Archive #16",
    frame: "standard",
  },
  {
    id: "img-17",
    src: "/images/Screenshot_20261022_233251_TikTok_Lite.jpg",
    alt: "Masterclass graduation ceremony with custom celebration cake and certificates",
    title: "Academy Graduation Showcase",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Certification Milestone",
    sub: "Yeron Habtamu celebrating with accredited academy graduates",
    archiveCode: "Graduation Archive #17",
    frame: "standard",
  },
  {
    id: "img-18",
    src: "/images/Screenshot_20261022_233039_TikTok_Lite.jpg",
    alt: "Reception glam with sculpted eye contour",
    title: "Nocturne Evening Reception",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Evening Gala",
    sub: "Sophisticated contour with soft metallic highlights",
    archiveCode: "Nocturne Archive #18",
    frame: "standard",
  },
  {
    id: "img-19",
    src: "/images/Screenshot_20261022_233145_TikTok_Lite.jpg",
    alt: "Birthday and milestone celebration look",
    title: "Anniversary & Gala Glow",
    category: "celebration",
    categoryLabel: "Milestone & Graduation",
    tag: "Anniversary Banquet",
    sub: "Dewy skin tuning with weightless 3D lash mapping",
    archiveCode: "Gala Archive #19",
    frame: "standard",
  },
  {
    id: "img-20",
    src: "/images/Screenshot_20261022_233024_TikTok_Lite.jpg",
    alt: "Studio glam suite styling moments",
    title: "Gullele Suite Preparation",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Studio Moments",
    sub: "Serene client preparation inside our private Gullele haven",
    archiveCode: "Suite Archive #20",
    frame: "standard",
  },
  {
    id: "img-21",
    src: "/images/Screenshot_20261022_231433_TikTok_Lite.jpg",
    alt: "Live demonstration of skin hydration prep",
    title: "Dermal Prep Masterclass",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Academy Intensive",
    sub: "Techniques for lymphatic drainage and longwear primers",
    archiveCode: "Technique Archive #21",
    frame: "standard",
  },
  {
    id: "img-22",
    src: "/images/Screenshot_20261022_230545_Instagram.jpg",
    alt: "Sculpted cheekbone geometry on high-fashion model",
    title: "Couture Bone Architecture",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Editorial Flash",
    sub: "Anti-flashback formulation for camera strobes",
    archiveCode: "Flash Archive #22",
    frame: "standard",
  },
  {
    id: "img-23",
    src: "/images/Screenshot_20261022_231734_TikTok_Lite.jpg",
    alt: "Live client transformation in studio",
    title: "Complexion Transformation",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Studio Transformation",
    sub: "Step-by-step beauty refinement with certified guidance",
    archiveCode: "Live Archive #23",
    frame: "standard",
  },
  {
    id: "img-24",
    src: "/images/Screenshot_20261022_233114_TikTok_Lite.jpg",
    alt: "Celebration beauty with natural fluttery lashes",
    title: "Soft Radiant Glam",
    category: "celebration",
    categoryLabel: "Milestone & Graduation",
    tag: "Special Event",
    sub: "Effortless, luminous bridal and celebratory beauty",
    archiveCode: "Radiant Archive #24",
    frame: "standard",
  },
  {
    id: "img-25",
    src: "/images/Screenshot_20261022_230559_Instagram.jpg",
    alt: "Classic bridal eye and brow definition",
    title: "Timeless Brow & Liner Craft",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Bridal Details",
    sub: "Micro-winged liner with seamlessly blended eyeshadows",
    archiveCode: "Detail Archive #25",
    frame: "standard",
  },
  {
    id: "img-26",
    src: "/images/Screenshot_20261022_232911_TikTok_Lite.jpg",
    alt: "Traditional Ethiopian wedding crowned bride",
    title: "Imperial Crowning Harmony",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Heritage Crowning",
    sub: "Regal crown integration with bronze Habesha highlights",
    archiveCode: "Imperial Archive #26",
    frame: "standard",
  },
  {
    id: "img-27",
    src: "/images/Screenshot_20261022_230712_Instagram.jpg",
    alt: "Melanin undertone precision portrait",
    title: "Melanin Depth Study",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Color Theory",
    sub: "Custom pigment balance celebrating rich African skin",
    archiveCode: "Theory Archive #27",
    frame: "standard",
  },
  {
    id: "img-28",
    src: "/images/Screenshot_20261022_232919_TikTok_Lite.jpg",
    alt: "Commencement day graduation beauty portrait",
    title: "Honorary Graduate Glam",
    category: "celebration",
    categoryLabel: "Milestone & Graduation",
    tag: "Graduation Look",
    sub: "High-definition velvet finish for graduation photos",
    archiveCode: "Graduate Archive #28",
    frame: "standard",
  },
  {
    id: "img-29",
    src: "/images/Screenshot_20261022_230734_Instagram.jpg",
    alt: "Evening reception bride portrait",
    title: "Starlight Banquet Bridal",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Evening Reception",
    sub: "Glowing cheekbones with rich chocolate-berry lips",
    archiveCode: "Banquet Archive #29",
    frame: "standard",
  },
  {
    id: "img-30",
    src: "/images/Screenshot_20261022_232936_TikTok_Lite.jpg",
    alt: "Bridal morning prep in studio",
    title: "Bridal Morning Radiance",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Morning Suite",
    sub: "Velvet hydration priming and flawless finish",
    archiveCode: "Morning Archive #30",
    frame: "standard",
  },
  {
    id: "img-31",
    src: "/images/Screenshot_20261022_230609_Instagram.jpg",
    alt: "Lip framing and contour precision",
    title: "Sculpted Lip Architecture",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Lip Artistry",
    sub: "Ombre nude lip mapping with gold gloss accents",
    archiveCode: "Lip Archive #31",
    frame: "standard",
  },
  {
    id: "img-32",
    src: "/images/Screenshot_20261022_232902_TikTok_Lite.jpg",
    alt: "3D lash architecture and winged eyeliner",
    title: "Lash Architecture & Definition",
    category: "editorial",
    categoryLabel: "High-Fashion Editorial",
    tag: "Lash Mapping",
    sub: "Custom 3D mink mapping tailored to almond eye geometry",
    archiveCode: "Lash Archive #32",
    frame: "standard",
  },
  {
    id: "img-33",
    src: "/images/Screenshot_20261022_233007_TikTok_Lite.jpg",
    alt: "Behind the scenes in the makeup studio",
    title: "Studio Behind-the-Scenes",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "BTS Atmosphere",
    sub: "The calm artistry sanctuary in Gullele, Addis Ababa",
    archiveCode: "BTS Archive #33",
    frame: "standard",
  },
  {
    id: "img-34",
    src: "/images/yery-1.jpg",
    alt: "Portrait of Yeron Habtamu in studio",
    title: "Lead Artist Portrait",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Artist Profile",
    sub: "Yeron Habtamu, Certified MUA & Creative Director",
    archiveCode: "Profile Archive #34",
    frame: "standard",
  },
  {
    id: "img-35",
    src: "/images/yery-2.jpg",
    alt: "Studio portrait of Yeron preparing palettes",
    title: "Master Artist in Element",
    category: "masterclass",
    categoryLabel: "Studio & Masterclass",
    tag: "Artisan Craft",
    sub: "Sterilizing luxury brush kits for bespoke bridal parties",
    archiveCode: "Craft Archive #35",
    frame: "standard",
  },
  {
    id: "img-36",
    src: "/images/yer-3.jpg",
    alt: "Ceremonial bridal crowning beauty portrait",
    title: "Traditional Crowning Grace",
    category: "bridal",
    categoryLabel: "Royal Bridal & Melse",
    tag: "Royal Crowning",
    sub: "Honoring ancient Ethiopian royal wedding heritage",
    archiveCode: "Grace Archive #36",
    frame: "standard",
  },
];

// Split all images into two marquee rows (18 each) for infinite scrolling
const marqueeRow1 = allGalleryImages.slice(0, 18);
const marqueeRow2 = allGalleryImages.slice(18, 36);

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const filteredGridImages =
    activeFilter === "all"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.category === activeFilter);

  // Navigate lightbox across the full list
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = allGalleryImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % allGalleryImages.length;
    setSelectedImage(allGalleryImages[nextIndex]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = allGalleryImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
    setSelectedImage(allGalleryImages[prevIndex]);
  };

  return (
    <main className="min-h-screen bg-ivory text-espresso flex flex-col relative selection:bg-gold-200 selection:text-espresso bg-fluted-texture">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* ================= 1. HERO HEADER ================= */}
      <section className="relative pt-24 pb-10 lg:pt-32 lg:pb-12 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-gold/15 via-gold/5 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-gold/30 text-espresso mb-3 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-700">
              Gullele Luxury Salon Suite • Addis Ababa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight max-w-3xl mx-auto mb-3"
          >
            The Living Canvas &amp;{" "}
            <span className="gold-foil-text italic">Haute Archives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-espresso/75 max-w-xl mx-auto mb-6 leading-relaxed font-light"
          >
            A rich visual tapestry of Ethiopian royal bridal traditions, high-fashion editorial glow, and studio masterclasses captured across 36+ documented looks.
          </motion.p>

          {/* Metric Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
          >
            <div className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-gold/30 shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[10px] tracking-wider text-espresso uppercase font-semibold">
                1,200+ Documented Looks
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-gold/30 shadow-sm flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[10px] tracking-wider text-espresso uppercase font-semibold">
                4K Ultra-Definition Skin Chemistry
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-gold/30 shadow-sm flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[10px] tracking-wider text-espresso uppercase font-semibold">
                Bespoke Ethiopian Bridal &amp; Melse
              </span>
            </div>
          </motion.div>

          {/* Interactive Category Filter Pills Aligned with Stitch Lookbook */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 max-w-4xl mx-auto hide-scrollbar"
          >
            {[
              { key: "all", label: "All Looks (36)" },
              { key: "bridal", label: "Royal Bridal & Melse (14)" },
              { key: "editorial", label: "Editorial & 4K (8)" },
              { key: "celebration", label: "Milestone Glow (6)" },
              { key: "masterclass", label: "Studio & Academy (8)" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeFilter === tab.key
                    ? "gold-gradient-bg text-espresso shadow-gold font-bold scale-105"
                    : "bg-white/90 hover:bg-gold/15 text-espresso/80 border border-gold/30 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 2. INFINITE SCROLLING MARQUEE SECTION ================= */}
      {/* (Row 1: Scrolling Infinitely to the Left | Row 2: Scrolling Infinitely to the Right) */}
      <section className="py-6 sm:py-8 overflow-hidden bg-espresso/5 border-y border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-gold-600" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-700">
              Infinite Visual Stream
            </span>
          </div>
          <span className="text-[10px] text-espresso/60 hidden sm:inline">
            ✦ Hover to pause • Click to inspect full look
          </span>
        </div>

        {/* ROW 1: Scrolling Continuously to the LEFT by itself */}
        <div className="overflow-hidden w-full mb-4">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {/* Double the list for seamless infinite loop */}
            {[...marqueeRow1, ...marqueeRow1].map((img, idx) => (
              <div
                key={`row1-${img.id}-${idx}`}
                onClick={() => setSelectedImage(img)}
                className="w-48 sm:w-60 h-64 sm:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-sm border border-gold/30 hover:border-gold transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet/85 via-velvet/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold-300 block mb-0.5">
                    {img.tag}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-ivory line-clamp-1">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Scrolling Continuously to the RIGHT by itself */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {/* Double the list for seamless infinite loop */}
            {[...marqueeRow2, ...marqueeRow2].map((img, idx) => (
              <div
                key={`row2-${img.id}-${idx}`}
                onClick={() => setSelectedImage(img)}
                className="w-48 sm:w-60 h-64 sm:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-sm border border-gold/30 hover:border-gold transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet/85 via-velvet/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold-300 block mb-0.5">
                    {img.tag}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-ivory line-clamp-1">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 3. CURATED ARCHITECTURAL LOOKBOOK PORTFOLIOS ================= */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Architectural Ornament Header Aligned with Stitch */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2.5 h-2.5 rotate-45 border border-gold/70 bg-ivory" />
          <span className="text-[11px] uppercase tracking-widest text-gold-700 font-bold">
            Curated Portfolios ({filteredGridImages.length} Documented Looks)
          </span>
          <div className="w-2.5 h-2.5 rotate-45 border border-gold/70 bg-ivory" />
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Fully Populated Responsive Grid - Zero Empty Gaps */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch"
        >
          <AnimatePresence>
            {filteredGridImages.map((item, index) => {
              const isArch = item.frame === "arch";
              const isCircle = item.frame === "circle";
              const isCapsule = item.frame === "capsule";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  className="group relative flex flex-col"
                  onClick={() => setSelectedImage(item)}
                >
                  <div
                    className={`relative flex-1 flex flex-col justify-between bg-white/95 p-3 border border-gold/30 hover:border-gold shadow-luxury transition-all duration-500 group-hover:-translate-y-1.5 cursor-pointer ${
                      isArch
                        ? "rounded-t-[80px] rounded-b-2xl"
                        : isCapsule
                        ? "rounded-[2.5rem]"
                        : "rounded-2xl"
                    }`}
                  >
                    {isCircle ? (
                      /* Circle Cameo Portrait with Animated Spinning Dashed Halo */
                      <div className="relative w-full aspect-[3/3.8] flex flex-col items-center justify-center my-1">
                        <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/60 animate-spin-slow" />
                          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden p-1 bg-white border border-gold shadow-gold">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              priority={index < 4}
                              loading={index < 4 ? "eager" : "lazy"}
                              className="rounded-full object-cover group-hover:scale-106 transition-transform duration-500"
                              sizes="180px"
                            />
                          </div>
                        </div>
                        <div className="mt-3 px-3 py-0.5 rounded-full bg-velvet text-ivory text-[9px] tracking-wider uppercase font-semibold shadow-md">
                          {item.tag}
                        </div>
                      </div>
                    ) : (
                      /* Standard / Arch / Capsule container */
                      <div
                        className={`overflow-hidden relative w-full aspect-[3/3.8] bg-espresso/5 ${
                          isArch
                            ? "rounded-t-[70px] rounded-b-xl"
                            : isCapsule
                            ? "rounded-[2rem]"
                            : "rounded-xl"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          priority={index < 4}
                          loading={index < 4 ? "eager" : "lazy"}
                          className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-velvet/85 via-velvet/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                        {/* Overlay metadata */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                          <div className="pr-2">
                            <span className="inline-block px-2 py-0.5 rounded-full bg-gold/90 text-espresso text-[8px] uppercase tracking-wider font-bold mb-1 shadow-sm">
                              {item.tag}
                            </span>
                            <h3 className="font-serif text-xs sm:text-sm font-bold text-ivory line-clamp-1">
                              {item.title}
                            </h3>
                            <p className="text-[9px] text-white/80 font-light line-clamp-1">
                              {item.sub}
                            </p>
                          </div>

                          <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-gold group-hover:text-espresso transition-colors flex-shrink-0">
                            <Maximize2 className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card Footer Bar */}
                    <div className="pt-2 px-1 text-center sm:text-left flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-gold-700 font-semibold">
                        {item.archiveCode}
                      </span>
                      <span className="text-[9px] text-espresso/60 font-medium">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Booking Consultation Card */}
        <div className="mt-14 text-center">
          <div className="glass-luxury-card max-w-xl mx-auto p-6 sm:p-8 rounded-2xl border border-gold/40 shadow-luxury space-y-3 bg-white/90">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso">
              Envision Your Bridal Transformation
            </h3>
            <p className="text-xs text-espresso/70 max-w-md mx-auto">
              Ready to craft your unforgettable bridal, traditional Melse, or celebration look? Reserve a private consultation with Yeron.
            </p>
            <div className="pt-2 flex justify-center gap-2.5">
              <button
                onClick={() => setBookingOpen(true)}
                className="px-5 py-2.5 rounded-full gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition-all animate-shimmer"
              >
                Reserve Your Date
              </button>
              <Link
                href="/"
                className="px-4 py-2.5 rounded-full bg-white border border-gold/40 text-espresso text-[11px] font-semibold uppercase tracking-wider hover:bg-gold/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. INTERACTIVE LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-velvet rounded-2xl border border-gold/40 overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[88vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-gold/40 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gold-300 border border-gold/40 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gold-300 border border-gold/40 transition-colors md:right-auto md:left-[55%]"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Large Image Preview */}
              <div className="relative w-full md:w-3/5 h-72 md:h-[500px] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              {/* Detail Sidebar */}
              <div className="w-full md:w-2/5 p-5 sm:p-6 flex flex-col justify-between bg-velvet text-white border-t md:border-t-0 md:border-l border-gold/20">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-300 text-[9px] font-bold uppercase tracking-wider border border-gold/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{selectedImage.categoryLabel}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                    {selectedImage.title}
                  </h3>

                  <p className="text-xs text-ivory/80 leading-relaxed font-light">
                    {selectedImage.sub}
                  </p>

                  <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] text-white/70">
                    <div className="flex justify-between">
                      <span className="text-gold-400 font-medium">Archive:</span>
                      <span>{selectedImage.archiveCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gold-400 font-medium">Artist:</span>
                      <span>Yeron Habtamu (Certified MUA)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gold-400 font-medium">Location:</span>
                      <span>Gullele, Addis Ababa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gold-400 font-medium">Technique:</span>
                      <span>16-Hour Complexion Longevity</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setBookingOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider shadow-gold"
                  >
                    Inquire About This Look
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Booking Drawer */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService="Ethiopian Bridal & Melse Package"
      />
    </main>
  );
}
