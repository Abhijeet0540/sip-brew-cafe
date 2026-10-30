import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    subtitle: "Brand Identity · Botanical Line Art",
    caption:
      "Crafted in warm cream paper with our distinctive hand-drawn botanical leaves and Sip & Brew emblem. Tactile, insulated, and designed for coffee in hand.",
    image: "/images/sip-brew-signature-cup-steaming.jpg",
    tag: "Brand Identity",
  },
  {
    id: "cold-drip",
    number: "02",
    title: "Crystal Ice & Slow Cold Drip",
    subtitle: "18-Hour Immersion · Low Acidity",
    caption:
      "Chilled single-origin extraction slowly steeped to perfection, pouring briskly over dense artisan crystal ice for refreshing clarity.",
    image: "/images/sip-brew-iced-pour.jpg",
    tag: "Slow Immersion",
  },
  {
    id: "crema",
    number: "03",
    title: "Tiger-Stripe Crema Extraction",
    subtitle: "Calibrated 9-Bar Pull · Velvet Texture",
    caption:
      "Macro extraction showcasing thick golden crema, micro-bubbles, and rich aroma. Every espresso shot is ground and dialed on demand.",
    image: "/images/crema-espresso.jpg",
    tag: "Espresso Precision",
  },
  {
    id: "morning",
    number: "04",
    title: "Morning Light & Conversations",
    subtitle: "Natural Oak · Quiet Moments",
    caption:
      "A sunlit table with two handmade cups, open notebooks, and room to think. Sip & Brew is an invitation to slow down and savor the morning.",
    image: "/images/cozy-table-cups.jpg",
    tag: "Café Ambiance",
  },
  {
    id: "roasting",
    number: "05",
    title: "Fresh Micro-Batch Beans",
    subtitle: "100% Arabica · Sustainable Sourcing",
    caption:
      "Sourced from responsible estate harvests, our beans are micro-batch roasted to preserve delicate notes of caramel, dark chocolate, and wildflower honey.",
    image: "/images/sip-brew-roasting-beans.jpg",
    tag: "Artisanal Roast",
  },
];

export const CoffeeExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ATMOSPHERE_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ATMOSPHERE_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="atmosphere"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#FBF8F3] text-[#1E1714] border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12 sm:mb-16 border-b border-[#1E1714]/10 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
              <span>Photo Essay</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1E1714] tracking-tight leading-[1.06]">
              The Space &amp; Craft
            </h2>
            <p className="mt-4 text-base sm:text-lg font-sans text-[#685952] leading-relaxed">
              An intimate look into our slow extraction rituals, warm tactile ceramics, and our signature botanical takeaway cup.
            </p>
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous essay panel"
              className="w-11 h-11 rounded-full bg-[#F4EFE6] border border-[#1E1714]/15 flex items-center justify-center text-[#1E1714] hover:bg-[#1E1714] hover:text-[#FBF8F3] transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.75]" />
            </button>
            <span className="text-xs font-sans font-medium text-[#685952] px-2 tracking-widest">
              0{activeIndex + 1} / 0{ATMOSPHERE_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next essay panel"
              className="w-11 h-11 rounded-full bg-[#F4EFE6] border border-[#1E1714]/15 flex items-center justify-center text-[#1E1714] hover:bg-[#1E1714] hover:text-[#FBF8F3] transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.75]" />
            </button>
          </div>
        </div>

        {/* Visual Photo Essay Accordion Slider */}
        <div
          ref={sliderRef}
          className="flex flex-col lg:flex-row gap-4 h-[740px] lg:h-[580px] w-full select-none"
        >
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
                  transition: "flex 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1E1714]/15 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C58A4B] ${
                  isExpanded
                    ? "flex-[3.5] lg:flex-[3.5] shadow-md"
                    : "flex-1 lg:flex-1 hover:border-[#1E1714]/30"
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className={`absolute inset-0 w-full h-full object-cover object-center ${
                    isExpanded
                      ? "scale-105 filter brightness-[0.88] contrast-[1.02]"
                      : "scale-100 filter brightness-[0.6] contrast-[0.95] group-hover:brightness-[0.75]"
                  }`}
                  loading="lazy"
                />

                {/* Subtle Gradient Veil */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#1E1714]/95 via-[#1E1714]/35 to-transparent transition-opacity duration-500 ${
                    isExpanded ? "opacity-90" : "opacity-80"
                  }`}
                />

                {/* Top Label & Numeric Index */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider ${
                      isExpanded
                        ? "bg-[#FBF8F3] text-[#1E1714]"
                        : "bg-[#1E1714]/75 text-[#FBF8F3] border border-[#FBF8F3]/20"
                    }`}
                  >
                    {slide.tag}
                  </span>

                  <span className="font-editorial text-2xl font-light text-[#FBF8F3]/90">
                    {slide.number}
                  </span>
                </div>

                {/* Collapsed State: Vertical Editorial Label on Desktop */}
                {!isExpanded && (
                  <div className="hidden lg:flex absolute inset-0 z-10 flex-col items-center justify-end pb-10 pointer-events-none">
                    <span className="font-editorial text-2xl text-[#FBF8F3] [writing-mode:vertical-rl] transform rotate-180 tracking-wide opacity-90 group-hover:text-[#C58A4B] transition-colors">
                      {slide.title}
                    </span>
                  </div>
                )}

                {/* Expanded State: Editorial Reveal */}
                <div
                  style={{
                    transition:
                      "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                  }}
                  className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-20 text-[#FBF8F3] flex flex-col justify-end ${
                    isExpanded
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="max-w-xl">
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-semibold text-[#C58A4B] block mb-2">
                      {slide.subtitle}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] mb-3 text-balance">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#EDE6DB] leading-relaxed max-w-lg">
                      {slide.caption}
                    </p>
                  </div>
                </div>

                {/* Active Indicator Bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-[#C58A4B] transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Ambient Editorial Quote */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-2xl bg-[#F4EFE6] border border-[#1E1714]/10 text-center max-w-4xl mx-auto">
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#1E1714] leading-relaxed italic">
            "Coffee isn't just fuel to get through the day. It's an invitation to pause, exhale, and savor the company you keep."
          </p>
          <span className="block mt-4 text-xs font-sans uppercase tracking-[0.2em] text-[#8C5832]">
            — The Sip &amp; Brew Philosophy · Nagpur
          </span>
        </div>
      </div>
    </section>
  );
};
