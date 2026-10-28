import React, { useState, useMemo } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menu";
import { SITE_CONFIG } from "@/data/site";
import { MenuCategory } from "./MenuCategory";
import { Search, X, Coffee, Mail, Instagram, Copy, Check } from "lucide-react";

interface MenuSectionProps {
  selectedItemModal: MenuItem | null;
  onSelectItem: (item: MenuItem | null) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedItemModal,
  onSelectItem,
}) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Filter items by category & search
  const filteredCategories = useMemo(() => {
    return MENU_CATEGORIES.map((cat) => {
      let items = MENU_ITEMS.filter((item) => item.category === cat.slug);

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        items = items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.flavors?.some((f) => f.toLowerCase().includes(query))
        );
      }

      return {
        category: cat,
        items,
      };
    }).filter((group) => {
      if (activeCategorySlug !== "all" && group.category.slug !== activeCategorySlug) {
        return false;
      }
      return group.items.length > 0;
    });
  }, [activeCategorySlug, searchQuery]);

  // Handle Tab Click with smooth scrolling directly to that section
  const handleCategoryTabClick = (slug: string) => {
    setActiveCategorySlug(slug);

    if (slug === "all") {
      const menuEl = document.getElementById("menu");
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setTimeout(() => {
        const targetEl = document.getElementById(`cat-${slug}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  const handleEmailInquiry = (item: MenuItem) => {
    const subject = encodeURIComponent(`Order Inquiry: ${item.name} (Sip & Brew)`);
    const body = encodeURIComponent(
      `Hi Sip & Brew Team,\n\nI would like to inquire about ordering ${item.name} (₹${item.price}).\n\nPlease let me know if it's currently available!\n\nThank you!`
    );
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyOrder = (item: MenuItem) => {
    navigator.clipboard.writeText(
      `Sip & Brew Order Inquiry: ${item.name} - ₹${item.price}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="menu"
      className="py-20 sm:py-36 bg-[#F4EFE5] text-[#251811] relative overflow-hidden"
    >
      {/* Floating Coffee Beans Background Showcase */}
      <div className="absolute top-12 right-2 sm:right-12 w-28 sm:w-44 md:w-56 opacity-30 pointer-events-none select-none z-0 animate-float-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-ai-generated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-6"
        />
      </div>
      <div className="absolute top-1/3 -left-6 sm:left-4 w-28 sm:w-44 md:w-56 opacity-25 pointer-events-none select-none z-0 animate-drift-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/roasted-coffee-beans-falling-aromatic-rich.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>
      <div className="absolute bottom-24 right-4 sm:right-16 w-28 sm:w-44 md:w-52 opacity-30 pointer-events-none select-none z-0 animate-float-reverse mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-bean-white-background.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-12"
        />
      </div>

      {/* Panoramic Coffee Beans Border Edge along Menu bottom */}
      <div className="absolute -bottom-8 left-0 right-0 w-full h-20 sm:h-28 opacity-20 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply">
        <img
          src="/images/coffee-beans-pattern-design.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-coffee-600 mb-3">
            <Coffee className="w-3.5 h-3.5 text-caramel-500" />
            <span>Crafted With Care</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium text-[#251811] tracking-tight leading-[1.12]">
            The Complete Beverage Menu
          </h2>
          <p className="mt-4 text-sm sm:text-lg font-sans text-[#80776C] leading-relaxed">
            Every cup prepared with calibrated precision. All prices in Indian Rupees (₹), inclusive of taxes. Tap any category to jump instantly.
          </p>
        </div>

        {/* Sticky Filter & Search Bar */}
        <div className="sticky top-16 sm:top-20 z-30 mb-8 sm:mb-12 bg-[#F4EFE5]/95 backdrop-blur-md py-3 sm:py-4 px-2 -mx-2 rounded-2xl border-y border-[#251811]/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 shadow-warm-sm">
          {/* Category Tabs with direct scroll on tap */}
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none no-scrollbar"
          >
            <button
              onClick={() => handleCategoryTabClick("all")}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-caramel-500 ${
                activeCategorySlug === "all"
                  ? "bg-[#251811] text-[#FAF7F0] shadow-warm-md scale-[1.02]"
                  : "bg-[#FAF7F0] text-[#251811]/80 hover:text-[#251811] hover:bg-[#FAF7F0] hover:border-caramel-400 border border-[#251811]/10 shadow-xs"
              }`}
            >
              All Drinks ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryTabClick(cat.slug)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-caramel-500 ${
                  activeCategorySlug === cat.slug
                    ? "bg-[#251811] text-[#FAF7F0] shadow-warm-md scale-[1.02]"
                    : "bg-[#FAF7F0] text-[#251811]/80 hover:text-[#251811] hover:bg-[#FAF7F0] hover:border-caramel-400 border border-[#251811]/10 shadow-xs"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-[#80776C] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search coffee or flavor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF7F0] border border-[#251811]/15 text-sm text-[#251811] placeholder-[#80776C]/70 focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-[#80776C] hover:text-[#251811]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Container */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-10">
            {filteredCategories.map(({ category, items }) => (
              <MenuCategory
                key={category.id}
                category={category}
                items={items}
                onSelectItem={onSelectItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAF7F0] rounded-3xl border border-[#251811]/10 shadow-warm-sm">
            <Coffee className="w-10 h-10 text-caramel-500 mx-auto mb-3" />
            <h3 className="font-editorial text-2xl text-[#251811]">No drinks matched "{searchQuery}"</h3>
            <p className="text-sm text-[#80776C] mt-1">Try another search term or reset the menu.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategorySlug("all");
              }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 transition-colors shadow-warm-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Drink Detail Modal */}
      {selectedItemModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#251811]/70 backdrop-blur-sm transition-all"
        >
          <div className="relative w-full max-w-lg bg-[#FAF7F0] rounded-3xl shadow-warm-xl border border-[#251811]/15 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Close Button */}
            <button
              onClick={() => onSelectItem(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F0]/90 backdrop-blur-md border border-[#251811]/10 flex items-center justify-center text-[#251811] hover:bg-[#251811] hover:text-[#FAF7F0] transition-colors shadow-sm"
            >
              <X className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Drink Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EBDDC9]">
              <img
                src={selectedItemModal.image}
                alt={selectedItemModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#251811]/85 backdrop-blur-md text-[#FAF7F0] text-[10px] font-semibold uppercase tracking-wider">
                {selectedItemModal.category.replace("-", " ")}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-coffee-600 block mb-1">
                    Authentic Recipe
                  </span>
                  <h3 className="font-editorial text-3xl text-[#251811]">
                    {selectedItemModal.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-sans font-bold text-2xl text-[#251811]">
                    ₹{selectedItemModal.price}
                  </span>
                  <span className="block text-[10px] text-[#80776C] uppercase tracking-wider">
                    Inc. all taxes
                  </span>
                </div>
              </div>

              <p className="text-sm font-sans text-[#80776C] leading-relaxed">
                {selectedItemModal.description}
              </p>

              {/* Flavors if applicable */}
              {selectedItemModal.flavors && selectedItemModal.flavors.length > 0 && (
                <div className="pt-2 border-t border-[#251811]/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-coffee-700 block mb-2">
                    Available Flavor Profiles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItemModal.flavors.map((flv) => (
                      <span
                        key={flv}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#F4EFE5] border border-[#251811]/10 text-[#251811] font-medium"
                      >
                        {flv}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedItemModal.notes && (
                <p className="text-xs text-coffee-600 italic">
                  * {selectedItemModal.notes}
                </p>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#251811]/10 flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => handleEmailInquiry(selectedItemModal)}
                    className="flex-1 py-3 px-5 rounded-full bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 transition-all duration-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-warm-md hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4 text-caramel-400" />
                    <span>Inquire via Email</span>
                  </button>

                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 rounded-full bg-[#FAF7F0] border border-caramel-500/40 text-[#251811] hover:bg-caramel-500 hover:text-[#251811] transition-all duration-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-warm-sm hover:-translate-y-0.5 text-center"
                  >
                    <Instagram className="w-4 h-4 text-caramel-600" />
                    <span>DM on Instagram</span>
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleCopyOrder(selectedItemModal)}
                    className="flex-1 py-2.5 px-4 rounded-full bg-[#F4EFE5] border border-[#251811]/15 text-[#251811] hover:bg-[#EBDDC9] transition-all text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-green-800 font-semibold">Order Details Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#80776C]" />
                        <span>Copy Order Details</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectItem(null)}
                    className="py-2.5 px-5 rounded-full bg-transparent border border-[#251811]/20 text-[#80776C] hover:text-[#251811] transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
