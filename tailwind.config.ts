import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  "./components_/**/*.{js,ts,jsx,tsx,mdx}", // ⬅️ CETTE LIGNE DOIT ÊTRE PRÉSENTE
],
// ...
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      
      // 👇 COULEURS SÉMANTIQUES
      colors: {
        // 1. COULEURS GÉNÉRALES (Pour Hero, Boutons, Liens)
        primary: {
          DEFAULT: '#6366f1', // Indigo (Couleur Principale)
          400: '#818cf8',     // Nuance plus claire pour les dégradés
          glow: '#6366f1',    // Pour les effets de néon
        },
        secondary: {
          DEFAULT: '#a855f7', // Purple (Couleur Secondaire du dégradé)
          400: '#c084fc',
        },

        // 2. COULEURS DES 4 PILIERS (Pour le composant Categories)
        web: {
          DEFAULT: '#6366f1', 
          dim: 'rgba(99,102,241,0.1)',
        },
        mobile: {
          DEFAULT: '#a855f7', 
          dim: 'rgba(168,85,247,0.1)',
        },
        ai: {
          DEFAULT: '#eab308', 
          dim: 'rgba(234,179,8,0.1)',
        },
        data: {
          DEFAULT: '#22c55e', 
          dim: 'rgba(34,197,94,0.1)',
        },
      },

      // 👇 LE GRADIENT CENTRALISÉ (Pour le texte du Hero)
      // Si tu veux changer ton Hero en Vert/Bleu demain, tu modifies juste ici !
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, theme("colors.primary.400"), theme("colors.secondary.400"), theme("colors.white"))',
        // Dark mode variant si nécessaire (mais souvent le même marche bien)
      }
    },
  },
  plugins: [],
};

export default config;