import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, MessageSquare, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppOrderLink } from "@/data/site";

export const VisitSection: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] text-[#1E1714] border-b border-[#1E1714]/08"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#8C5832] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A4B]" />
            <span>Destination Guide</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1E1714] tracking-tight leading-[1.08]">
            Find our café in Nagpur.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-sans text-[#685952] leading-relaxed">
            Drop in for slow mornings, afternoon conversations, or take your favorite brew to go. Open daily.
          </p>
        </div>

        {/* Two-Column Store Destination Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Address, Hours, Actions, and Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address & Hours Card */}
            <div className="p-7 sm:p-9 rounded-2xl bg-[#FBF8F3] border border-[#1E1714]/10 shadow-sm space-y-7">
              {/* Address Block */}
              <div>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8C5832] block mb-2">
                  Café Address
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1714] mb-2 leading-snug">
                  {SITE_CONFIG.location.shopName}
                </h3>
                <address className="not-italic text-sm font-sans text-[#685952] leading-relaxed space-y-1">
                  <p className="font-medium text-[#1E1714]">
                    Shop No. C1, Rahul Apartment
                  </p>
                  <p>Landmark: Mangalmurti Square, Ring Road</p>
                  <p>Parsodi, Nagpur, Maharashtra — 440022</p>
                </address>
              </div>

              {/* Operating Hours Block */}
              <div className="pt-6 border-t border-[#1E1714]/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8C5832]">
                    Operating Hours
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold text-[#4E5D46]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E5D46] animate-pulse" />
                    Open Daily
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-sm font-sans font-medium text-[#1E1714]">
                    Monday – Sunday
                  </span>
                  <span className="text-base font-sans font-semibold text-[#1E1714]">
                    10:00 AM – 11:30 PM
                  </span>
                </div>
              </div>

              {/* Primary Action Buttons: Maps, Call, WhatsApp */}
              <div className="pt-6 border-t border-[#1E1714]/10 flex flex-col gap-2.5">
                {/* 1. Open in Google Maps */}
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#1E1714] text-[#FBF8F3] hover:bg-[#8C5832] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#C58A4B]" />
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* 2. Call (+91 79 7207 0329) */}
                <a
                  href="tel:+917972070329"
                  className="w-full py-3 px-5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider border border-[#1E1714]/20 text-[#1E1714] hover:bg-[#1E1714]/05 hover:border-[#1E1714] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8C5832]" />
                  <span>CALL (+91 79 7207 0329)</span>
                </a>

                {/* 3. Chat on WhatsApp */}
                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-[#4E5D46] text-[#FBF8F3] hover:bg-[#354130] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Connect Links: Instagram & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FBF8F3] border border-[#1E1714]/10 hover:border-[#8C5832] transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EDE6DB] text-[#1E1714] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E1714] group-hover:text-[#FBF8F3] transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-[#685952] block font-sans">
                    Instagram
                  </span>
                  <span className="text-xs font-medium text-[#1E1714] truncate block">
                    @sipandbrewcafee
                  </span>
                </div>
              </a>

              <a
                href="mailto:sipandbrew@outlook.com"
                className="p-4 rounded-xl bg-[#FBF8F3] border border-[#1E1714]/10 hover:border-[#8C5832] transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EDE6DB] text-[#1E1714] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E1714] group-hover:text-[#FBF8F3] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-[#685952] block font-sans">
                    Email
                  </span>
                  <span className="text-xs font-medium text-[#1E1714] truncate block">
                    sipandbrew@outlook.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Live Embedded Frame with Editorial Framing */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-grow rounded-2xl overflow-hidden bg-[#FBF8F3] border border-[#1E1714]/15 shadow-sm min-h-[420px] lg:min-h-full flex flex-col justify-between">
              {isMapLoaded ? (
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
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#EDE6DB]/40">
                  <div className="w-12 h-12 rounded-full bg-[#1E1714] text-[#FBF8F3] flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-[#C58A4B]" />
                  </div>
                  <h4 className="font-editorial text-2xl text-[#1E1714]">
                    Interactive Map Preview
                  </h4>
                  <p className="text-xs text-[#685952] mt-1 max-w-xs font-sans">
                    Shop No. C1, Rahul Apartment, Mangalmurti Square, Ring Road, Nagpur
                  </p>
                  <button
                    onClick={() => setIsMapLoaded(true)}
                    className="mt-5 px-6 py-2.5 rounded-full bg-[#1E1714] text-[#FBF8F3] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#8C5832] transition-colors"
                  >
                    Load Live Map
                  </button>
                </div>
              )}

              {/* Top Location Badge */}
              <div className="absolute top-4 left-4 z-10 px-4 py-2.5 rounded-xl bg-[#FBF8F3]/95 backdrop-blur-xs border border-[#1E1714]/10 shadow-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#4E5D46]" />
                <span className="text-xs font-sans font-semibold text-[#1E1714]">
                  Sip &amp; Brew Cafe · Nagpur
                </span>
              </div>

              {/* Bottom Quick Directions Action Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-[#FBF8F3]/95 backdrop-blur-xs border border-[#1E1714]/10 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans font-semibold text-[#1E1714] block">
                    Visiting us today?
                  </span>
                  <span className="text-[11px] font-sans text-[#685952]">
                    Mangalmurti Square, Ring Road, Nagpur
                  </span>
                </div>

                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E1714] text-[#FBF8F3] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#8C5832] transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C58A4B]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
