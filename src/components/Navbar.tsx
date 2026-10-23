import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Coffee } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "The Experience", href: "#experience" },
    { label: "Visit Us", href: "#visit" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");

    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(href, { offset: -20, duration: 1.1 });
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          isScrolled
            ? "bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#251811]/10 py-3.5 shadow-warm-sm"
            : "bg-gradient-to-b from-[#251811]/85 via-[#251811]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500 rounded-lg p-1"
            >
              {/* Brand Wordmark & Cup emblem */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-warm-sm ${
                  isScrolled
                    ? "bg-[#251811] text-[#FAF7F0]"
                    : "bg-[#FAF7F0] text-[#251811]"
                }`}
              >
                <Coffee
                  className={`w-5 h-5 stroke-[2] ${
                    isScrolled ? "text-caramel-400" : "text-coffee-700"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-editorial text-2xl sm:text-3xl font-medium tracking-tight leading-none transition-colors duration-300 ${
                    isScrolled ? "text-[#251811]" : "text-[#FAF7F0] drop-shadow-sm"
                  }`}
                >
                  Sip &amp; Brew
                </span>
                <span
                  className={`hidden md:inline-block text-[11px] font-sans font-medium uppercase tracking-[0.2em] mt-0.5 transition-colors duration-300 ${
                    isScrolled ? "text-[#80776C]" : "text-[#ffff]"
                  }`}
                >
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </a>

            {/* Center/Right: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-sans font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-caramel-400 hover:after:w-full after:transition-all after:duration-300 ${
                    isScrolled
                      ? "text-[#251811]/80 hover:text-[#251811]"
                      : "text-[#FAF7F0]/90 hover:text-[#FAF7F0] drop-shadow-sm"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#menu"
                onClick={(e) => handleLinkClick(e, "#menu")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500 ${
                  isScrolled
                    ? "bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600"
                    : "bg-caramel-500 text-[#251811] hover:bg-caramel-400 shadow-lg"
                }`}
              >
                <span>Explore the Menu</span>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 stroke-[2.2] ${
                    isScrolled ? "text-caramel-400" : "text-[#251811]"
                  }`}
                />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-500 ${
                isScrolled
                  ? "text-[#251811] hover:bg-[#251811]/5"
                  : "text-[#FAF7F0] hover:bg-white/10"
              }`}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.75]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF7F0]/98 backdrop-blur-xl transition-all duration-500 ease-editorial lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20">
          <div className="mb-6 pb-4 border-b border-[#251811]/10">
            <span className="font-editorial text-3xl font-medium text-[#251811]">
              Sip &amp; Brew
            </span>
            <p className="text-xs uppercase tracking-widest text-[#80776C] mt-1">
              Coffee · Conversation · Comfort.
            </p>
          </div>

          <nav className="flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-editorial text-[#251811] hover:text-caramel-600 transition-colors flex items-center justify-between"
                style={{
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-caramel-500/60" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[#251811]/10 flex flex-col gap-4">
          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, "#menu")}
            className="w-full py-3.5 rounded-full text-center text-sm font-semibold tracking-wider uppercase bg-[#251811] text-[#FAF7F0] shadow-warm-md flex items-center justify-center gap-2"
          >
            <span>Explore Full Menu</span>
            <ArrowUpRight className="w-4 h-4 text-caramel-400" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-xs text-center text-caramel-600 hover:text-coffee-800 font-medium transition-colors"
          >
            {SITE_CONFIG.contact.email}
          </a>
          <p className="text-[11px] text-center text-[#80776C]">
            Opening daily from 10:00 AM • Nagpur, Maharashtra
          </p>
        </div>
      </div>
    </>
  );
};
