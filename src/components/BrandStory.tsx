import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BrandStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Gentle reveal on headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
          },
        }
      );

      // Staggered reveal for editorial content
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Reveal for three pillars
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] text-[#1E1714] border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
            <span>The Brand Manifesto</span>
          </div>

          <h2
            ref={headlineRef}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1E1714] leading-[1.08] text-balance"
          >
            More than coffee. <br />
            <span className="italic text-[#8C5832]">A moment to yourself.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Spread */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column: Drop-Cap Narrative & Authentic Photograph */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-t border-[#1E1714]/15 pt-8">
              <p className="text-lg sm:text-xl font-sans text-[#1E1714] leading-relaxed">
                <span className="float-left font-editorial text-6xl sm:text-7xl leading-none pr-3 pt-1 text-[#8C5832]">
                  S
                </span>
                ome moments are made for slowing down. A familiar cup, a favorite flavor, a good conversation, or a little time away from the rush. Sip &amp; Brew brings these simple pleasures together, one cup at a time.
              </p>

              <p className="mt-6 text-base sm:text-lg font-sans text-[#685952] leading-relaxed">
                Rooted in mindful extraction and artisanal roasting, our coffee honors the craft—from calibrated espresso to our signature 18-hour cold brew. But beyond the bean, it is the space we hold for you: a sunlit haven where every table invites unhurried contemplation and heartfelt exchange.
              </p>
            </div>

            {/* Authentic Café Atmosphere Photograph */}
            <div className="relative rounded-2xl overflow-hidden bg-[#EDE6DB] border border-[#1E1714]/10 shadow-sm aspect-[16/10] group">
              <img
                src="/images/cozy-table-cups.jpg"
                alt="Two handcrafted ceramic coffee cups on natural oak table at Sip & Brew"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#FBF8F3]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#1E1714]/10 text-[11px] font-sans text-[#685952]">
                Natural Oak Tables &amp; Tactile Ceramics · Nagpur
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Pillars with Clean Numeric Indices */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-8 lg:pt-0">
            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#685952] block mb-6">
                Our Three Pillars
              </span>

              <div ref={pillarsRef} className="divide-y divide-[#1E1714]/10 border-y border-[#1E1714]/10">
                {/* Pillar 01 */}
                <div className="py-7 group">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#C58A4B]">
                      Pillar 01
                    </span>
                    <span className="text-xs font-sans text-[#685952]">Extraction</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1714] tracking-tight group-hover:text-[#8C5832] transition-colors">
                    Artisanal Precision
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-sans text-[#685952] leading-relaxed">
                    9-bar calibrated espresso &amp; 18-hour cold brew extractions that honor single-origin profiles and subtle roast notes.
                  </p>
                </div>

                {/* Pillar 02 */}
                <div className="py-7 group">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#C58A4B]">
                      Pillar 02
                    </span>
                    <span className="text-xs font-sans text-[#685952]">Ambiance</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1714] tracking-tight group-hover:text-[#8C5832] transition-colors">
                    Warm Sanctuary
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-sans text-[#685952] leading-relaxed">
                    Tactile ceramics, botanical art, natural stone surfaces, and comforting light designed for gentle mornings and quiet afternoons.
                  </p>
                </div>

                {/* Pillar 03 */}
                <div className="py-7 group">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#C58A4B]">
                      Pillar 03
                    </span>
                    <span className="text-xs font-sans text-[#685952]">Community</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1714] tracking-tight group-hover:text-[#8C5832] transition-colors">
                    Real Connection
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-sans text-[#685952] leading-relaxed">
                    A welcoming neighborhood café where baristas remember your ritual and good conversations linger naturally.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Footer Quote */}
            <div className="mt-10 p-6 rounded-2xl bg-[#EDE6DB]/60 border border-[#1E1714]/08">
              <p className="font-editorial text-xl sm:text-2xl text-[#1E1714] italic leading-snug">
                "Some moments are made for slowing down. A familiar cup, a favorite flavor, a good conversation."
              </p>
              <span className="block mt-3 text-xs font-sans uppercase tracking-[0.2em] text-[#8C5832]">
                — The Sip &amp; Brew Philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
