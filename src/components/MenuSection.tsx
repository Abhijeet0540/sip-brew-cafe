import React, { useState, useMemo, useEffect } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menu";
import { MenuCategory } from "./MenuCategory";
import { Search, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { getWhatsAppOrderLink } from "@/data/site";

export const MenuSection: React.FC = () => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDrink, setSelectedDrink] = useState<MenuItem | null>(null);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDrink(null);
      }
    };

    if (selectedDrink) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDrink]);

  const categoriesWithCounts = useMemo(() => {
    return [
      { slug: "all", name: "All Drinks", count: MENU_ITEMS.length },
      ...MENU_CATEGORIES.map((cat) => ({
        slug: cat.slug,
        name: cat.name,
        count: MENU_ITEMS.filter((item) => item.category === cat.slug).length,
      })),
    ];
  }, []);

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

  const totalResultsCount = filteredCategories.reduce(
    (acc, curr) => acc + curr.items.length,
    0
  );

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] text-[#1E1714] border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
            <span>The Directory</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1E1714] tracking-tight leading-[1.08]">
            Complete Beverage Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg font-sans text-[#685952] leading-relaxed">
            All 35 drinks prepared with artisanal precision. Tap any card to view detailed notes, flavor options, and order on WhatsApp.
          </p>
        </div>

        {/* Sticky Filter Bar & Real-Time Search */}
        <div className="sticky top-16 sm:top-20 z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-4 mb-8 border-y border-[#1E1714]/10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 scroll-smooth">
              {categoriesWithCounts.map((cat) => {
                const isActive = activeCategorySlug === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryTabClick(cat.slug)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 ${
                      isActive
                        ? "bg-[#1E1714] text-[#FBF8F3] shadow-xs"
                        : "bg-[#EDE6DB]/60 text-[#685952] hover:text-[#1E1714] hover:bg-[#EDE6DB]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-[#C58A4B] text-[#1E1714]"
                          : "bg-[#1E1714]/08 text-[#685952]"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search drinks, flavors..."
                aria-label="Search beverage menu"
                className="w-full bg-[#FBF8F3] border border-[#1E1714]/15 rounded-full pl-9 pr-8 py-2 text-xs font-sans text-[#1E1714] placeholder-[#685952]/60 focus:outline-none focus:border-[#C58A4B] transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-[#685952] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#685952] hover:text-[#1E1714]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories & Cards */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-6">
            {filteredCategories.map(({ category, items }) => (
              <MenuCategory
                key={category.id}
                category={category}
                items={items}
                onSelectItem={(item) => setSelectedDrink(item)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-t border-[#1E1714]/10">
            <h3 className="font-editorial text-3xl text-[#1E1714] mb-2">
              No drinks matched "{searchQuery}"
            </h3>
            <p className="text-sm text-[#685952] font-sans mb-6">
              Try searching by name, flavor note, or clear your query to view the full directory.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategorySlug("all");
              }}
              className="px-6 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#1E1714] text-[#FBF8F3] hover:bg-[#8C5832] transition-colors"
            >
              Reset Search &amp; Filter
            </button>
          </div>
        )}

        {/* Ledger Bottom Summary Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E1714]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#685952]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4E5D46]" />
            <span>Showing {totalResultsCount} items · Prices in Indian Rupees (₹)</span>
          </div>

          <div>
            <a
              href={getWhatsAppOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#1E1714] hover:text-[#8C5832] transition-colors"
            >
              <span>Custom order or takeaway inquiry? Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C58A4B]" />
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* EDITORIAL DRINK DETAIL POPUP MODAL                             */}
      {/* ============================================================== */}
      {selectedDrink && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedDrink(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1714]/75 backdrop-blur-xs transition-all animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#FBF8F3] rounded-3xl shadow-[0_24px_60px_rgba(30,23,20,0.2)] border border-[#1E1714]/15 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedDrink(null)}
              aria-label="Close details popup"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FBF8F3]/90 border border-[#1E1714]/10 flex items-center justify-center text-[#1E1714] hover:bg-[#1E1714] hover:text-[#FBF8F3] transition-colors shadow-xs"
            >
              <X className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Drink Image Frame */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDE6DB] flex-shrink-0">
              <img
                src={selectedDrink.image}
                alt={selectedDrink.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E1714]/90 text-[#FBF8F3] text-[10px] font-sans font-semibold uppercase tracking-wider">
                {selectedDrink.category.replace("-", " ")}
              </div>
            </div>

            {/* Drink Details Content */}
            <div className="p-6 sm:p-8 flex flex-col overflow-y-auto space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8C5832] block mb-1">
                    Specialty Preparation
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#1E1714] leading-tight">
                    {selectedDrink.name}
                  </h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-sans font-semibold text-2xl sm:text-3xl text-[#1E1714] block">
                    ₹{selectedDrink.price}
                  </span>
                  <span className="block text-[10px] text-[#685952] uppercase tracking-wider mt-0.5">
                    Incl. all taxes
                  </span>
                </div>
              </div>

              <p className="text-sm font-sans text-[#685952] leading-relaxed">
                {selectedDrink.description}
              </p>

              {/* Flavors where available */}
              {selectedDrink.flavors && selectedDrink.flavors.length > 0 && (
                <div className="pt-3 border-t border-[#1E1714]/10">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8C5832] block mb-2">
                    Available Flavor Notes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDrink.flavors.map((flv) => (
                      <span
                        key={flv}
                        className="text-xs px-3 py-1 rounded-full bg-[#EDE6DB]/70 border border-[#1E1714]/10 text-[#1E1714] font-medium"
                      >
                        {flv}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedDrink.notes && (
                <p className="text-xs text-[#8C5832] italic font-sans">
                  * {selectedDrink.notes}
                </p>
              )}

              {/* Action Buttons: Primary WhatsApp Order & Close */}
              <div className="pt-4 border-t border-[#1E1714]/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppOrderLink(selectedDrink.name, selectedDrink.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#1E1714] text-[#FBF8F3] hover:bg-[#8C5832] transition-colors text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#C58A4B]" />
                  <span>Order on WhatsApp (₹{selectedDrink.price})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedDrink(null)}
                  className="py-3 px-5 rounded-full border border-[#1E1714]/20 text-[#685952] hover:text-[#1E1714] hover:border-[#1E1714] transition-colors text-xs font-sans font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
