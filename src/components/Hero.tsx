import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";

interface HeroCarouselItem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  image: string;
  bgImage: string;
}

const HERO_ITEMS: HeroCarouselItem[] = [
  {
    id: "latte",
    name: "Café Latte",
    subtitle: "Velvet Microfoam",
    tagline: "Silky textured whole milk with calibrated 9-bar espresso rosetta.",
    image: "/images/cafe-latte-art.jpg",
    bgImage: "/images/cafe-latte-art.jpg",
  },
  {
    id: "spanish",
    name: "Spanish Latte",
    subtitle: "Condensed Milk",
    tagline: "Artisanal sweet condensed milk layered with dark espresso.",
    image: "/images/spanish-latte-glass.jpg",
    bgImage: "/images/spanish-latte-glass.jpg",
  },
  {
    id: "cracked-chocolate",
    name: "Cracked Chocolate",
    subtitle: "Shattered Dark Shell",
    tagline: "Crisp dark chocolate shell that shatters delightfully into iced velvet latte.",
    image: "/images/cracked-chocolate-iced-latte.jpg",
    bgImage: "/images/cracked-chocolate-iced-latte.jpg",
  },
  {
    id: "nutella",
    name: "Nutella Iced",
    subtitle: "Cocoa Swirl",
    tagline: "Glass swirled with rich Nutella cocoa, toasted hazelnuts, and chilled espresso.",
    image: "/images/nutella-iced-latte-premium.jpg",
    bgImage: "/images/nutella-iced-latte-premium.jpg",
  },
  {
    id: "takeaway-cup",
    name: "Takeaway Cup",
    subtitle: "Steaming Comfort",
    tagline: "Sip & Brew signature botanical cup filled with steaming freshly pulled brew.",
    image: "/images/sip-brew-signature-cup-steaming.jpg",
    bgImage: "/images/sip-brew-signature-cup-steaming.jpg",
  },
];

export const Hero: React.FC = () => {
  // Start with center item (Mont Blanc at index 2) active, exactly like reference
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Entrance animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.1,
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.15 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          "-=0.9"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.9"
        )
        .fromTo(
          carouselRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.3 },
          "-=1"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Smooth auto-cycling every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo("#menu", { offset: -20, duration: 1.1 });
    } else {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToVisit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo("#visit", { offset: -20, duration: 1.1 });
    } else {
      document.getElementById("visit")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeItem = HERO_ITEMS[activeIndex];

  // Geometric continuous arc curve across all 5 items
  const getCurveOffset = (index: number) => {
    const baseArc = [-35, 5, 45, 5, -35];
    const isCurrent = index === activeIndex;
    return (baseArc[index] ?? 0) + (isCurrent ? 12 : 0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#251811] text-[#FAF7F0] pt-28 pb-16 lg:py-0"
    >
      {/* ============================================================== */}
      {/* CLEAN BACKGROUND MEDIA (NO MURKY OVERLAPS, PURE PHOTO FADES)   */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            style={{
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "opacity, transform",
            }}
            className={`absolute inset-0 ${
              idx === activeIndex
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={item.bgImage}
              alt={item.name}
              className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
              loading={idx === activeIndex ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={idx === activeIndex ? "high" : "low"}
            />
          </div>
        ))}

        {/* Clean Vignette Gradients for High Readability on Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#251811]/95 via-[#251811]/70 to-[#251811]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#251811] via-transparent to-[#251811]/60 pointer-events-none" />

        {/* Floating Atmospheric Coffee Beans Background Showcase */}
        <div className="absolute top-12 left-6 md:left-16 w-24 md:w-40 opacity-30 pointer-events-none z-[2] animate-float-slow filter drop-shadow-2xl select-none">
          <img
            src="/images/roasted-coffee-beans-isolated.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform -rotate-12"
          />
        </div>
        <div className="absolute top-1/4 right-2 md:right-12 w-28 md:w-48 opacity-25 pointer-events-none z-[2] animate-drift-slow filter drop-shadow-2xl select-none">
          <img
            src="/images/coffee-ai-generated.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform rotate-6"
          />
        </div>
        <div className="absolute bottom-10 right-4 md:right-28 w-32 md:w-56 opacity-25 pointer-events-none z-[2] animate-float-reverse filter drop-shadow-2xl select-none">
          <img
            src="/images/roasted-coffee-beans-falling-aromatic-rich.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain transform rotate-12"
          />
        </div>

        {/* Panoramic Roasted Bean Border Transition */}
        <div className="absolute -bottom-8 left-0 right-0 w-full h-20 sm:h-28 opacity-25 pointer-events-none select-none z-[2] overflow-hidden">
          <img
            src="/images/coffee-beans-pattern-design.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom filter brightness-75"
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* HERO CONTENT: LEFT EDITORIAL + RIGHT ARROWED CURVED CAROUSEL   */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[82vh]">
        {/* Left Column: Brand Typography & Action */}
        <div className="w-full lg:max-w-2xl text-left flex flex-col items-start pt-6 lg:pt-0">
          {/* Eyebrow Pill */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF7F0]/15 backdrop-blur-md border border-[#FAF7F0]/20 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-caramel-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#FAF7F0] font-medium">
              COFFEE · CONVERSATION · COMFORT
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-tight text-[#FAF7F0] leading-[1.08] text-balance drop-shadow-sm"
          >
            Good Coffee. <br />
            <span className="italic font-light text-caramel-300">
              Great Conversations.
            </span>
          </h1>

          {/* Dynamic Supporting Copy */}
          <div ref={subtextRef} className="mt-6 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl font-sans font-normal text-[#FAF7F0]/90 leading-relaxed text-balance">
              Discover your everyday coffee ritual, from calibrated 9-bar espresso to our signature 18-hour cold brew.
            </p>
            {/* Dynamic Ritual Highlight */}
            <p className="mt-3 text-sm text-caramel-300 font-sans italic flex items-center gap-2 transition-all duration-500">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-caramel-400" />
              <span>{activeItem.tagline}</span>
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div
            ref={ctaRef}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-caramel-500 text-[#251811] hover:bg-caramel-400 transition-all duration-300 shadow-warm-lg hover:shadow-warm-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-caramel-300"
            >
              <span>Explore Our Menu</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </a>

            <a
              href="#visit"
              onClick={scrollToVisit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#FAF7F0]/15 hover:bg-[#FAF7F0]/25 text-[#FAF7F0] backdrop-blur-sm border border-[#FAF7F0]/25 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FAF7F0]"
            >
              <MapPin className="w-4 h-4 text-caramel-400" />
              <span>Find Your Coffee Spot</span>
            </a>
          </div>

          {/* Supporting subtle tagline */}
          <div className="mt-10 flex items-center gap-3 text-xs tracking-widest uppercase text-[#FAF7F0]/70 font-sans">
            <span className="h-[1px] w-8 bg-[#FAF7F0]/30" />
            <span>Every sip has a story</span>
            <span className="h-[1px] w-8 bg-[#FAF7F0]/30" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* RIGHT COLUMN: CURVED VERTICAL DESTINATION CAROUSEL             */}
        {/* (EXACT REPLICA OF THE ARCHED CAROUSEL FROM REFERENCE IMAGE)   */}
        {/* ============================================================== */}
        <div
          ref={carouselRef}
          className="w-full lg:w-auto flex items-center justify-center lg:justify-end relative"
        >
          {/* Desktop Curved Vertical Carousel */}
          <div className="hidden lg:flex items-center gap-6 relative select-none pr-4">
            {/* Arched Column of Carousel Nodes */}
            <div className="relative flex flex-col items-end space-y-6 py-6">
              {HERO_ITEMS.map((item, idx) => {
                const isActive = idx === activeIndex;
                const curveX = getCurveOffset(idx);

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      transform: `translateX(${curveX}px)`,
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                    }}
                    className={`flex items-center gap-4 cursor-pointer group select-none ${
                      isActive ? "opacity-100" : "opacity-65 hover:opacity-95"
                    }`}
                  >
                    {/* Minimal Two-Line Text (Just Like Reference Image) */}
                    <div className="text-right transition-all duration-300">
                      <span
                        className={`font-editorial block text-lg sm:text-xl transition-colors leading-tight ${
                          isActive
                            ? "text-2xl text-caramel-300 italic font-medium drop-shadow-md"
                            : "text-[#FAF7F0] group-hover:text-caramel-200"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-[11px] font-sans tracking-wider block transition-colors mt-0.5 ${
                          isActive
                            ? "text-[#FAF7F0]/90 font-medium"
                            : "text-[#FAF7F0]/60 group-hover:text-[#FAF7F0]/80"
                        }`}
                      >
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Circular Image Node */}
                    <div
                      style={{
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className={`relative rounded-full overflow-hidden flex-shrink-0 shadow-warm-lg ${
                        isActive
                          ? "w-28 h-28 ring-4 ring-caramel-400 ring-offset-4 ring-offset-[#251811] shadow-2xl scale-110"
                          : "w-16 h-16 ring-1 ring-[#FAF7F0]/30 group-hover:ring-[#FAF7F0]/70 group-hover:scale-105"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-editorial ${
                          isActive
                            ? "scale-105 filter brightness-[1.02]"
                            : "filter brightness-[0.75] group-hover:brightness-[0.9]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Mobile / Tablet Horizontal Carousel */}
          <div className="flex lg:hidden flex-col items-center w-full mt-6 mb-2">
            <div
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="flex items-center justify-center gap-2 overflow-x-auto w-full py-2 scrollbar-none no-scrollbar px-2"
            >
              {HERO_ITEMS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex flex-col items-center gap-1 p-1 rounded-2xl transition-all duration-300 focus:outline-none flex-shrink-0 ${
                      isActive ? "scale-105 opacity-100" : "opacity-60 scale-95"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "ring-2 ring-caramel-400 ring-offset-2 ring-offset-[#251811] shadow-lg"
                          : "ring-1 ring-[#FAF7F0]/25"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-[10px] font-sans max-w-[65px] truncate ${
                        isActive ? "text-caramel-300 font-semibold" : "text-[#FAF7F0]/70"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator (Desktop Only to avoid mobile thumbnail overlap) */}
      <a
        href="#story"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("story")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        aria-label="Scroll down to Our Story"
        className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center gap-2 text-[#FAF7F0]/70 hover:text-[#FAF7F0] transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Scroll</span>
        <div className="w-7 h-10 rounded-full border border-[#FAF7F0]/40 flex items-start justify-center p-1.5 transition-colors group-hover:border-[#FAF7F0]/80">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-caramel-400" />
        </div>
      </a>
    </section>
  );
};
