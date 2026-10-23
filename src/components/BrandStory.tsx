import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coffee, Sparkles, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export const BrandStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.innerWidth < 768
      ) {
        return;
      }

      // Parallax on the story image
      gsap.fromTo(
        imageCardRef.current,
        { y: 50 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // Staggered reveal for text content
      gsap.fromTo(
        textContentRef.current?.children || [],
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
          },
        }
      );

      // Values reveal
      gsap.fromTo(
        valuesRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-20 sm:py-36 bg-[#F4EFE5] text-[#251811] overflow-hidden border-b border-[#251811]/10"
    >
      {/* Decorative Botanical Watermark in Background */}
      <div className="absolute -left-20 top-20 opacity-5 pointer-events-none select-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="currentColor">
          <path d="M200 0 C100 120 0 200 200 400 C400 200 300 120 200 0 Z M200 40 C280 150 340 220 200 360 C60 220 120 150 200 40 Z" />
        </svg>
      </div>

      {/* Floating Coffee Beans Background Showcase */}
      <div className="absolute top-16 right-4 sm:right-12 w-24 sm:w-36 md:w-44 opacity-35 pointer-events-none select-none z-0 animate-float-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/roasted-coffee-beans-isolated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-12"
        />
      </div>
      <div className="absolute top-1/2 right-2 sm:right-8 w-28 sm:w-40 md:w-52 opacity-30 pointer-events-none select-none z-0 animate-float-reverse mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-bean-white-background.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-6"
        />
      </div>
      <div className="absolute -bottom-10 left-2 sm:left-10 w-28 sm:w-48 md:w-56 opacity-25 pointer-events-none select-none z-0 animate-drift-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-ai-generated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee-600 block mb-3">
            Our Philosophy
          </span>
          <h2
            ref={headlineRef}
            className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#251811] tracking-tight text-balance leading-[1.12]"
          >
            {SITE_CONFIG.story.headline}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-caramel-500/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-caramel-500" />
            <span className="h-[1px] w-12 bg-caramel-500/40" />
          </div>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Cards */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imageCardRef}
              className="relative z-10 rounded-3xl overflow-hidden shadow-warm-xl bg-[#FAF7F0] border border-[#251811]/10 group"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/images/cappuccino-art-2.jpg"
                  alt="Ceramic cup with botanical Sip & Brew pattern, heart latte art microfoam on sunlit oak table"
                  className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 sm:p-8 bg-[#FAF7F0]">
                <div className="flex items-center justify-between text-xs text-[#80776C] uppercase tracking-wider mb-2">
                  <span>The Morning Table</span>
                  <span>Natural Oak &amp; Ceramics</span>
                </div>
                <p className="font-editorial text-xl sm:text-2xl text-[#251811] leading-snug">
                  "A familiar cup, a quiet moment, and time away from the rush."
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 z-20 rounded-2xl overflow-hidden shadow-warm-lg bg-[#FAF7F0] border border-[#251811]/10 p-3 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square rounded-xl overflow-hidden mb-2.5">
                <img
                  src="/images/espresso-crema-surface.jpg"
                  alt="Single origin espresso extraction on stone counter"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[11px] font-sans font-medium text-[#251811] text-center">
                Calibrated roasts • 100% Arabica
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative Copy */}
          <div ref={textContentRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-caramel-600">
              {SITE_CONFIG.story.subheadline}
            </span>

            <p className="text-lg sm:text-xl font-sans text-[#251811]/90 leading-relaxed font-light">
              {SITE_CONFIG.story.paragraphs[0]}
            </p>

            <p className="text-sm sm:text-base font-sans text-[#80776C] leading-relaxed">
              {SITE_CONFIG.story.paragraphs[1]}
            </p>

            {/* Brand Values List */}
            <div ref={valuesRef} className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#251811]/10">
              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cream-50 border border-[#251811]/10 flex items-center justify-center text-coffee-600 shadow-warm-sm">
                  <Coffee className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="font-editorial text-lg text-[#251811]">Artisanal Precision</h4>
                <p className="text-xs text-[#80776C] leading-relaxed">
                  9-bar calibrated espresso &amp; 18-hour cold brew extractions.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cream-50 border border-[#251811]/10 flex items-center justify-center text-coffee-600 shadow-warm-sm">
                  <Sparkles className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="font-editorial text-lg text-[#251811]">Warm Sanctuary</h4>
                <p className="text-xs text-[#80776C] leading-relaxed">
                  Tactile ceramics, botanical art, and comforting light.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cream-50 border border-[#251811]/10 flex items-center justify-center text-coffee-600 shadow-warm-sm">
                  <HeartHandshake className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="font-editorial text-lg text-[#251811]">Real Connection</h4>
                <p className="text-xs text-[#80776C] leading-relaxed">
                  A place where conversations linger and every sip has a story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
