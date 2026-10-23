import React from "react";
import { MenuItem, MenuCategory as MenuCategoryType } from "@/data/menu";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface MenuCategoryProps {
  category: MenuCategoryType;
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  category,
  items,
  onSelectItem,
}) => {
  return (
    <div
      id={`cat-${category.slug}`}
      className="scroll-mt-32 pt-10 pb-12 border-b border-[#251811]/10 last:border-b-0"
    >
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-[#251811]/15 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-caramel-500 shadow-sm" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-600">
              {category.subtitle}
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#251811] font-normal tracking-tight">
            {category.name}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#80776C] max-w-md font-sans leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Items List - 2 Column Layout with Drink Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group cursor-pointer p-4 rounded-3xl bg-[#FAF7F0] border border-[#251811]/10 hover:border-caramel-500/50 hover:bg-[#FFFDF9] hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 sm:gap-5"
          >
            {/* Drink Thumbnail Image */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#EBDDC9] flex-shrink-0 border border-[#251811]/10 shadow-warm-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-editorial group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {item.signature && (
                <div className="absolute top-1.5 left-1.5 p-1 rounded-full bg-[#251811]/80 backdrop-blur-sm text-caramel-400">
                  <Sparkles className="w-3 h-3" />
                </div>
              )}
            </div>

            {/* Drink Information */}
            <div className="flex-grow min-w-0 flex flex-col justify-between h-full py-0.5">
              <div>
                {/* Name & Price */}
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2 truncate">
                    <h4 className="font-editorial text-xl sm:text-2xl text-[#251811] group-hover:text-coffee-600 transition-colors truncate">
                      {item.name}
                    </h4>
                  </div>
                  <span className="font-sans font-bold text-base sm:text-lg text-[#251811] flex-shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#80776C] leading-relaxed line-clamp-2 pr-2 font-sans">
                  {item.description}
                </p>

                {/* Flavor tags */}
                {item.flavors && item.flavors.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-1">
                    <span className="text-[10px] font-semibold uppercase text-coffee-600 tracking-wider">
                      Flavors:
                    </span>
                    {item.flavors.slice(0, 3).map((flv) => (
                      <span
                        key={flv}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#F4EFE5] border border-[#251811]/10 text-[#251811]"
                      >
                        {flv}
                      </span>
                    ))}
                    {item.flavors.length > 3 && (
                      <span className="text-[10px] text-[#80776C]">
                        +{item.flavors.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* View detail hover cue */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-medium text-coffee-600/70 group-hover:text-caramel-600 transition-colors">
                <span className="group-hover:underline">Tap to customize / order</span>
                <div className="w-6 h-6 rounded-full bg-[#F4EFE5] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 text-caramel-600" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Flavors Note (For Frappes & Hot Chocolates) */}
      {category.sharedFlavorsNote && (
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#FAF7F0] border border-caramel-500/30 shadow-warm-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-caramel-500" />
              <span className="text-xs uppercase font-semibold tracking-wider text-coffee-700">
                {category.sharedFlavorsNote.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {category.sharedFlavorsNote.flavors.map((flv) => (
                <span
                  key={flv}
                  className="text-xs px-3 py-1 rounded-full bg-[#F4EFE5] border border-[#251811]/15 text-[#251811] font-medium shadow-xs"
                >
                  {flv}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-[#80776C] italic font-sans bg-[#F4EFE5] px-3 py-1.5 rounded-lg border border-[#251811]/10">
            * Selected as flavor choices with no extra charge
          </span>
        </div>
      )}
    </div>
  );
};
