import React, { useRef, useEffect } from "react";
import { ArrowUpRight, MapPin, Compass } from "lucide-react";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

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
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, delay: 0.1 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0 },
          "-=0.8"
        )
        .fromTo(
          imageFrameRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 1.3 },
          "-=1.0"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo(id, { offset: -50, duration: 1.1 });
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative bg-[#FBF8F3] pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#1E1714]/08 text-xs font-sans tracking-[0.2em] uppercase text-[#685952]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C58A4B]" />
            <span>EST. 2024 · SPECIALTY ROASTERY &amp; ESPRESSO BAR</span>
          </div>
          <div className="flex items-center gap-6">
            <span>NAGPUR, MAHARASHTRA</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">LAT 21.1189° N / LON 79.0538° E</span>
          </div>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monumental Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] mb-4">
              Mindful Coffee &amp; Conversation
            </span>

            <h1
              ref={headlineRef}
              className="font-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-[5.75rem] font-normal tracking-tight text-[#1E1714] leading-[1.04] text-balance"
            >
              Good Coffee. <br />
              <span className="italic text-[#8C5832]">Great Conversations.</span>
            </h1>

            <p
              ref={subtextRef}
              className="mt-7 text-lg sm:text-xl font-sans text-[#685952] max-w-xl leading-relaxed text-balance"
            >
              Discover your everyday coffee ritual, from calibrated 9-bar espresso to our signature 18-hour cold brew.
            </p>

            {/* Dual CTAs */}
            <div
              ref={ctaRef}
              className="mt-10 flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#menu"
                onClick={(e) => handleScrollTo(e, "#menu")}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#1E1714] text-[#FBF8F3] hover:bg-[#8C5832] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>EXPLORE THE MENU</span>
                <ArrowUpRight className="w-4 h-4 text-[#C58A4B]" />
              </a>

              <a
                href="#visit"
                onClick={(e) => handleScrollTo(e, "#visit")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-sans font-semibold uppercase tracking-wider border border-[#1E1714]/25 text-[#1E1714] hover:bg-[#1E1714]/05 hover:border-[#1E1714] transition-all duration-300"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C5832]" />
                <span>FIND OUR CAFÉ</span>
              </a>
            </div>

            {/* Editorial Ledger Ticker */}
            <div className="mt-14 pt-8 border-t border-[#1E1714]/08 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#1E1714]">06</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#685952] mt-0.5 block">
                  Drink Categories
                </span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#1E1714]">35</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#685952] mt-0.5 block">
                  Curated Beverages
                </span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#1E1714]">18h</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#685952] mt-0.5 block">
                  Slow Cold Drip
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Aspect Ratio Real Coffee Craft Photography */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageFrameRef}
              className="relative rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#1E1714]/10 shadow-[0_16px_40px_rgba(30,23,20,0.06)] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] group"
            >
              <img
                src="/images/hero-pour.jpg"
                alt="Artisanal espresso extraction with warm latte art microfoam at Sip & Brew"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Clean Understated Craft Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FBF8F3]/95 backdrop-blur-sm border border-[#1E1714]/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8C5832] block">
                    Espresso Precision
                  </span>
                  <span className="font-editorial text-lg text-[#1E1714] block leading-tight mt-0.5">
                    9-Bar Calibrated Extraction
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#685952] block">
                    Microfoam
                  </span>
                  <span className="text-xs font-sans font-semibold text-[#1E1714]">
                    Hand-Poured
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Editorial Accent Note */}
            <div className="mt-4 flex items-center justify-between text-xs font-sans text-[#685952]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C58A4B]" />
                <span>Parsodi, Nagpur</span>
              </span>
              <span className="italic font-editorial text-sm text-[#1E1714]">
                "Every sip has a story."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
