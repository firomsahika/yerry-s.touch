"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  Car,
  Shield,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";

export default function BookingAndLocation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Ethiopian Bridal & Melse Package",
    date: "",
    venue: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#F7F4EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                  Location &amp; Contact
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-espresso">
                Visit Our <span className="italic font-serif text-gold-600">Gullele Studio</span>
              </h2>
              <p className="text-sm text-espresso/70 leading-relaxed font-light">
                A serene space in Addis Ababa where you can relax and prepare for your special day.
              </p>
            </div>

            {/* Studio Address & Schedule Card */}
            <div className="p-6 rounded-2xl border border-espresso/5 shadow-sm space-y-4 bg-white">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">
                    Physical Studio Address
                  </h4>
                  <p className="text-xs text-espresso/75 mt-0.5 leading-relaxed">
                    Gullele Sub-City, In front of Medhanealem Secondary School, Addis Ababa, Ethiopia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-espresso/10">
                <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">
                    Opening Hours
                  </h4>
                  <p className="text-xs text-espresso/75 mt-0.5">
                    Monday – Sunday: 8:00 AM – 8:00 PM
                  </p>
                  <span className="inline-block text-[10px] font-semibold text-gold-700 mt-0.5">
                    ✦ VIP Private Sessions By Prior Appointment Only
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-espresso/10">
                <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">
                    Client Parking &amp; Escort
                  </h4>
                  <p className="text-xs text-espresso/75 mt-0.5">
                    Secure on-premises parking available with bridal party escort.
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Concierge Messaging Buttons */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-wider text-espresso/80 block">
                Instant Concierge Messaging
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-gold/35 hover:border-gold hover:bg-gold/10 text-espresso text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-gold-600" />
                  <span>Telegram Direct</span>
                </a>

                <a
                  href="https://instagram.com/yerys.touch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-gold/35 hover:border-gold hover:bg-gold/10 text-espresso text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-gold-600" />
                  <span>@yerys.touch</span>
                </a>
              </div>
            </div>

            {/* Navigation Guidance Card */}
            <div className="rounded-2xl overflow-hidden border border-gold/35 shadow-luxury relative bg-velvet p-5 text-white space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gold-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">
                    Directions &amp; Navigation
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] text-ivory">
                  Gullele Hub
                </span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed font-light">
                Conveniently located 10 minutes from Piazza and easily accessible via Ring Road. Landmark: facing Medhanealem Secondary School main gates.
              </p>
              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Gullele+Medhanealem+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gold-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl border border-espresso/5 shadow-sm bg-white relative">
              <div className="space-y-1 mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-espresso">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-espresso/70 font-light">
                  Tell us about your event vision. We will follow up promptly to confirm details.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+251 9... or @username"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                        Desired Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all cursor-pointer"
                      >
                        <option>Ethiopian Bridal &amp; Melse Package</option>
                        <option>Wedding Day Bride Only</option>
                        <option>High-Fashion / Editorial Shoot</option>
                        <option>Graduation / Celebration Glam</option>
                        <option>Professional MUA Masterclass (1-on-1)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                      Event Venue / Location in Addis Ababa
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Skylight Hotel / Gullele Studio"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-espresso/70 mb-1">
                      Notes or Special Requests
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share any details about your dress, skin, or timeline..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory/60 border border-espresso/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs text-espresso outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-espresso hover:bg-gold-700 text-ivory text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-espresso/60 text-[10px] pt-0.5">
                    <Shield className="w-3.5 h-3.5 text-gold-600" />
                    <span>Inquiries are handled with complete confidentiality and care.</span>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-espresso">
                    Consultation Request Confirmed
                  </h4>
                  <p className="text-xs text-espresso/80 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>! Yeron Habtamu and our concierge will contact you via <span className="font-semibold">{formData.contact}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl gold-gradient-bg text-espresso text-[10px] font-bold uppercase tracking-wider shadow-sm mt-2"
                  >
                    Send Another Request
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
