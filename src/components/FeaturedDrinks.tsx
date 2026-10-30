import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURED_DRINKS, MenuItem } from "@/data/menu";
import { getWhatsAppOrderLink } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedDrinksProps {
  onSelectItem?: (item: MenuItem) => void;
}

export const FeaturedDrinks: React.FC<FeaturedDrinksProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signatures"
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
              <span>Curated Lookbook</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1E1714] tracking-tight leading-[1.06]">
              Signature Creations
            </h2>
            <p className="mt-4 text-base sm:text-lg font-sans text-[#685952] leading-relaxed">
              Six distinctive drinks crafted with slow extractions, house ganaches, and calibrated microfoam.
            </p>
          </div>

          <div>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#1E1714] hover:text-[#8C5832] transition-colors group"
            >
              <span>View Full 35-Drink Menu</span>
              <ArrowUpRight className="w-4 h-4 text-[#C58A4B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Lookbook 6-Drink Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16"
        >
          {FEATURED_DRINKS.map((drink, index) => (
            <div
              key={drink.id || drink.name}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#1E1714]/10 mb-5 shadow-[0_4px_20px_rgba(30,23,20,0.03)]">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Clean Signature Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#FBF8F3]/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#1E1714]/10 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8C5832]">
                    Signature 0{index + 1}
                  </div>

                  {/* Price Tag in Image Corner */}
                  <div className="absolute bottom-3.5 right-3.5 bg-[#1E1714] text-[#FBF8F3] px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold">
                    ₹{drink.price}
                  </div>
                </div>

                {/* Drink Meta & Name */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1714] group-hover:text-[#8C5832] transition-colors leading-tight">
                    {drink.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm font-sans text-[#685952] leading-relaxed line-clamp-2">
                  {drink.description}
                </p>

                {/* Flavor Notes where available */}
                {drink.flavors && drink.flavors.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {drink.flavors.slice(0, 3).map((flv) => (
                      <span
                        key={flv}
                        className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#EDE6DB]/60 text-[#1E1714] border border-[#1E1714]/08"
                      >
                        {flv}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct 1-Tap WhatsApp Ordering Button */}
              <div className="mt-6 pt-4 border-t border-[#1E1714]/10 flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#685952]">
                  Freshly Prepared
                </span>

                <a
                  href={getWhatsAppOrderLink(drink.name, drink.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#1E1714] hover:text-[#8C5832] transition-colors group/btn py-1"
                >
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C58A4B] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
