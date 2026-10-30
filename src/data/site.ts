export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  established: string;
  description: string;
  story: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
    values: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  contact: {
    phone: string;
    displayPhone: string;
    telLink?: string;
    whatsappNumber: string;
    whatsappMessage: string;
    instagramHandle: string;
    instagramUrl: string;
    email: string;
    emailLink?: string;
  };
  location: {
    shopName: string;
    addressLine1: string;
    addressLine2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress?: string;
    landmark: string;
    googleMapsUrl: string;
    embedMapUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  hours: {
    days: string;
    time: string;
    notes?: string;
  }[];
}

export const SITE_CONFIG: SiteConfig = {
  name: "Sip & Brew",
  tagline: "Coffee · Conversation · Comfort.",
  subTagline: "Good Coffee. Great Conversations. Every sip has a story.",
  established: "Est. 2024",
  description:
    "Discover your everyday coffee ritual, from beautifully crafted espresso to refreshing iced favorites, in a warm space designed for slow mornings and genuine connection.",
  story: {
    headline: "More than coffee. A moment to yourself.",
    subheadline: "Crafted with patience, served with warmth.",
    paragraphs: [
      "Some moments are made for slowing down. A familiar cup, a favorite flavor, a good conversation, or a little time away from the rush. Sip & Brew brings these simple pleasures together, one cup at a time.",
      "Rooted in mindful extraction and artisanal roasting, our coffee honors the craft—from calibrated espresso to our signature 18-hour cold brew. But beyond the bean, it is the space we hold for you: a sunlit haven where every table invites unhurried contemplation and heartfelt exchange."
    ],
    values: [
      {
        title: "Artisanal Extraction",
        description:
          "Precisely dialed espresso, steamed velvet microfoam, and slow cold-drip extractions that highlight nuanced single-origin notes.",
        icon: "Coffee",
      },
      {
        title: "Thoughtful Atmosphere",
        description:
          "Tactile ceramic cups, natural white oak surfaces, gentle botanical details, and warm lighting designed for genuine calm.",
        icon: "Sparkles",
      },
      {
        title: "Genuine Connection",
        description:
          "A welcoming neighborhood café where baristas remember your order and friends linger long after the last drop.",
        icon: "Heart",
      },
    ],
  },
  contact: {
    phone: "+91 79 7207 0329",
    displayPhone: "+91 79 7207 0329",
    telLink: "tel:+917972070329",
    whatsappNumber: "917972070329",
    whatsappMessage: "Hi Sip & Brew, I would like to inquire about ordering.",
    instagramHandle: "@sipandbrewcafee",
    instagramUrl: "https://www.instagram.com/sipandbrewcafee",
    email: "sipandbrew@outlook.com",
    emailLink: "mailto:sipandbrew@outlook.com",
  },
  location: {
    shopName: "Sip & Brew Cafe",
    addressLine1: "Shop No. C1, Rahul Apartment",
    addressLine2: "Ring Road, Parsodi",
    area: "Parsodi",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440022",
    fullAddress: "Shop No. C1, Rahul Apartment, Landmark: Mangalmurti Square, Ring Road, Parsodi, Nagpur, Maharashtra - 440022",
    landmark: "Mangalmurti Square, Ring Road",
    googleMapsUrl: "https://maps.app.goo.gl/jcVjD1vFryu3GF7BA?g_st=aw",
    embedMapUrl:
      "https://maps.google.com/maps?q=Sip+and+brew+cafe,+Ring+Road,+Mangalmurti+Square,+shop+no+C1,+Rahul+appartment,+Parsodi,+Nagpur,+Maharashtra+440022&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 21.1189,
      lng: 79.0538,
    },
  },
  hours: [
    {
      days: "Monday – Sunday (Daily)",
      time: "10:00 AM – 11:30 PM",
      notes: "Open daily for dine-in & takeaway",
    },
  ],
};

/**
 * Generates direct 1-tap WhatsApp order links according to prompt spec:
 * https://wa.me/917972070329?text=Hi%20Sip%20%26%20Brew%2C%20I%20would%20like%20to%20order%20the%20{DrinkName}%20({Price})
 */
export const getWhatsAppOrderLink = (drinkName?: string, price?: number | string): string => {
  if (!drinkName) {
    return "https://wa.me/917972070329?text=Hi%20Sip%20%26%20Brew%2C%20I%20would%20like%20to%20order";
  }
  const priceFormatted = typeof price === "number" ? `₹${price}` : price || "";
  const msg = priceFormatted
    ? `Hi Sip & Brew, I would like to order the ${drinkName} (${priceFormatted})`
    : `Hi Sip & Brew, I would like to order the ${drinkName}`;
  return `https://wa.me/917972070329?text=${encodeURIComponent(msg)}`;
};

