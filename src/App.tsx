import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { FeaturedDrinks } from "./components/FeaturedDrinks";
import { MenuSection } from "./components/MenuSection";
import { CoffeeExperience } from "./components/CoffeeExperience";
import { VisitSection } from "./components/VisitSection";
import { Footer } from "./components/Footer";
import { MenuItem } from "./data/menu";

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(null);

  // Initialize Lenis buttery-smooth inertial scrolling synced with GSAP ScrollTrigger
  useEffect(() => {
    // Respect user's reduced motion settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth exponential ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: false, // Driven by GSAP ticker for 60/120Hz frame synchronization
      anchors: true,
    });

    (window as any).lenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM and images are ready
    const handleRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleRefresh);
    const refreshTimer = setTimeout(handleRefresh, 300);

    return () => {
      window.removeEventListener("load", handleRefresh);
      clearTimeout(refreshTimer);
      delete (window as any).lenis;
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4EFE5] text-[#251811] flex flex-col selection:bg-caramel-500/30 selection:text-[#251811]">
      {/* Sticky Refined Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 01. Hero - Cinematic First Impression */}
        <Hero />

        {/* 02. Brand Story - Scroll-Triggered Editorial Storytelling */}
        <BrandStory />

        {/* 03. Signature Coffee Experience - Curated Showcase */}
        <FeaturedDrinks onSelectItem={(item) => setSelectedItemModal(item)} />

        {/* 04. Complete Beverage Menu - All 6 Categories & Exact Prices */}
        <MenuSection
          selectedItemModal={selectedItemModal}
          onSelectItem={(item) => setSelectedItemModal(item)}
        />

        {/* 05. The Atmosphere - The Sip & Brew Experience */}
        <CoffeeExperience />

        {/* 06. Visit The Café - Location, Hours & Direct Contact */}
        <VisitSection />
      </main>

      {/* 07. Modern High-End Floating Newsletter CTA & 3-Column Dark Green Card Footer */}
      <Footer />
    </div>
  );
};

export default App;
