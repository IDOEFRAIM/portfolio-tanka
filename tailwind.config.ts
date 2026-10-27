import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components_/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-newsreader)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',
          600: '#0F766E',
          50: '#ECFDF5',
        },
        brand: {
          deep: '#0B0F17',
          paper: '#F8FAFC',
          emerald: '#10B981',
          forest: '#064E3B',
          border: '#1E293B',
          mist: '#94A3B8',
          ink: '#05070A',
          forestDeep: '#0A1512',
          forestDark: '#0B1F1B',
          cream: '#F3F1EA',
          mint: '#86EFC9',
        },
      },
      boxShadow: {
        editorial: '0 25px 60px rgba(2,6,23,0.35)',
        immersive: '0 30px 60px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'editorial-grid': 'linear-gradient(90deg, rgba(248,250,252,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(248,250,252,0.04) 1px, transparent 1px)',
        'immersive-gradient': 'linear-gradient(180deg, #05070A 0%, #0A1512 35%, #0E2420 65%, #0B1F1B 100%)',
        'card-sheen': 'linear-gradient(135deg, #34D399, #F3F1EA 35%, #0F766E 70%, #34D399)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;