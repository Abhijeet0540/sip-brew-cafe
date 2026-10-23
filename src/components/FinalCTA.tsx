import React from "react";
import { ArrowUpRight, MapPin, Coffee } from "lucide-react";

export const FinalCTA: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo("#menu", { offset: -20, duration: 1.1 });
    } else {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToVisit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo("#visit", { offset: -20, duration: 1.1 });
    } else {
      document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#FAF7F0] text-[#251811] overflow-hidden border-b border-[#251811]/10">
      {/* Decorative Botanical Leaf Patterns */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#251811" strokeWidth="1.5">
          <path d="M20 180 C60 120 120 80 180 20" />
          <path d="M80 100 C60 70 80 50 110 60 C120 80 100 110 80 100 Z" />
          <path d="M120 60 C100 30 120 10 150 20 C160 40 140 70 120 60 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 opacity-10 pointer-events-none select-none transform rotate-180">
        <svg viewBox="0 0 200 200" fill="none" stroke="#251811" strokeWidth="1.5">
          <path d="M20 180 C60 120 120 80 180 20" />
          <path d="M80 100 C60 70 80 50 110 60 C120 80 100 110 80 100 Z" />
          <path d="M120 60 C100 30 120 10 150 20 C160 40 140 70 120 60 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Brand Stamp */}
        <div className="w-12 h-12 rounded-full bg-[#251811] text-[#FAF7F0] mx-auto mb-6 flex items-center justify-center shadow-warm-sm">
          <Coffee className="w-6 h-6 text-caramel-400 stroke-[1.75]" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-coffee-600 block mb-3">
          Coffee · Conversation · Comfort
        </span>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#251811] tracking-tight leading-[1.08] text-balance">
          Make room for a little coffee happiness.
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl font-sans text-[#80776C] max-w-xl mx-auto leading-relaxed">
          Your coffee ritual, your favorite flavor, your moment.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 transition-all duration-300 shadow-warm-md hover:shadow-warm-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-caramel-500"
          >
            <span>Explore the Menu</span>
            <ArrowUpRight className="w-4 h-4 text-caramel-400" />
          </a>

          <a
            href="#visit"
            onClick={scrollToVisit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#FAF7F0] border border-[#251811]/15 text-[#251811] hover:bg-[#EBDDC9] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#251811]"
          >
            <MapPin className="w-4 h-4 text-caramel-600" />
            <span>Visit Sip &amp; Brew</span>
          </a>
        </div>
      </div>
    </section>
  );
};
