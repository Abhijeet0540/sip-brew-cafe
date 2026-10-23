import React, { useState, useEffect, useRef } from "react";
import { Camera, Quote, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AtmosphereSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  caption: string;
  image: string;
  tag: string;
}

const ATMOSPHERE_SLIDES: AtmosphereSlide[] = [
  {
    id: "cup",
    number: "01",
    title: "The Signature Takeaway Cup",
    subtitle: "Brand Identity · Steaming Comfort",
    caption:
      "Crafted in warm cream paper with our distinctive hand-drawn botanical leaves and Sip & Brew emblem. Tactile, insulated, and filled with piping hot fresh coffee.",
    image: "/images/sip-brew-signature-cup-steaming.jpg",
    tag: "Original Takeaway Cup",
  },
  {
    id: "cold-craft",
    number: "02",
    title: "Crystal Ice & Chilled Brew",
    subtitle: "Artisan Glassware · Layered Balance",
    caption:
      "Chilled single-origin extraction slowly steeped and poured briskly over dense artisan crystal ice for crisp refreshment and subtle sweetness.",
    image: "/images/iced-coffee-stone.jpg",
    tag: "Chilled Craft",
  },
  {
    id: "crema",
    number: "03",
    title: "Tiger-Stripe Crema",
    subtitle: "Calibrated 9-Bar Pull · Stone Hearth",
    caption:
      "Macro extraction showcasing thick golden tiger-stripe crema, rich aroma, and pure cocoa undertones dialed fresh on demand.",
    image: "/images/espresso-cup.jpg",
    tag: "Espresso Precision",
  },
  {
    id: "morning",
    number: "04",
    title: "Morning Light & Conversations",
    subtitle: "Natural Wood · Rosetta Microfoam",
    caption:
      "A warm sunlit table with freshly poured cappuccino, intricate latte art, and room to think. Sip & Brew invites you to pause and savor the moment.",
    image: "/images/cappuccino.jpg",
    tag: "Café Ambiance",
  },
  {
    id: "frappe",
    number: "05",
    title: "Thick Blended Indulgence",
    subtitle: "70% Bittersweet Cocoa · Whipped Cloud",
    caption:
      "Frosty mocha and white chocolate frappes blended thick with cold dairy, rich chocolate ganache, and crowned with cocoa dusting.",
    image: "/images/dark-mocha-frappe-premium.jpg",
    tag: "Blended Specialty",
  },
];

export const CoffeeExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.innerWidth < 768
      ) {
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-36 bg-[#FAF7F0] text-[#251811] relative overflow-hidden border-b border-[#251811]/10"
    >
      {/* Floating Coffee Beans Background Showcase */}
      <div className="absolute top-8 left-2 sm:left-8 w-28 sm:w-44 md:w-56 opacity-30 pointer-events-none select-none z-0 animate-float-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-ai-generated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>
     
      <div className="absolute bottom-10 right-2 sm:right-8 w-24 sm:w-36 md:w-48 opacity-35 pointer-events-none select-none z-0 animate-float-reverse mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/roasted-coffee-beans-isolated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-coffee-600 mb-3">
            <Camera className="w-3.5 h-3.5 text-caramel-500" />
            <span>The Atmosphere</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#251811] tracking-tight leading-[1.12]">
            Find your moment.
          </h2>
          <p className="mt-4 text-sm sm:text-lg font-sans text-[#80776C] leading-relaxed">
            Explore our world through this expanding visual slider. Tap each panel to reveal the craft, the space, and our signature botanical takeaway cup.
          </p>
        </div>

        {/* ============================================================== */}
        {/* EXPANDING ACCORDION SLIDER (FLEXBOX ACCORDION SLIDER)           */}
        {/* SILKY SMOOTH CSS TRANSITIONS AND HARDWARE ACCELERATION         */}
        {/* ============================================================== */}
        <div ref={sliderRef} className="flex flex-col lg:flex-row gap-4 h-[720px] lg:h-[580px] w-full select-none">
          {ATMOSPHERE_SLIDES.map((slide, idx) => {
            const isExpanded = idx === activeIndex;

            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveIndex(idx);
                  }
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  willChange: "flex-grow, flex-basis",
                  transition: "flex 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease",
                }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-[#251811]/15 shadow-warm-md focus:outline-none focus:ring-2 focus:ring-caramel-500 ${
                  isExpanded
                    ? "flex-[3.5] lg:flex-[3.5] shadow-warm-xl"
                    : "flex-1 lg:flex-1 hover:border-caramel-500/50"
                }`}
              >
                {/* Background Image with smooth zoom */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease",
                  }}
                  className={`absolute inset-0 w-full h-full object-cover object-center ${
                    isExpanded
                      ? "scale-105 filter brightness-[0.92] contrast-[1.05]"
                      : "scale-100 filter brightness-[0.62] contrast-[0.95] group-hover:brightness-[0.75]"
                  }`}
                  loading="lazy"
                  decoding="async"
                />

                {/* Layered Gradient Overlays */}
                <div
                  style={{ transition: "opacity 0.6s ease" }}
                  className={`absolute inset-0 bg-gradient-to-t from-[#251811]/95 via-[#251811]/40 to-transparent ${
                    isExpanded ? "opacity-90" : "opacity-85"
                  }`}
                />

                {/* Top Header Badge & Number */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
                  <span
                    style={{ transition: "all 0.4s ease" }}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                      isExpanded
                        ? "bg-[#FAF7F0] text-[#251811] shadow-warm-sm"
                        : "bg-[#251811]/75 backdrop-blur-md text-[#FAF7F0] border border-[#FAF7F0]/20"
                    }`}
                  >
                    {slide.tag}
                  </span>

                  <span className="font-editorial text-2xl font-light text-[#FAF7F0]/90">
                    {slide.number}
                  </span>
                </div>

                {/* Collapsed State: Vertical Typography on Desktop */}
                {!isExpanded && (
                  <div
                    style={{ transition: "opacity 0.4s ease 0.15s" }}
                    className="hidden lg:flex absolute inset-0 z-10 flex-col items-center justify-end pb-10 pointer-events-none"
                  >
                    <span className="font-editorial text-2xl text-[#FAF7F0] [writing-mode:vertical-rl] transform rotate-180 tracking-wide opacity-90 group-hover:text-caramel-300 transition-colors">
                      {slide.title}
                    </span>
                  </div>
                )}

                {/* Expanded State: Smooth Text Reveal */}
                <div
                  style={{
                    transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                  }}
                  className={`absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 z-20 text-[#FAF7F0] flex flex-col justify-end ${
                    isExpanded
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div className="max-w-xl">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-caramel-300 block mb-1 sm:mb-2">
                      {slide.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] mb-2 sm:mb-3 text-balance">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#FAF7F0]/85 leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
                      {slide.caption}
                    </p>

                    <div className="mt-3 sm:mt-5 flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-caramel-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sip &amp; Brew Atmosphere</span>
                    </div>
                  </div>
                </div>

                {/* Active Indicator Bar at Bottom */}
                <div
                  style={{ transition: "opacity 0.5s ease" }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-caramel-500 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Ambient Brand Quote */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#F4EFE5] border border-[#251811]/10 text-center relative overflow-hidden shadow-warm-sm">
          <Quote className="w-10 h-10 text-caramel-500/30 mx-auto mb-4" />
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#251811] max-w-3xl mx-auto leading-relaxed italic">
            "Coffee isn't just fuel to get through the day. It’s an invitation to pause, exhale, and savor the company you keep."
          </p>
          <span className="block mt-4 text-xs uppercase tracking-widest text-coffee-600 font-sans font-semibold">
            — The Sip &amp; Brew Philosophy
          </span>
        </div>
      </div>
    </section>
  );
};
