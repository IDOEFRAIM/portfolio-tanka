import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  "./components_/**/*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: '#60a5fa', // Bleu doux (Couleur Principale)
          400: '#93c5fd',     // Nuance plus claire pour les dégradés
          glow: '#60a5fa',    // Pour les effets de néon
        },
        secondary: {
          DEFAULT: '#64748b', // Gris bleuté naturel (Couleur Secondaire du dégradé)
          400: '#cbd5e1',
        },

        // 2. COULEURS DES 4 PILIERS (Pour le composant Categories)
        web: {
          DEFAULT: '#60a5fa', // Bleu doux
          dim: 'rgba(96,165,250,0.1)',
        },
        mobile: {
          DEFAULT: '#64748b', // Gris bleuté naturel
          dim: 'rgba(100,116,139,0.1)',
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
        // 'hero-gradient' retiré pour un fond plus naturel
        // Dark mode variant si nécessaire (mais souvent le même marche bien)
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;