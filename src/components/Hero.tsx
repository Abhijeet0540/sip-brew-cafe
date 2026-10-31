import React, { useRef, useEffect } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const billboardRef = useRef<HTMLDivElement>(null);
  const drinkRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.0,
        },
      });

      tl.fromTo(
        billboardRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .fromTo(
          drinkRef.current,
          { opacity: 0, y: 30, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          "-=0.9"
        )
        .fromTo(
          leftColRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.8"
        )
        .fromTo(
          rightColRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.8"
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

  const whatsappUrl =
    "https://wa.me/917972070329?text=" +
    encodeURIComponent(
      "Hi Sip & Brew! I'd like to order the Iced Amber Latte (₹139). Is it available right now?"
    );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative bg-[#FBF8F3] pt-4 pb-10 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16 overflow-hidden border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Minimal Editorial Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-[#1E1714]/08 text-[11px] sm:text-xs font-sans tracking-[0.15em] uppercase text-[#685952]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
            <span className="font-medium text-[#1E1714]">
              Made for the ones who taste the difference
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>This one&apos;s on us — almost</span>
            <span className="text-[#C58A4B]">◆</span>
            <span className="font-semibold text-[#8C5832]">15% off today</span>
          </div>
        </div>

        {/* Hero Stage: Giant Stacked Typography Behind, 3-Column Foreground Grid */}
        <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center">
          {/* Giant Repeating Background Billboard Typography (3 stacked lines, perfectly centered) */}
          <div
            ref={billboardRef}
            aria-hidden="true"
            className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden z-0"
          >
            <div className="w-full flex flex-col justify-center items-center gap-0 sm:gap-1">
              <span className="font-sans font-black tracking-tighter uppercase text-[#1E1714]/[0.06] text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] xl:text-[9.2rem] leading-[0.82] text-center whitespace-nowrap block">
                ICED AMBER LATTE
              </span>
              <span className="font-sans font-black tracking-tighter uppercase text-[#1E1714]/[0.07] text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] xl:text-[9.2rem] leading-[0.82] text-center whitespace-nowrap block">
                ICED AMBER LATTE
              </span>
              <span className="font-sans font-black tracking-tighter uppercase text-[#1E1714]/[0.06] text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] xl:text-[9.2rem] leading-[0.82] text-center whitespace-nowrap block">
                ICED AMBER LATTE
              </span>
            </div>
          </div>

          {/* Foreground Grid: Left Story, Center Transparent Cutout, Right Stats */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center lg:items-end">
            
            {/* Left Column: Sourcing Narrative & Pill Buttons */}
            <div
              ref={leftColRef}
              className="lg:col-span-4 text-left order-2 lg:order-1 lg:pb-6"
            >
              <p className="text-xs sm:text-sm font-sans text-[#685952] leading-relaxed max-w-xs">
                We source from the world&apos;s smallest farms, roast everything in-house, and take the kind of care that shows up in the cup.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#menu"
                  onClick={(e) => handleScrollTo(e, "#menu")}
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#C58A4B] text-[#FBF8F3] hover:bg-[#8C5832] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Drinks</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-wider border border-[#1E1714]/25 bg-[#FBF8F3]/80 hover:bg-[#1E1714] hover:text-[#FBF8F3] text-[#1E1714] transition-all duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Order (₹139)</span>
                </a>
              </div>
            </div>

            {/* Center Column: Cutout PNG Drink (No Background, No Card Frame) */}
            <div
              ref={drinkRef}
              className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2"
            >
              <div className="relative flex flex-col items-center">
                <img
                  src="/images/iced-amber-latte-cutout.png"
                  alt="Tall glass of Iced Amber Latte with overflowing cold foam and dripping golden caramel drizzle"
                  className="w-auto h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] object-contain drop-shadow-[0_20px_35px_rgba(30,23,20,0.18)] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                {/* Subtle Natural Ground Shadow Underneath Glass Base */}
                <div className="w-44 sm:w-52 h-4 bg-[#1E1714]/15 blur-md rounded-full -mt-2" />
              </div>
            </div>

            {/* Right Column: Clean Vertical Numbers & Roastery Proof */}
            <div
              ref={rightColRef}
              className="lg:col-span-4 order-3 lg:pb-6 flex lg:flex-col justify-between sm:justify-start lg:items-end gap-6"
            >
              <div className="lg:text-right">
                <span className="block font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E1714] tracking-tight leading-none">
                  1
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8C5832] mt-1 block">
                  Roast Location
                </span>
              </div>

              <div className="lg:text-right">
                <span className="block font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E1714] tracking-tight leading-none">
                  4.8 ★
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8C5832] mt-1 block">
                  Ratings
                </span>
              </div>

              <div className="lg:text-right">
                <span className="block font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E1714] tracking-tight leading-none">
                  340+
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8C5832] mt-1 block">
                  Daily Cups
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Minimal Bottom Provenance Line */}
        <div className="mt-6 pt-4 border-t border-[#1E1714]/08 flex flex-wrap items-center justify-between gap-2 text-[11px] font-sans text-[#685952]">
          <span>Mangalmurti Square, Ring Road, Nagpur</span>
          <span className="italic font-editorial text-sm text-[#1E1714]">
            &ldquo;Pixels. Print. Purpose.&rdquo;
          </span>
          <span>Open Daily 10:00 AM – 11:30 PM</span>
        </div>
      </div>
    </section>
  );
};
