"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, MapPin, Sparkles, Send, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = "Ethiopian Bridal & Melse Package",
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: initialService,
    date: "",
    venue: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-ivory rounded-2xl sm:rounded-3xl border border-gold/40 shadow-2xl overflow-hidden z-10"
          >
            {/* Top gold bar */}
            <div className="h-1.5 w-full gold-gradient-bg" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-espresso/5 hover:bg-espresso/10 text-espresso transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-4 h-4 text-espresso" />
            </button>

            <div className="p-5 sm:p-7">
              {!submitted ? (
                <>
                  <div className="space-y-1 mb-5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-gold-700 text-[10px] font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      VIP Bridal &amp; Glam Concierge
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-espresso font-semibold pt-0.5">
                      Reserve Your Artistry Session
                    </h3>
                    <p className="text-xs text-espresso/70">
                      Gullele Studio • In front of Medhanealem School, Addis Ababa
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-gold-600 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Selamawit Tadesse"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                          Phone / Telegram *
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-gold-600 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="+251 9... or @username"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                          Service Type
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all cursor-pointer"
                        >
                          <option>Royal Ethiopian Bridal &amp; Melse</option>
                          <option>Modern Reception Bridal Only</option>
                          <option>High-Fashion &amp; Editorial Glam</option>
                          <option>Graduation &amp; Milestone Celebration</option>
                          <option>1-on-1 MUA Masterclass &amp; Skin Prep</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                          Event Date *
                        </label>
                        <div className="relative">
                          <Calendar className="w-3.5 h-3.5 text-gold-600 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                        Venue / Location in Addis Ababa
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="e.g. Skylight Hotel / Sheraton / Gullele Studio"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-espresso/80 mb-1">
                        Special Requests or Bridal Party Size
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell Yeron about your theme, skin concerns, or dress style..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-espresso/15 focus:border-gold focus:ring-1 focus:ring-gold text-xs text-espresso outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl gold-gradient-bg text-espresso font-semibold uppercase tracking-wider text-[11px] shadow-gold hover:shadow-gold-lg transition-all flex items-center justify-center gap-1.5 active:scale-[0.99]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Consultation Request
                    </button>

                    <p className="text-[10px] text-center text-espresso/60 pt-0.5">
                      ✦ Yeron Habtamu or our studio manager will respond within 4 hours.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 text-gold-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-espresso">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs text-espresso/80 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Yeron Habtamu has received your appointment inquiry for{" "}
                    <span className="text-gold-700 font-medium">{formData.service}</span>. We will contact you via{" "}
                    <span className="font-semibold">{formData.contact}</span> shortly.
                  </p>
                  <div className="pt-3 flex justify-center gap-2.5">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl gold-gradient-bg text-espresso text-[11px] font-semibold uppercase tracking-wider shadow-sm hover:shadow-gold transition-all"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
