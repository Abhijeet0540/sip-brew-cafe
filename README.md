# ☕ Sip & Brew — Artisanal Specialty Café & Roastery

<div align="center">

![Sip & Brew Banner](/public/images/hero-pour.jpg)

**Coffee · Conversation · Comfort**

A high-end, responsive web experience designed for an artisanal specialty café and roastery. Crafted with modern editorial typography, buttery-smooth inertial scrolling, GSAP micro-interactions, and high-conversion ordering integrations.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black)](https://github.com/darkroomengineering/lenis)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[Explore Live Demo](#-getting-started) · [Key Features](#-key-features) · [Menu & Ordering](#-interactive-menu--ordering) · [Design System](#-design-system)

</div>

---

## 🌟 Key Features

### 1. 🎯 Curved Arched Destination Hero
- **Dynamic Arched Thumbnails**: Interactive curved vertical node layout on desktop and fluid horizontal touch carousel on mobile.
- **Cinematic Backdrops**: Seamless cross-fades between high-resolution signature drinks (Hot Spanish Latte, Caramel Macchiato, Cold Brew, Nutella Latte).
- **Direct Navigation**: Instant call-to-actions linking straight to Menu Discovery and Café Location.

### 2. 🌊 Lenis Butter-Smooth Scrolling & GSAP
- **Inertial Kinetic Momentum**: Silky-smooth scrolling experience synchronized via `requestAnimationFrame` and GSAP ticker at 60/120Hz.
- **Hardware-Accelerated 3D Depth**: Floating roasted coffee bean background elements with gentle organic drifts (`.animate-float-slow`, `.animate-drift-slow`) and natural drop shadows without obstructing interactivity.

### 3. ☕ Complete Interactive Beverage Menu
- **Sticky Category Tabs**: Real-time category switching (`Espresso & Hot`, `Chilled Craft`, `Cold Foam & Frappes`, `Seasonal Craft`) with automatic scroll sync.
- **Instant Search**: Type-ahead filtering across all drinks, notes, and pricing.
- **One-Tap WhatsApp & Clipboard Ordering**: Instant inquiry string generation and copy-to-clipboard feedback with direct WhatsApp integration.

### 4. 🖼️ "Find Your Moment" Expanding Accordion
- **Tactile Photo Slider**: Interactive expanding flex panels revealing café ambiance, tiger-stripe crema, crystal ice brews, and custom takeaway cups.
- **Clean Focus**: Streamlined touch interactions designed to look elegant on both phones and wide desktop monitors.

### 5. 📍 Nagpur Café Visit & Live Map
- **Location & Hours**: Clear breakdown of daily operating hours, address, landmark, and direct Google Maps navigation.
- **Direct Connect**: Verified official contact links for email inquiries and Instagram DM.
- **Lazy-Loaded Google Maps**: Embedded map with low-overhead placeholder preventing initial main-thread blocking.

### 6. 📬 Modern High-End Card Footer
- **Newsletter Subscription**: Interactive pill-shaped input with live feedback states.
- **Three-Column Navigation**: Brand story, signature menu links, and contact channels.
- **Back-to-Top**: Micro-animated circular button with smooth Lenis top scrolling.

---

## 🎨 Editorial Design System & Brand Palette

Sip & Brew is art-directed as an editorial specialty coffee experience inspired by Kinfolk, Cereal Magazine, and modern third-wave roasteries:

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Cream Light** | `#FBF8F3` | Primary page background |
| **Cream Sand** | `#F4EFE6` | Secondary tinted panels & cards |
| **Cream Linen** | `#EDE6DB` | Tertiary accents, chips & subtle fills |
| **Espresso** | `#1E1714` | Deep roasted espresso body & display |
| **Espresso Muted** | `#685952` | Editorial subtext & descriptions |
| **Caramel** | `#C58A4B` | Golden toffee highlight |
| **Cinnamon** | `#8C5832` | Warm earthy brown accent |
| **Olive** | `#4E5D46` | Muted botanical olive accent |
| **Forest** | `#354130` | Deep botanical contrast |
| **Hairline Border** | `rgba(30, 23, 20, 0.08)` | Minimalist dividing rules & borders |

### Typography Hierarchy
| Website Element | Font Family | Weight | Purpose |
| :--- | :--- | :--- | :--- |
| **Headings & Display** | *Instrument Serif* | 400, 400i | Elegant, expressive editorial voice |
| **Body, Descriptions** | *DM Sans* | 400 (Regular) | Clean readability and modern humanist feel |
| **Navigation & Buttons** | *DM Sans* | 500–600 | High-contrast clarity and touch precision |
| **Prices & Labels** | *DM Sans* | 600 (SemiBold) | Instant financial legibility and hierarchy |

---

## 📁 Project Structure

```text
sip-brew/
├── public/
│   ├── images/              # High-resolution beverage photography & PNG bean assets
│   └── models/              # 3D cup model assets (.glb)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred header with brand logo & quick links
│   │   ├── Hero.tsx             # Arched drink carousel & headline introduction
│   │   ├── BrandStory.tsx       # Philosophy, craft values, and editorial storytelling
│   │   ├── FeaturedDrinks.tsx   # Curated trio of signature beverages
│   │   ├── MenuSection.tsx      # Comprehensive beverage menu, search, & category tabs
│   │   ├── CoffeeExperience.tsx # Expanding accordion atmosphere slider
│   │   ├── VisitSection.tsx     # Address, hours, contact cards, & Google Map
│   │   └── Footer.tsx           # Newsletter pill, 3-column links, & back-to-top
│   ├── data/
│   │   ├── menu.ts              # Categorized menu items, descriptions, & INR prices
│   │   └── site.ts              # Café metadata, address, hours, & contact details
│   ├── App.tsx                  # Root app layout with Lenis & ScrollTrigger sync
│   ├── index.css                # Tailwind base styles, keyframe floats, & scrollbar resets
│   └── main.tsx                 # React DOM mount point
├── index.html                   # HTML entry with semantic meta tags
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Extended color tokens & typography configuration
├── tsconfig.json                # Strict TypeScript configuration
└── vite.config.ts               # Vite build & path alias setup
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhijeet0540/sip-brew-cafe.git
   cd sip-brew-cafe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port shown in your terminal).

---

## 🛠️ Build for Production

To generate an optimized production bundle:

```bash
npm run build
```

To preview the generated production build locally:

```bash
npm run preview
```

---

## 📱 Mobile Responsiveness & Performance
- **Tested Across Viewports**: Optimized for modern mobile displays (iPhone SE 375px, iPhone 12/13/14 390px, Android 414px, iPad/Tablets, and Desktop 1920px+).
- **Zero Scrollbar Leak**: Native horizontal scrollbars are cleanly suppressed using cross-browser CSS utilities while preserving touch & swipe capabilities.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` settings automatically.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

Crafted with care for **Sip & Brew Café**.  
*Every sip has a story.* ☕

</div>
