import React, { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Instagram, Mail, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppOrderLink } from "@/data/site";

export const Footer: React.FC = () => {
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setInquiryEmail("");
      setSubmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(href, { offset: -60, duration: 1.1 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#1E1714] text-[#FBF8F3] pt-20 sm:pt-28 pb-12 border-t border-[#352B26]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Banner & Newsletter Inquiry */}
        <div className="pb-16 mb-16 border-b border-[#352B26]/60 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C58A4B] block mb-3">
              Join Our Coffee Circle
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FBF8F3] leading-[1.08] text-balance">
              Stories, slow roasts &amp; seasonal extractions.
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-[#EDE6DB]/80 max-w-lg leading-relaxed">
              Subscribe for private cupping invitations, seasonal drink drops, and thoughtful morning notes from our baristas.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="flex items-center rounded-full bg-[#352B26]/60 border border-[#EDE6DB]/20 p-1.5 focus-within:border-[#C58A4B] transition-colors"
            >
              <input
                type="email"
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email subscription"
                className="w-full bg-transparent px-4 py-2.5 text-xs sm:text-sm font-sans text-[#FBF8F3] placeholder-[#EDE6DB]/50 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#FBF8F3] text-[#1E1714] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#C58A4B] hover:text-[#1E1714] transition-colors flex-shrink-0 flex items-center gap-1.5"
              >
                {submitted ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1E1714]" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Join</span>
                )}
              </button>
            </form>
            <p className="mt-2.5 text-[11px] font-sans text-[#EDE6DB]/60 pl-4">
              Zero spam. Only warm dispatches &amp; café updates.
            </p>
          </div>
        </div>

        {/* 4-Column Editorial Ledger Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#352B26]/60 text-xs font-sans">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-editorial text-3xl text-[#FBF8F3] block leading-none">
              Sip &amp; Brew
            </span>
            <p className="text-sm font-sans text-[#EDE6DB]/80 leading-relaxed max-w-sm">
              A mindful specialty coffee bar and slow-immersion roastery in Nagpur. Dedicated to unhurried mornings, tactile ceramics, and genuine conversations.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[#C58A4B] font-medium tracking-wider text-[11px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
              <span>Est. 2024 · Nagpur, India</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C58A4B] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-[#EDE6DB]/80">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleLinkClick(e, "#hero")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleLinkClick(e, "#story")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  Our Manifesto
                </a>
              </li>
              <li>
                <a
                  href="#signatures"
                  onClick={(e) => handleLinkClick(e, "#signatures")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  Signature Creations
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, "#menu")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  Complete Menu (35)
                </a>
              </li>
              <li>
                <a
                  href="#atmosphere"
                  onClick={(e) => handleLinkClick(e, "#atmosphere")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  The Atmosphere
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  onClick={(e) => handleLinkClick(e, "#visit")}
                  className="hover:text-[#FBF8F3] transition-colors"
                >
                  Location &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Service */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C58A4B] block mb-4">
              Hours &amp; Service
            </span>
            <div className="space-y-2 text-[#EDE6DB]/80">
              <p className="text-sm font-semibold text-[#FBF8F3]">
                Open Daily / Monday – Sunday
              </p>
              <p className="text-sm font-mono text-[#C58A4B]">
                10:00 AM – 11:30 PM
              </p>
              <p className="text-xs text-[#EDE6DB]/60 pt-2 leading-relaxed">
                Fresh espresso pulls, slow cold brews, and artisan takeaway cups served all day.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C58A4B] block mb-4">
              Connect
            </span>
            <div className="space-y-2.5 text-[#EDE6DB]/80">
              <a
                href="tel:+917972070329"
                className="hover:text-[#FBF8F3] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C58A4B]" />
                <span>+91 79 7207 0329</span>
              </a>

              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FBF8F3] transition-colors flex items-center gap-2"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#4E5D46] inline-block flex-shrink-0" />
                <span>WhatsApp Ordering</span>
                <ArrowUpRight className="w-3 h-3 text-[#C58A4B]" />
              </a>

              <a
                href="mailto:sipandbrew@outlook.com"
                className="hover:text-[#FBF8F3] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#C58A4B]" />
                <span>sipandbrew@outlook.com</span>
              </a>

              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FBF8F3] transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C58A4B]" />
                <span>@sipandbrewcafee</span>
                <ArrowUpRight className="w-3 h-3 text-[#C58A4B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#EDE6DB]/60">
          <p>© {new Date().getFullYear()} Sip &amp; Brew Cafe. All rights reserved. Nagpur, Maharashtra.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-wider text-[#C58A4B]">
              Good Coffee. Great Conversations.
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[#EDE6DB]/20 hover:border-[#FBF8F3] hover:text-[#FBF8F3] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
