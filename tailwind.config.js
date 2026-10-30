/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FBF8F3', // Primary background
          sand: '#F4EFE6',  // Secondary tinted panels
          linen: '#EDE6DB', // Tertiary accents / borders
          50: '#FBF8F3',
          100: '#F4EFE6',
          200: '#EDE6DB',
          DEFAULT: '#FBF8F3',
        },
        espresso: {
          DEFAULT: '#1E1714',
          muted: '#685952',
          light: '#352B26',
          900: '#150F0D',
        },
        caramel: {
          DEFAULT: '#C58A4B',
          dark: '#B07436',
          light: '#D9A167',
          500: '#C58A4B',
          400: '#D9A167',
          600: '#B07436',
        },
        cinnamon: {
          DEFAULT: '#8C5832',
          dark: '#734423',
        },
        olive: {
          DEFAULT: '#4E5D46',
          dark: '#354130',
        },
        forest: {
          DEFAULT: '#354130',
        },
        hairline: 'rgba(30, 23, 20, 0.08)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'menu': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(37, 24, 17, 0.05)',
        'warm-md': '0 8px 24px rgba(37, 24, 17, 0.08)',
        'warm-lg': '0 20px 40px rgba(37, 24, 17, 0.12)',
        'warm-xl': '0 30px 60px rgba(37, 24, 17, 0.16)',
      },
    },
  },
  plugins: [],
}
