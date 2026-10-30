import React from "react";
import { MenuItem, MenuCategory as MenuCategoryType } from "@/data/menu";
import { ArrowUpRight, Eye } from "lucide-react";
import { getWhatsAppOrderLink } from "@/data/site";

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
      className="scroll-mt-32 pt-12 pb-14 border-b border-[#1E1714]/10 last:border-b-0"
    >
      {/* Category Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-[#1E1714]/15 gap-4">
        <div>
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] block mb-1">
            {category.subtitle}
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#1E1714] tracking-tight">
            {category.name}
          </h3>
        </div>
        <p className="text-sm text-[#685952] max-w-md font-sans leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Shared Flavors Callout if applicable */}
      {category.sharedFlavorsNote && (
        <div className="mb-8 p-4 rounded-xl bg-[#EDE6DB]/60 border border-[#1E1714]/08 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <span className="font-semibold uppercase tracking-wider text-[#8C5832]">
            {category.sharedFlavorsNote.label}:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {category.sharedFlavorsNote.flavors.map((flavor) => (
              <span
                key={flavor}
                className="px-2.5 py-1 rounded-full bg-[#FBF8F3] text-[#1E1714] border border-[#1E1714]/10"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Drink Cards Grid in Particular Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-[#FBF8F3] border border-[#1E1714]/10 hover:border-[#8C5832]/50 hover:shadow-[0_8px_24px_rgba(30,23,20,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Drink Thumbnail Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#EDE6DB] flex-shrink-0 border border-[#1E1714]/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {item.signature && (
                  <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#1E1714]/85 text-[#FBF8F3] text-[9px] font-sans font-semibold uppercase tracking-widest">
                    Signature
                  </div>
                )}
              </div>

              {/* Drink Information */}
              <div className="flex-grow min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-editorial text-xl sm:text-2xl text-[#1E1714] group-hover:text-[#8C5832] transition-colors leading-tight truncate">
                    {item.name}
                  </h4>
                  <span className="font-sans font-semibold text-base sm:text-lg text-[#1E1714] flex-shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#685952] leading-relaxed line-clamp-2 font-sans mb-2">
                  {item.description}
                </p>

                {/* Flavor tags */}
                {item.flavors && item.flavors.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    {item.flavors.slice(0, 3).map((flv) => (
                      <span
                        key={flv}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE6DB]/60 text-[#1E1714] border border-[#1E1714]/08"
                      >
                        {flv}
                      </span>
                    ))}
                    {item.flavors.length > 3 && (
                      <span className="text-[10px] text-[#685952]">
                        +{item.flavors.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Card Actions: Quick Details Popup & Direct WhatsApp */}
            <div className="mt-4 pt-3.5 border-t border-[#1E1714]/08 flex items-center justify-between text-xs font-sans">
              <span className="inline-flex items-center gap-1.5 text-[#685952] group-hover:text-[#1E1714] transition-colors font-medium">
                <Eye className="w-3.5 h-3.5 text-[#C58A4B]" />
                <span>View Details</span>
              </span>

              <a
                href={getWhatsAppOrderLink(item.name, item.price)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#1E1714] bg-[#EDE6DB] hover:bg-[#1E1714] hover:text-[#FBF8F3] transition-all"
              >
                <span>Order on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-[#C58A4B]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
