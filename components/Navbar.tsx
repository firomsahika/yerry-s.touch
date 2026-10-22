"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#specialties" },
  { label: "Standard", href: "/#different" },
  { label: "Gallery", href: "/gallery" },
  { label: "Praise", href: "/#testimonials" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      if (pathname === "/") {
        const sections = ["about", "specialties", "services", "different", "testimonials", "contact"];
        const scrollPos = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(
              sections[i] === "services" ? "/#specialties" : `/#${sections[i]}`
            );
            return;
          }
        }
        if (window.scrollY < 180) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isGalleryPage = pathname === "/gallery";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || isGalleryPage
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(212,175,55,0.15)] border-b border-gold/20 py-2 sm:py-2.5"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo & Title (Clean, no 'Haute Bridal...' subtext) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Yerry's Touch Home"
          >
            <div
              className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled || isGalleryPage
                  ? "w-8 h-8 bg-gold/15 border border-gold/40 text-espresso shadow-sm"
                  : "w-8 sm:w-9 h-8 sm:h-9 bg-white/10 backdrop-blur-md border border-gold/40 text-white shadow-gold"
              } group-hover:scale-105 group-hover:border-gold`}
            >
              <span className="text-base sm:text-lg select-none">🦋</span>
            </div>
            <span
              className={`font-serif text-lg sm:text-xl font-bold tracking-tight block leading-none transition-colors duration-300 ${
                scrolled || isGalleryPage ? "text-espresso" : "text-white"
              }`}
            >
              Yerry&apos;s Touch
            </span>
          </Link>

          {/* Desktop Navigation Links (Refined smaller text, perfectly aligned) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/gallery" ? isGalleryPage : activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold transition-all duration-200 rounded-full ${
                    scrolled || isGalleryPage
                      ? isActive
                        ? "text-espresso font-bold"
                        : "text-espresso/70 hover:text-espresso"
                      : isActive
                      ? "text-white font-bold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gold/20 border border-gold/45 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Actions: Contact Button & Book Appointment Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Contact Button */}
            <Link
              href="/#contact"
              className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border ${
                scrolled || isGalleryPage
                  ? "border-espresso/20 text-espresso hover:border-gold hover:text-gold-800 hover:bg-gold/10"
                  : "border-white/30 text-white hover:border-gold hover:text-gold-200 hover:bg-white/10"
              }`}
            >
              Contact
            </Link>

            {/* Main Book CTA */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-wider shadow-gold hover:shadow-gold-lg active:scale-95 transition-all duration-300 animate-shimmer"
            >
              <Calendar className="w-3 h-3" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-1.5 rounded-lg transition-colors ${
                scrolled || isGalleryPage
                  ? "text-espresso hover:bg-espresso/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-velvet text-white p-5 shadow-2xl flex flex-col justify-between border-l border-gold/30"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🦋</span>
                    <span className="font-serif text-base font-bold text-white">
                      Yerry&apos;s Touch
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-6 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-gold-300 transition-colors"
                      >
                        <span>{item.label}</span>
                        <Sparkles className="w-3 h-3 text-gold-400 opacity-60" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom drawer CTA */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-gold/30 text-[11px] font-semibold uppercase tracking-widest flex items-center justify-center transition-colors"
                >
                  Contact
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-xl gold-gradient-bg text-espresso text-[11px] font-bold uppercase tracking-widest shadow-gold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Appointment Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
