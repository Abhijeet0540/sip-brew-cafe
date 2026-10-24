import React, { useState } from "react";
import {
  Coffee,
  Instagram,
  ArrowUp,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Clock,
  ShieldCheck,
  Check,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(href, { offset: -20, duration: 1.1 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden text-[#FAF7F0] pt-24 sm:pt-36 pb-10 sm:pb-14">
      {/* ============================================================== */}
      {/* 1. WARM ROASTED ESPRESSO & GOLDEN SUNBEAMS BACKGROUND          */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-coffee-bg.jpg"
          alt="Warm roasted coffee beans with golden morning light"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        {/* Soft atmospheric gradient transitions from page cream into deep espresso */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE5] via-[#1B110A]/75 to-[#120A05]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1B110A]/35 to-[#120A05]/80 pointer-events-none" />

        {/* Floating Atmospheric Coffee Beans Showcase */}
        <div className="absolute top-20 left-4 sm:left-14 w-24 sm:w-36 md:w-44 opacity-30 pointer-events-none select-none z-[1] animate-float-slow filter drop-shadow-2xl">
          <img
            src="/images/roasted-coffee-beans-isolated.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform -rotate-12"
          />
        </div>
        <div className="absolute top-1/3 right-4 sm:right-16 w-28 sm:w-44 md:w-56 opacity-25 pointer-events-none select-none z-[1] animate-drift-slow filter drop-shadow-2xl">
          <img
            src="/images/coffee-ai-generated.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform rotate-12"
          />
        </div>
        <div className="absolute bottom-16 right-4 sm:right-28 w-28 sm:w-48 md:w-56 opacity-20 pointer-events-none select-none z-[1] animate-float-reverse filter drop-shadow-2xl">
          <img
            src="/images/roasted-coffee-beans-falling-aromatic-rich.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform rotate-45"
          />
        </div>

        {/* Panoramic Roasted Coffee Beans Base Fringe at Bottom of Footer */}
        <div className="absolute -bottom-6 left-0 right-0 w-full h-20 sm:h-28 opacity-35 pointer-events-none select-none z-[1] overflow-hidden">
          <img
            src="/images/coffee-beans-pattern-design.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom filter brightness-[0.8]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* 2. FLOATING NEWSLETTER CALL-TO-ACTION (CTA) SECTION            */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F0] tracking-tight leading-[1.12] text-balance drop-shadow-lg px-2">
            Join our coffee circle. Fresh updates, pure comfort
          </h2>

          {/* Dual Interactive Pill Controls */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 px-2">
            {/* Pill 1: E-mail Newsletter Subscription */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="relative flex items-center bg-[#FAF7F0] rounded-full pl-5 pr-2 py-2.5 shadow-2xl w-full max-w-xs sm:max-w-sm transition-all focus-within:ring-2 focus-within:ring-caramel-400"
            >
              <input
                type="email"
                placeholder={subscribed ? "Welcome to the circle!" : "E-mail"}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={subscribed}
                required
                className="bg-transparent text-[#251811] placeholder:text-[#80776C] text-sm focus:outline-none w-full pr-8 font-sans font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${subscribed
                  ? "bg-caramel-500 text-[#251811]"
                  : "bg-[#251811]/10 hover:bg-[#251811] text-[#251811] hover:text-[#FAF7F0]"
                  }`}
              >
                {subscribed ? (
                  <Check className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                )}
              </button>
            </form>

            {/* Pill 2: Contact Button */}
            <a
              href={`mailto:${SITE_CONFIG.contact.email}?subject=Hello%20Sip%20%26%20Brew&body=Hi%20team,%20I%20would%20like%20to%20connect...`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#251811]/85 hover:bg-[#251811] backdrop-blur-md border border-caramel-500/30 text-[#FAF7F0] hover:text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>CONTACT US</span>
              <span className="w-5 h-5 rounded-full bg-caramel-500/25 text-caramel-300 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </span>
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. CENTERPIECE PRODUCT CANISTER (RISING FROM BEHIND THE CARD) */}
        {/* ============================================================== */}
        <div className="relative flex justify-center -mb-12 sm:-mb-16 md:-mb-20 z-20 pointer-events-none select-none">
          <div className="relative w-52 h-60 sm:w-68 sm:h-76 md:w-80 md:h-88 rounded-t-[3rem] sm:rounded-t-[3.5rem] overflow-hidden drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]">
            <img
              src="/images/footer-sip-cup.jpg"
              alt="Sip & Brew Handcrafted Artisanal Coffee Canister"
              className="w-full h-full object-cover object-[center_65%] transform scale-110 filter contrast-[1.05] brightness-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. 3-COLUMN DEEP ESPRESSO CARD FOOTER                          */}
        {/* ============================================================== */}
        <div className="relative z-30 rounded-[2rem] sm:rounded-[2.5rem] bg-[#251811]/95 backdrop-blur-xl border border-caramel-500/20 shadow-[0_30px_90px_rgba(20,10,5,0.6)] px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-8 sm:pb-10">
          {/* Main Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#FAF7F0]/10">
            {/* Left Column: 3 Feature Badges */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-8 text-[#FAF7F0]/80">
                {/* Badge 1: Freshly Brewed */}
                <div className="flex flex-col items-center text-center gap-2 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0]/5 border border-caramel-500/20 flex items-center justify-center text-caramel-300 group-hover:scale-110 transition-transform">
                    <Coffee className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#FAF7F0]/80">
                    Freshly Brewed
                  </span>
                </div>

                {/* Badge 2: All-Day Café */}
                <div className="flex flex-col items-center text-center gap-2 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0]/5 border border-caramel-500/20 flex items-center justify-center text-caramel-300 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#FAF7F0]/80">
                    10am – 11:30pm
                  </span>
                </div>

                {/* Badge 3: Takeaway Ready */}
                <div className="flex flex-col items-center text-center gap-2 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0]/5 border border-caramel-500/20 flex items-center justify-center text-caramel-300 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#FAF7F0]/80">
                    Takeaway Ready
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <span className="font-editorial text-3xl font-medium tracking-tight block text-[#FAF7F0]">
                  Sip &amp; Brew
                </span>
                <p className="text-xs font-sans text-caramel-200/70 mt-1 max-w-xs leading-relaxed">
                  Coffee · Conversation · Comfort. A mindful haven for slow mornings and genuine moments.
                </p>
              </div>
            </div>

            {/* Column 1: PRODUCTS */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase font-sans font-semibold tracking-[0.2em] text-caramel-400 mb-5">
                PRODUCTS
              </h4>
              <ul className="space-y-2.5 text-sm font-sans">
                <li>
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "#menu")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Hot Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "#menu")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Iced Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "#menu")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Frappes &amp; Blended
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "#menu")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    18h Cold Brew
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "#menu")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Non-Coffee Cocoa
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: FEATURED */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase font-sans font-semibold tracking-[0.2em] text-caramel-400 mb-5">
                FEATURED
              </h4>
              <ul className="space-y-2.5 text-sm font-sans">
                <li>
                  <a
                    href="#featured"
                    onClick={(e) => scrollToSection(e, "#featured")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Cracked Chocolate
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    onClick={(e) => scrollToSection(e, "#featured")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Nutella Iced Latte
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    onClick={(e) => scrollToSection(e, "#featured")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Spanish Latte
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    onClick={(e) => scrollToSection(e, "#featured")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Pistachio Iced Latte
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    onClick={(e) => scrollToSection(e, "#featured")}
                    className="text-[#FAF7F0]/75 hover:text-caramel-300 transition-colors"
                  >
                    Mont Blanc
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: CONTACT US */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase font-sans font-semibold tracking-[0.2em] text-caramel-400 mb-5">
                CONTACT US
              </h4>
              <div className="space-y-2 text-sm font-sans text-[#FAF7F0]/80">
                <p className="tracking-wide">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                    className="hover:text-caramel-300 transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-caramel-300 transition-colors underline"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </p>
                <div className="pt-3">
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-caramel-400 hover:text-white transition-colors"
                  >
                    <span>DM on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Stacked Socials (Left), Physical Address (Center), Copyright (Right) */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF7F0]/60 font-sans gap-6">
            {/* Left: Vertical Divider & Social Icons */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block h-6 w-[1.5px] bg-caramel-500/30" />
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#FAF7F0]/5 hover:bg-caramel-500 hover:text-[#251811] text-[#FAF7F0]/80 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  aria-label="Email"
                  className="w-8 h-8 rounded-full bg-[#FAF7F0]/5 hover:bg-caramel-500 hover:text-[#251811] text-[#FAF7F0]/80 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="w-8 h-8 rounded-full bg-[#FAF7F0]/5 hover:bg-caramel-500 hover:text-[#251811] text-[#FAF7F0]/80 flex items-center justify-center transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Center: Physical Café Address */}
            <div className="text-center">
              <p className="text-[#FAF7F0]/70">
                {SITE_CONFIG.location.shopName} • {SITE_CONFIG.location.addressLine1}, {SITE_CONFIG.location.landmark}, {SITE_CONFIG.location.city}
              </p>
            </div>

            {/* Right: Copyright & Scroll to Top */}
            <div className="flex items-center gap-3">
              <span>&copy; {new Date().getFullYear()} — Copyright</span>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-8 h-8 rounded-full bg-caramel-500/20 hover:bg-caramel-500 hover:text-[#251811] text-caramel-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 focus:outline-none shadow-sm flex-shrink-0"
              >
                <ArrowUp className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
