"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Bridal" | "Melse & Traditional" | "Editorial" | "Studio Moments";
  description: string;
}

const previewGalleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/first-bridal.jpg",
    alt: "Radiant Ethiopian bride with golden bridal headpiece and veil",
    title: "Sheraton Addis Royal Bride",
    category: "Bridal",
    description: "Velvety natural matte skin with champagne gold shimmer and custom mink lashes.",
  },
  {
    id: "g2",
    src: "/images/yery.jpg",
    alt: "Yeron Habtamu in regal traditional Ethiopian dress at wedding celebration",
    title: "Heritage Melse Elegance",
    category: "Melse & Traditional",
    description: "Harmonizing ceremonial Habesha kemis patterns with radiant, warm-toned contours.",
  },
  {
    id: "g3",
    src: "/images/bridal-1.jpg",
    alt: "High definition bridal makeup with winged eyeliner and soft blush",
    title: "Skylight Luxury Bridal Glam",
    category: "Bridal",
    description: "16-hour sweat-proof complexion design with soft peach tones and sculpted brows.",
  },
  {
    id: "g4",
    src: "/images/yerry.jpg",
    alt: "Yerry's Touch reception counter with gold lettering and celebration flowers",
    title: "Creative Suite & Studio Counter",
    category: "Studio Moments",
    description: "The serene Gullele studio haven where bridal morning magic begins.",
  },
  {
    id: "g5",
    src: "/images/bridal-2.jpg",
    alt: "Bridal detail look with glossy nude lips and glowing skin",
    title: "Modern Reception Bride",
    category: "Bridal",
    description: "Glass skin finish with luminous highlights and tailored nude lips.",
  },
  {
    id: "g6",
    src: "/images/Screenshot_20261022_230822_Instagram.jpg",
    alt: "Editorial glam with defined eyes and warm bronze contour",
    title: "Golden Hour High-Fashion",
    category: "Editorial",
    description: "Anti-glare camera finish under natural sunlight and 4K studio strobes.",
  },
];

const categories = ["All", "Bridal", "Melse & Traditional", "Editorial", "Studio Moments"] as const;

export default function InteractiveGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? previewGalleryItems
      : previewGalleryItems.filter((item) => item.category === activeCategory);

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex > 0 ? selectedItemIndex - 1 : filteredItems.length - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex < filteredItems.length - 1 ? selectedItemIndex + 1 : 0
      );
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
              Selected Looks &amp; <span className="italic font-serif text-gold-600">Bridal Artistry</span>
            </h2>
            <p className="text-sm text-espresso/70 max-w-lg font-light leading-relaxed">
              Highlights of traditional Ethiopian wedding celebrations, Melse ceremonies, and editorial sessions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-espresso text-ivory shadow-sm"
                    : "bg-espresso/5 text-espresso/70 hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            ))}

            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gold-400 hover:bg-gold-300 text-espresso text-xs font-semibold uppercase tracking-wider transition-colors ml-1 shadow-sm"
            >
              <span>Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Gallery Grid (Smaller cards, compact layout) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedItemIndex(index)}
                className="group relative rounded-2xl overflow-hidden glass-luxury-card border border-gold/30 hover:border-gold shadow-luxury cursor-pointer aspect-[3/3.8] bg-espresso/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold uppercase tracking-wider text-ivory">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-gold/40 text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h3 className="font-serif text-base font-bold text-ivory leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Link to Dedicated Gallery Page */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso hover:bg-gold-700 text-ivory text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItemIndex(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-velvet rounded-2xl border border-gold/40 overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white border border-gold/40"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-gold-300 border border-gold/40"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-gold-300 border border-gold/40 md:right-auto md:left-[54%]"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="relative w-full md:w-3/5 h-64 md:h-[420px] bg-black">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              <div className="w-full md:w-2/5 p-5 flex flex-col justify-between bg-velvet text-white border-t md:border-t-0 md:border-l border-gold/20">
                <div className="space-y-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-gold-300 text-[9px] font-bold uppercase tracking-wider">
                    {currentItem.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs text-ivory/80 leading-relaxed font-light">
                    {currentItem.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/gallery"
                    className="w-full py-2 rounded-xl gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View in Full Gallery</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
