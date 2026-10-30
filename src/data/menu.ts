export interface MenuItem {
  id: string;
  name: string;
  category: "hot-coffee" | "iced-coffee" | "frappes" | "non-coffee-hot" | "non-coffee-iced" | "cold-brew";
  price: number;
  description: string;
  flavors?: string[];
  signature?: boolean;
  popular?: boolean;
  image: string;
  notes?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: "hot-coffee" | "iced-coffee" | "frappes" | "non-coffee-hot" | "non-coffee-iced" | "cold-brew";
  subtitle: string;
  description: string;
  sharedFlavorsNote?: {
    label: string;
    flavors: string[];
  };
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    slug: "hot-coffee",
    subtitle: "Calibrated Espresso & Steamed Microfoam",
    description: "Classic espresso extractions pulled through freshly ground beans, combined with silky textured whole milk and warm aromatic comfort."
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    slug: "iced-coffee",
    subtitle: "Chilled Espresso, Velvet Layers & Ice",
    description: "Chilled espresso poured over crystal-clear artisan ice, silky cold milk, and signature flavor infusions designed for refreshing balance."
  },
  {
    id: "frappes",
    name: "Frappes",
    slug: "frappes",
    subtitle: "Thick Blended Iced Coffee Indulgence",
    description: "Rich espresso and iced dairy blended thick to frosty perfection, served chilled with optional artisanal flavor infusions.",
    sharedFlavorsNote: {
      label: "Available Frappe Flavor Infusions",
      flavors: ["Irish", "Hazelnut", "Vanilla", "Tiramisu", "Caramel", "Blueberry"]
    }
  },
  {
    id: "non-coffee-hot",
    name: "Non-Coffee Hot",
    slug: "non-coffee-hot",
    subtitle: "European Cocoa & Warming Comfort",
    description: "Decadent Dutch cocoa melted into steamed velvet milk, providing caffeine-free warmth and nostalgic comfort.",
    sharedFlavorsNote: {
      label: "Hot Chocolate Flavor Choices",
      flavors: ["Vanilla", "Caramel", "Nutella", "Marshmallow"]
    }
  },
  {
    id: "non-coffee-iced",
    name: "Non-Coffee Iced",
    slug: "non-coffee-iced",
    subtitle: "Chilled Berry Cocoas & Creamy Infusions",
    description: "Crisp iced chocolate creations and layered creamy specialties without coffee, highlighting balanced fruit reductions and cold cocoa."
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    slug: "cold-brew",
    subtitle: "18-Hour Slow Immersion Extractions",
    description: "Steeped cold for eighteen uninterrupted hours to eliminate acidity and bitterness, yielding deep sweetness and round body."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Category A: Hot Coffee ---
  {
    id: "hc-1",
    name: "Espresso / Doppio",
    category: "hot-coffee",
    price: 69,
    description: "Intense, full-bodied single or double extraction showcasing chocolate, hazelnut, and golden tiger-stripe crema.",
    image: "/images/espresso-cup.jpg",
    popular: true
  },
  {
    id: "hc-2",
    name: "Americano",
    category: "hot-coffee",
    price: 99,
    description: "Rich double shot espresso elongated with hot purified water for a clean, aromatic cup.",
    image: "/images/americano.jpg",
    popular: false
  },
  {
    id: "hc-3",
    name: "Cappuccino",
    category: "hot-coffee",
    price: 119,
    description: "Harmonious balance of bold espresso, sweet steamed milk, and a dense pillow of velvety microfoam.",
    image: "/images/cappuccino.jpg",
    popular: true
  },
  {
    id: "hc-4",
    name: "Café Latte",
    category: "hot-coffee",
    price: 129,
    description: "Smooth espresso poured into textured milk with freehand rosetta art. Subtle, comforting, and customizable.",
    flavors: ["Caramel", "Tiramisu", "Hazelnut", "Vanilla", "Saffron"],
    signature: true,
    popular: true,
    image: "/images/cafe-latte-art.jpg"
  },
  {
    id: "hc-5",
    name: "Cortado",
    category: "hot-coffee",
    price: 99,
    description: "Spanish-style equal ratio of espresso and warm textured milk to soften acidity while keeping espresso forward.",
    image: "/images/cortado.jpg",
    popular: false
  },
  {
    id: "hc-6",
    name: "Macchiato",
    category: "hot-coffee",
    price: 99,
    description: "Freshly extracted espresso stained with a gentle dollop of warm milk foam.",
    image: "/images/macchiato-ceramic.jpg",
    popular: false
  },
  {
    id: "hc-7",
    name: "Flat White",
    category: "hot-coffee",
    price: 129,
    description: "Double ristretto shot crowned with a thin, glossy veil of textured microfoam for maximum coffee sweetness.",
    image: "/images/flat-white.jpg",
    popular: true
  },
  {
    id: "hc-8",
    name: "Café Mocha",
    category: "hot-coffee",
    price: 129,
    description: "Rich single-origin espresso melted together with artisanal cocoa and steamed creamy milk.",
    image: "/images/cafe-mocha.jpg",
    popular: false
  },
  {
    id: "hc-9",
    name: "Spanish Latte",
    category: "hot-coffee",
    price: 129,
    description: "Decadent layered indulgence of sweet condensed milk, calibrated espresso, and steamed milk with cinnamon touch.",
    signature: true,
    popular: true,
    image: "/images/spanish-latte-glass.jpg"
  },

  // --- Category B: Iced Coffee ---
  {
    id: "ic-1",
    name: "Iced Doppio",
    category: "iced-coffee",
    price: 179,
    description: "Double shot espresso flash-chilled directly over crystal clear ice cubes for instant bright energy.",
    image: "/images/iced-doppio.jpg",
    popular: false
  },
  {
    id: "ic-2",
    name: "Iced Americano",
    category: "iced-coffee",
    price: 99,
    description: "Crisp espresso poured over chilled water and dense clear ice cubes for a revitalizing profile.",
    image: "/images/iced-americano.jpg",
    popular: true
  },
  {
    id: "ic-3",
    name: "Iced Caramel Macchiato",
    category: "iced-coffee",
    price: 139,
    description: "Vanilla-kissed cold milk on the rocks, marked with fresh espresso and drizzled with buttery golden caramel.",
    signature: true,
    popular: true,
    image: "/images/iced-caramel-macchiato-premium.jpg"
  },
  {
    id: "ic-4",
    name: "Iced Mocha",
    category: "iced-coffee",
    price: 149,
    description: "Shaken iced espresso combined with rich chocolate ganache and cold whole milk.",
    image: "/images/iced-mocha.jpg",
    popular: false
  },
  {
    id: "ic-5",
    name: "Black Smith",
    category: "iced-coffee",
    price: 159,
    description: "Sip & Brew's bold signature cold extraction with smoky, dark roast aromatic undertones.",
    signature: true,
    popular: true,
    image: "/images/iced-coffee-stone.jpg",
    notes: "Signature recipe preserved exactly as crafted."
  },
  {
    id: "ic-6",
    name: "Coconut Iced Latte",
    category: "iced-coffee",
    price: 129,
    description: "Toasted coconut milk infusion shaken with chilled espresso and poured over ice.",
    image: "/images/coconut-iced-latte.jpg",
    popular: false
  },
  {
    id: "ic-7",
    name: "Lychee Sparkling Americano",
    category: "iced-coffee",
    price: 109,
    description: "Effervescent botanical sparkling soda, floral lychee reduction, and floating dark espresso.",
    signature: true,
    popular: true,
    image: "/images/lychee-sparkling-americano.jpg"
  },
  {
    id: "ic-8",
    name: "Nutella Iced Latte",
    category: "iced-coffee",
    price: 139,
    description: "Glass rimmed with rich chocolate hazelnut Nutella, stirred with chilled milk, ice, and double espresso.",
    signature: true,
    popular: true,
    image: "/images/nutella-iced-latte-premium.jpg"
  },
  {
    id: "ic-9",
    name: "Blueberry Iced Latte",
    category: "iced-coffee",
    price: 139,
    description: "Wild mountain blueberry compote layered with silky cold milk and rich espresso.",
    image: "/images/blueberry-iced-latte.jpg",
    popular: false
  },
  {
    id: "ic-10",
    name: "Cracked Chocolate Iced Latte",
    category: "iced-coffee",
    price: 149,
    description: "Cup coated with hardened dark chocolate shell that shatters delightfully into the iced latte as you squeeze.",
    signature: true,
    popular: true,
    image: "/images/cracked-chocolate-iced-latte.jpg"
  },
  {
    id: "ic-11",
    name: "Pistachio Iced Latte",
    category: "iced-coffee",
    price: 159,
    description: "Creamy roasted pistachio paste layered with chilled milk, ice, and smooth espresso.",
    image: "/images/pistachio-iced-latte.jpg",
    popular: true
  },

  // --- Category C: Frappes ---
  {
    id: "fr-1",
    name: "Cold Coffee",
    category: "frappes",
    price: 139,
    description: "Classic creamy café-style blended frappe whipped thick with espresso, milk, and sweet cream.",
    image: "/images/cold-coffee.jpg",
    popular: true
  },
  {
    id: "fr-2",
    name: "White Chocolate Frappe",
    category: "frappes",
    price: 149,
    description: "Sweet white chocolate ganache and espresso blended with crushed ice and cream.",
    image: "/images/white-chocolate-frappe.jpg",
    popular: false
  },
  {
    id: "fr-3",
    name: "Dark Mocha Frappe",
    category: "frappes",
    price: 149,
    description: "70% bittersweet cocoa and dark roast espresso blended thick, topped with cream and shaved dark chocolate.",
    signature: true,
    popular: true,
    image: "/images/dark-mocha-frappe-premium.jpg"
  },
  {
    id: "fr-4",
    name: "Mocha Frappe",
    category: "frappes",
    price: 149,
    description: "Our signature blended iced mocha, available with your choice of artisanal flavor infusions.",
    image: "/images/mocha-frappe-glass.jpg",
    popular: false
  },

  // --- Category D: Non-Coffee Hot ---
  {
    id: "nch-1",
    name: "Classic Hot Chocolate",
    category: "non-coffee-hot",
    price: 129,
    description: "Rich melted European chocolate blended into warm steamed milk and crowned with dense velvety foam.",
    signature: true,
    popular: true,
    image: "/images/hot-chocolate.jpg",
    notes: "Choose your favorite flavor: Vanilla, Caramel, Nutella, or Marshmallow."
  },

  // --- Category E: Non-Coffee Iced ---
  {
    id: "nci-1",
    name: "Iced Caramel Cocoa",
    category: "non-coffee-iced",
    price: 139,
    description: "Chilled Dutch cocoa swirled with salted caramel syrup and poured over cold milk and ice.",
    image: "/images/iced-caramel-macchiato-premium.jpg",
    popular: true
  },
  {
    id: "nci-2",
    name: "Strawberry Cocoa",
    category: "non-coffee-iced",
    price: 139,
    description: "Sweet ripe strawberry puree layered beneath rich iced chocolate milk.",
    image: "/images/blueberry-iced-latte.jpg",
    popular: true
  },
  {
    id: "nci-3",
    name: "Coco Cream Latte",
    category: "non-coffee-iced",
    price: 139,
    description: "Naturally sweet coconut cream shaken with cold milk and crowned with a delicate vanilla cold foam layer.",
    image: "/images/coconut-iced-latte.jpg",
    popular: false
  },

  // --- Category F: Cold Brew ---
  {
    id: "cb-1",
    name: "Mont Blanc Cold Brew",
    category: "cold-brew",
    price: 159,
    description: "Inspired by the alpine peak: 18-hour dark cold brew topped with dense sweetened chestnut cream and cocoa dusting.",
    signature: true,
    popular: true,
    image: "/images/mont-blanc-cold-brew.jpg"
  },
  {
    id: "cb-2",
    name: "Vietnamese Cold Brew",
    category: "cold-brew",
    price: 159,
    description: "Slow-steeped dark roast cold brew poured over thick sweet condensed milk and crushed crystal ice.",
    image: "/images/spanish-latte-glass.jpg",
    popular: true
  },
  {
    id: "cb-3",
    name: "Lychee Cold Brew",
    category: "cold-brew",
    price: 159,
    description: "Fruity floral lychee infusion combined with smooth, low-acid cold brew coffee.",
    image: "/images/lychee-sparkling-americano.jpg",
    popular: false
  },
  {
    id: "cb-4",
    name: "Classic Cold Foam Cold Brew",
    category: "cold-brew",
    price: 149,
    description: "Signature 18-hour steeped cold brew crowned with a cloud of aerated vanilla cold foam.",
    image: "/images/mont-blanc-cold-brew.jpg",
    signature: true,
    popular: true
  },
  {
    id: "cb-5",
    name: "Watermelon Mint Cold Brew",
    category: "cold-brew",
    price: 159,
    description: "Crisp crushed watermelon juice, bruised garden mint, and chilled cold brew over ice.",
    image: "/images/iced-americano.jpg",
    popular: false
  },
  {
    id: "cb-6",
    name: "Honey Cold Foam Cold Brew",
    category: "cold-brew",
    price: 159,
    description: "Wildflower honey whipped into silky cold foam atop smooth dark cold brew.",
    image: "/images/mont-blanc-cold-brew.jpg",
    popular: false
  },
  {
    id: "cb-7",
    name: "Cranberry Cold Brew",
    category: "cold-brew",
    price: 169,
    description: "Tart cranberry reduction providing wine-like fruit acidity to complement the chocolate notes of slow cold brew.",
    image: "/images/sip-brew-iced-pour.jpg",
    popular: false
  }
];

export const FEATURED_DRINKS: MenuItem[] = [
  MENU_ITEMS.find((item) => item.name === "Cracked Chocolate Iced Latte")!,
  MENU_ITEMS.find((item) => item.name === "Mont Blanc Cold Brew")!,
  MENU_ITEMS.find((item) => item.name === "Spanish Latte")!,
  MENU_ITEMS.find((item) => item.name === "Nutella Iced Latte")!,
  MENU_ITEMS.find((item) => item.name === "Pistachio Iced Latte")!,
  MENU_ITEMS.find((item) => item.name === "Dark Mocha Frappe")!,
].filter(Boolean);

