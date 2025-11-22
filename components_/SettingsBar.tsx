"use client";

import { useState, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

const SettingsBar = () => {
  // 1. Hooks d'état et de navigation (Next.js & React)
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false); // Pour l'hydratation
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  // 2. Hooks de Thème
  // 'resolvedTheme' donne le thème final appliqué (dark ou light)
  const { setTheme, resolvedTheme } = useTheme();

  // 3. Effet : Éviter le mismatch au chargement (Hydration)
  useEffect(() => setMounted(true), []);

  // 4. Fonction pour changer de langue
  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      // Remplace le segment de langue dans l'URL (ex: /fr/... -> /en/...)
      const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  // Si le composant n'est pas monté sur le client, on n'affiche rien
  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      
      {/* --- BLOC LANGUE --- */}
      <div className="flex p-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-lg shadow-lg transition-colors">
        
        {/* Bouton FR */}
        <button
          disabled={isPending}
          onClick={() => switchLocale('fr')}
          className={`px-3 py-1.5 text-xs font-mono font-bold rounded-md transition-all duration-300 ${
            locale === 'fr' 
              ? 'bg-primary text-white shadow-md' // Actif (Utilise ta couleur Primary)
              : 'text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
          }`}
        >
          FR
        </button>

        {/* Bouton EN */}
        <button
          disabled={isPending}
          onClick={() => switchLocale('en')}
          className={`px-3 py-1.5 text-xs font-mono font-bold rounded-md transition-all duration-300 ${
            locale === 'en' 
              ? 'bg-primary text-white shadow-md' // Actif
              : 'text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
          }`}
        >
          EN
        </button>
      </div>

      {/* --- BLOC THÈME --- */}
      <button
        // On inverse : Si c'est Dark -> on met Light, sinon Dark
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-lg text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all shadow-lg group hover:border-primary dark:hover:border-primary"
        aria-label="Changer de thème"
      >
        {resolvedTheme === 'dark' ? (
          // LUNE (S'affiche quand on est en Mode Sombre)
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        ) : (
          // SOLEIL (S'affiche quand on est en Mode Clair)
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 group-hover:rotate-90 transition-transform duration-500">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
          </svg>
        )}
      </button>

    </div>
  );
};

export default SettingsBar;