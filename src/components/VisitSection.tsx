import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Instagram, ArrowUpRight, Navigation, ExternalLink, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONFIG } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export const VisitSection: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Lazy-mount Google Maps only when within 400px of scrolling to it
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keep all cards immediately and permanently visible
  useEffect(() => {
    // Only subtle entrance if motion is allowed, without ever hiding opacity initially
    const ctx = gsap.context(() => {
      // Elements stay 100% visible natively
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="py-20 sm:py-36 bg-[#F4EFE5] text-[#251811] relative overflow-hidden border-b border-[#251811]/10"
    >
      {/* Floating Coffee Beans Background Showcase */}
      
      {/* 2. Scattered Cluster of Roasted Beans */}
      <div className="absolute top-1/2 -left-8 sm:left-4 w-32 sm:w-48 md:w-60 opacity-30 pointer-events-none select-none z-0 animate-drift-slow mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-bean-white-background.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>

      {/* 3. Cascading Vertical Beans with Depth of Field */}
      <div className="absolute bottom-16 right-2 sm:right-16 w-28 sm:w-44 md:w-56 opacity-25 pointer-events-none select-none z-0 animate-float-reverse mix-blend-multiply filter drop-shadow-md">
        <img
          src="/images/coffee-ai-generated.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain transform rotate-6"
        />
      </div>

      {/* 4. Panoramic Border Strip of Coffee Beans along Section Bottom */}
      <div className="absolute -bottom-10 left-0 right-0 w-full h-24 sm:h-32 opacity-20 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply">
        <img
          src="/images/coffee-beans-pattern-design.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-coffee-600 mb-3">
            <MapPin className="w-3.5 h-3.5 text-caramel-500" />
            <span>Café Location &amp; Hours</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#251811] tracking-tight leading-[1.12]">
            Your next favorite cup is waiting.
          </h2>
          <p className="mt-4 text-sm sm:text-lg font-sans text-[#80776C] leading-relaxed">
            Drop by our café in Nagpur for your daily ritual, meet friends over specialty coffee, or take your favorite brew to go.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Address, Hours & Contact Details */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-[#251811]/10 shadow-warm-sm hover:shadow-warm-md hover:border-caramel-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#251811] text-[#FAF7F0] flex items-center justify-center shadow-warm-sm">
                  <MapPin className="w-5 h-5 text-caramel-400 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-coffee-600">
                    Nagpur Café
                  </span>
                  <h3 className="font-editorial text-2xl text-[#251811]">
                    {SITE_CONFIG.location.shopName}
                  </h3>
                </div>
              </div>

              <address className="not-italic text-sm text-[#251811]/90 font-sans leading-relaxed space-y-1">
                <p className="font-semibold text-base text-[#251811]">
                  {SITE_CONFIG.location.addressLine1}
                </p>
                <p>{SITE_CONFIG.location.addressLine2}, {SITE_CONFIG.location.area}</p>
                <p>{SITE_CONFIG.location.city}, {SITE_CONFIG.location.state} — {SITE_CONFIG.location.pincode}</p>
                <p className="text-xs text-[#80776C] pt-1">
                  Landmark: {SITE_CONFIG.location.landmark}
                </p>
              </address>

              <div className="mt-6 pt-5 border-t border-[#251811]/10 flex flex-wrap gap-4">
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-warm-sm hover:-translate-y-0.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-caramel-400 stroke-[2]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-caramel-400/80" />
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-[#251811]/10 shadow-warm-sm hover:shadow-warm-md hover:border-caramel-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-coffee-600 text-[#FAF7F0] flex items-center justify-center shadow-warm-sm">
                  <Clock className="w-5 h-5 text-caramel-300 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-coffee-600">
                    Operating Hours
                  </span>
                  <h3 className="font-editorial text-2xl text-[#251811]">
                    Open Daily
                  </h3>
                </div>
              </div>

              <div className="space-y-3 font-sans text-sm">
                {SITE_CONFIG.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-[#251811]/5 last:border-b-0"
                  >
                    <span className="font-medium text-[#251811]">{h.days}</span>
                    <span className="text-coffee-700 font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Buttons (Official Email & Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}?subject=Inquiry%20from%20Website&body=Hi%20Sip%20%26%20Brew%20team,%0A%0AI%20would%20like%20to%20inquire%20about...`}
                className="p-5 rounded-2xl bg-[#251811] text-[#FAF7F0] hover:bg-coffee-600 hover:shadow-warm-md transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-caramel-500/20 text-caramel-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-[#FAF7F0]/60 block font-sans">
                    Official Email
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-caramel-200 block truncate">
                    {SITE_CONFIG.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 bg-[#FAF7F0] border border-[#251811]/10 hover:border-pink-500/50 hover:shadow-warm-md transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#fd1d1d] to-[#833ab4] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-[#80776C] block font-sans">
                    Instagram DM
                  </span>
                  <span className="text-xs font-semibold text-[#251811] tracking-wider truncate block">
                    {SITE_CONFIG.contact.instagramHandle}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Live Embedded Frame & Café Snapshot */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Interactive Embedded Google Map */}
            <div
              ref={mapContainerRef}
              className="relative flex-grow rounded-3xl overflow-hidden bg-[#FAF7F0] border border-[#251811]/15 shadow-warm-md min-h-[380px] lg:min-h-[460px] flex flex-col justify-between"
            >
              {isMapLoaded ? (
                /* Google Maps Iframe for exact Nagpur location */
                <iframe
                  title="Sip & Brew Cafe Nagpur Google Maps Location"
                  src={SITE_CONFIG.location.embedMapUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0 filter contrast-[1.02]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                /* Lightweight Fast Placeholder to Prevent Main-Thread Blocking */
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#FAF7F0] p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-caramel-500/20 text-coffee-700 flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-caramel-500 animate-bounce" />
                  </div>
                  <h4 className="font-editorial text-2xl text-[#251811]">
                    Interactive Map Preview
                  </h4>
                  <p className="text-xs text-[#80776C] mt-1 max-w-xs">
                    Mangalmurti Square, Ring Road, Parsodi, Nagpur
                  </p>
                  <button
                    onClick={() => setIsMapLoaded(true)}
                    className="mt-4 px-5 py-2.5 rounded-full bg-[#251811] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-coffee-600 transition-colors shadow-sm"
                  >
                    Load Live Map
                  </button>
                </div>
              )}

              {/* Floating Location Overlay Pin */}
              <div className="absolute top-4 left-4 z-10 p-3.5 rounded-2xl bg-[#FAF7F0]/95 backdrop-blur-md border border-[#251811]/10 shadow-warm-md flex items-center gap-3 max-w-xs">
                <div className="w-8 h-8 rounded-full bg-caramel-500 text-[#251811] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-coffee-600 block">
                    Sip &amp; Brew Cafe
                  </span>
                  <span className="text-xs text-[#251811] font-medium leading-tight line-clamp-1">
                    Mangalmurti Square, Nagpur
                  </span>
                </div>
              </div>

              {/* Bottom Quick Directions Action Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-[#FAF7F0]/95 backdrop-blur-md border border-[#251811]/10 shadow-warm-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#251811] block">
                    Visiting us today?
                  </span>
                  <span className="text-[11px] text-[#80776C]">
                    Parsodi, Ring Road, Nagpur
                  </span>
                </div>

                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#251811] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-coffee-600 transition-colors shadow-sm"
                >
                  <Navigation className="w-3 h-3 text-caramel-400" />
                  <span>Navigate</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
