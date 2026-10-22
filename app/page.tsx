"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ServicesSection from "@/components/ServicesSection";
import Differentiators from "@/components/Differentiators";
import InteractiveGallery from "@/components/InteractiveGallery";
import TestimonialSection from "@/components/TestimonialSection";
import BookingAndLocation from "@/components/BookingAndLocation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Ethiopian Bridal & Melse Package");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-ivory text-espresso flex flex-col relative selection:bg-gold-200 selection:text-espresso">
      {/* Dynamic Glassmorphic Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Cinematic Hero with Video Background (Clean, Watermark-Free) */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* About Yeron Habtamu & Studio Story */}
      <AboutSection onOpenBooking={() => handleOpenBooking()} />

      {/* 4 Core Pillars: Makeup, Hair, Ilash, Nail & Beauty School */}
      <SpecialtiesSection onOpenBooking={(service) => handleOpenBooking(service)} />

      {/* Bespoke Bridal & Editorial Packages */}
      <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

      {/* The Yerry's Touch Standard: What Makes Us Different */}
      <Differentiators />

      {/* Curated Lookbook Gallery Teaser & Lightbox */}
      <InteractiveGallery />

      {/* Bridal Praise & Client Testimonials */}
      <TestimonialSection />

      {/* Studio Location & Instant Consultation Form */}
      <BookingAndLocation />

      {/* Luxury Footer */}
      <Footer />

      {/* Global Booking Modal Drawer */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </main>
  );
}
