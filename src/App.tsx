import React, { useEffect } from "react";
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

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  // Initialize Lenis buttery-smooth inertial scrolling synced with GSAP ScrollTrigger
  useEffect(() => {
    // Respect user's reduced motion settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease
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
    <div className="min-h-screen bg-[#FBF8F3] text-[#1E1714] flex flex-col selection:bg-[#C58A4B]/25 selection:text-[#1E1714]">
      {/* 01. Announcement Bar & Minimalist Sticky Editorial Header */}
      <Navbar />

      {/* Main Editorial Sections */}
      <main className="flex-grow">
        {/* 02. The Editorial Hero - Asymmetric Split Layout & Monumental Typography */}
        <Hero />

        {/* 03. Brand Manifesto ("A Moment to Yourself") - Two-Column Spread */}
        <BrandStory />

        {/* 04. Curated Signatures Showcase - Lookbook Grid of 6 Drinks */}
        <FeaturedDrinks />

        {/* 05. Interactive Complete Beverage Menu - All 35 Drinks in Open Ledger */}
        <MenuSection />

        {/* 06. The Atmosphere & Craft Lookbook - Visual Photo Essay */}
        <CoffeeExperience />

        {/* 07. Destination, Hours & Direct Contact - Store Destination Guide */}
        <VisitSection />
      </main>

      {/* 08. Refined Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
