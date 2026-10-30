import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppOrderLink } from "@/data/site";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Signatures", href: "#signatures" },
    { label: "Menu", href: "#menu" },
    { label: "Atmosphere", href: "#atmosphere" },
    { label: "Visit", href: "#visit" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");

    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(href, { offset: -60, duration: 1.1 });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      {/* 01. Slim Announcement Marquee Bar */}
      <div className="relative z-50 bg-[#1E1714] text-[#FBF8F3] text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase py-2 px-4 border-b border-[#352B26]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B] animate-pulse" />
            <span className="font-medium text-[#EDE6DB]">
              OPEN DAILY · 10:00 AM – 11:30 PM · MANGALMURTI SQUARE, NAGPUR
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[11px] text-[#EDE6DB]/80 tracking-widest">
            <a
              href="tel:+917972070329"
              className="hover:text-[#C58A4B] transition-colors"
            >
              +91 79 7207 0329
            </a>
            <span>·</span>
            <span className="text-[#C58A4B]">DINE-IN &amp; TAKEAWAY</span>
          </div>
        </div>
      </div>

      {/* 02. Minimalist Editorial Sticky Navigation */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#1E1714]/10 py-3.5 shadow-[0_2px_12px_rgba(30,23,20,0.04)]"
            : "bg-[#FBF8F3] border-b border-[#1E1714]/08 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Serif Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              aria-label="Sip & Brew"
              className="flex items-baseline gap-2.5 group focus:outline-none"
            >
              <span className="font-editorial text-2xl sm:text-3xl text-[#1E1714] tracking-tight group-hover:text-[#8C5832] transition-colors">
                Sip &amp; Brew
              </span>
              <span className="hidden md:inline-block text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#685952]">
                Nagpur
              </span>
            </a>

            {/* Center: Editorial Anchor Links */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-sans font-medium uppercase tracking-[0.16em] text-[#685952] hover:text-[#1E1714] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C58A4B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: High-contrast Pill CTA (Order via WhatsApp) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#1E1714] text-[#FBF8F3] hover:bg-[#8C5832] transition-all duration-300 shadow-sm hover:shadow"
              >
                <span>ORDER VIA WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C58A4B]" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#1E1714] hover:bg-[#1E1714]/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#FBF8F3] transition-all duration-400 ease-in-out lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#1E1714]/10">
            <div>
              <span className="font-editorial text-3xl text-[#1E1714] block leading-none">
                Sip &amp; Brew
              </span>
              <p className="text-[11px] uppercase tracking-widest text-[#685952] mt-1 font-sans">
                {SITE_CONFIG.tagline}
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1E1714] rounded-full hover:bg-[#1E1714]/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-3xl font-editorial text-[#1E1714] hover:text-[#C58A4B] transition-colors flex items-center justify-between py-2 border-b border-[#1E1714]/05"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C58A4B]/60" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#1E1714]/10 flex flex-col gap-3">
          <a
            href={getWhatsAppOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-full text-center text-xs font-sans font-semibold tracking-widest uppercase bg-[#1E1714] text-[#FBF8F3] flex items-center justify-center gap-2"
          >
            <span>ORDER VIA WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 text-[#C58A4B]" />
          </a>
          <div className="text-center text-xs text-[#685952] font-sans pt-2">
            <p>Shop No. C1, Rahul Apartment, Mangalmurti Sq., Nagpur</p>
            <p className="mt-1 text-[#1E1714] font-medium">+91 79 7207 0329</p>
          </div>
        </div>
      </div>
    </>
  );
};
