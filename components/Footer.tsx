"use client";

import Link from "next/link";
import { Send, Phone, MapPin, Sparkles, ArrowUp } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-velvet text-ivory border-t border-gold/30 relative overflow-hidden">
      {/* Top hairline accent */}
      <div className="h-0.5 w-full gold-gradient-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-base group-hover:scale-105 transition-transform">
                🦋
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-ivory block leading-none">
                Yerry&apos;s Touch
              </span>
            </Link>

            <p className="text-xs text-ivory/70 max-w-sm font-light leading-relaxed">
              Bespoke bridal, celebratory, and editorial beauty studio led by certified master makeup artist Yeron Habtamu in Gullele, Addis Ababa.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[11px] text-gold-300">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Gullele, In front of Medhanealem School • Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-[11px] uppercase tracking-wider font-medium text-ivory/75">
              <li>
                <Link href="/#about" className="hover:text-gold-300 transition-colors">
                  Artisan Biography
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors">
                  Bridal Packages
                </Link>
              </li>
              <li>
                <Link href="/#different" className="hover:text-gold-300 transition-colors">
                  Standard
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-300 transition-colors">
                  Lookbook Archives
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-gold-300 transition-colors">
                  Bridal Praise
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold-300 transition-colors">
                  Contact &amp; Reserve
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Direct Concierge */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
              Direct Concierge &amp; Socials
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://instagram.com/yerys.touch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold">
                  <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span>@yerys.touch &amp; @yeron_habtamu</span>
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold">
                  <TikTokIcon className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span>TikTok @yerys.touch</span>
              </a>

              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ivory/80 hover:text-gold-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold">
                  <Send className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span>Telegram Concierge Direct</span>
              </a>

              <div className="flex items-center gap-2.5 text-ivory/80">
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span>+251 91 100 0000 / +251 92 200 0000</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full gold-gradient-bg text-espresso text-[10px] font-bold uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>Book Bridal Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory/50">
          <p>
            © 2026 Yerry&apos;s Touch by Yeron Habtamu. All Rights Reserved. Gullele, Addis Ababa.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
