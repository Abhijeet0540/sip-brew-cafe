import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURED_DRINKS, MenuItem } from "@/data/menu";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedDrinksProps {
  onSelectItem?: (item: MenuItem) => void;
}

export const FeaturedDrinks: React.FC<FeaturedDrinksProps> = ({ onSelectItem }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof (window as any).lenis?.scrollTo === "function") {
      (window as any).lenis.scrollTo("#menu", { offset: -20, duration: 1.1 });
    } else {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        gridRef.current?.children || [],
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-20 sm:py-36 bg-[#FAF7F0] text-[#251811] border-b border-[#251811]/10 relative overflow-hidden"
    >
      {/* Floating Coffee Beans Background Showcase */}
      
      <div className="absolute bottom-6 left-1/3 w-20 sm:w-28 opacity-25 pointer-events-none select-none z-0 animate-drift-slow mix-blend-multiply filter drop-shadow-sm">
        <img
          src="/images/roasted-coffee-beans-isolated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform -rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-coffee-600 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
              <span>Curated Selections</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#251811] tracking-tight leading-[1.1]">
              Signature Coffee Experience
            </h2>
            <p className="mt-4 text-base sm:text-lg font-sans text-[#80776C] leading-relaxed">
              Carefully calibrated extractions and handcrafted specialties that define the Sip &amp; Brew standard.
            </p>
          </div>

          <div>
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
            >
              <span>Discover the Full Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400" />
            </a>
          </div>
        </div>

        {/* Featured Items Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {FEATURED_DRINKS.map((drink) => (
            <article
              key={drink.id}
              onClick={() => onSelectItem && onSelectItem(drink)}
              className="group cursor-pointer bg-[#FAF7F0] rounded-3xl overflow-hidden border border-[#251811]/12 hover:border-caramel-500/60 hover:bg-[#FFFDF9] transition-all duration-500 shadow-warm-sm hover:shadow-warm-xl hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBDDC9]">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-108"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Price Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#FAF7F0]/95 backdrop-blur-md border border-[#251811]/10 group-hover:bg-[#251811] group-hover:text-[#FAF7F0] transition-colors duration-300 shadow-warm-sm">
                  <span className="font-sans font-bold text-sm">
                    ₹{drink.price}
                  </span>
                </div>

                {/* Category indicator */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#251811]/85 backdrop-blur-md text-[#FAF7F0] text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                  {drink.category.replace("-", " ")}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#251811] group-hover:text-coffee-600 transition-colors">
                      {drink.name}
                    </h3>
                  </div>

                  <p className="text-sm font-sans text-[#80776C] leading-relaxed line-clamp-2">
                    {drink.description}
                  </p>

                  {drink.flavors && drink.flavors.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#251811]/10 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-semibold uppercase text-coffee-600 tracking-wider mr-1">
                        Flavors:
                      </span>
                      {drink.flavors.map((flv) => (
                        <span
                          key={flv}
                          className="text-[11px] font-sans px-2 py-0.5 rounded-md bg-[#F4EFE5] border border-[#251811]/10 text-[#251811]"
                        >
                          {flv}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#251811]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-coffee-600 group-hover:text-[#251811]">
                  <span className="group-hover:underline">Explore Details</span>
                  <div className="w-8 h-8 rounded-full bg-[#F4EFE5] group-hover:bg-caramel-500 group-hover:text-[#251811] border border-[#251811]/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-warm-sm">
                    <ArrowUpRight className="w-4 h-4 text-caramel-600 group-hover:text-[#251811]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
