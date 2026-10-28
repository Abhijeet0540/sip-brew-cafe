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
          50: '#FAF7F0',  // Warm ivory
          100: '#F4EFE5', // Background cream
          200: '#EBDDC9',
          300: '#DFCAAC',
        },
        espresso: {
          900: '#150D0A',
          800: '#251811', // Primary espresso
          700: '#3D281D',
          DEFAULT: '#251811',
        },
        coffee: {
          700: '#4A3022',
          600: '#68442F', // Coffee brown
          500: '#8A5D40',
          DEFAULT: '#68442F',
        },
        caramel: {
          600: '#9E7145',
          500: '#B88A5A', // Caramel accent
          400: '#CFA272',
          DEFAULT: '#B88A5A',
        },
        muted: {
          DEFAULT: '#80776C',
          light: '#A69E93',
          dark: '#5C544A',
        },
      },
      fontFamily: {
        lobster: ['"Lobster"', 'cursive'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
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
