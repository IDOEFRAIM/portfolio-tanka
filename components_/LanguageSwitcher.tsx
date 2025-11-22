"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation'; // Attention aux imports Next 13+
import { useTransition } from 'react';

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (nextLocale:any) => {
    startTransition(() => {
      // On remplace le préfixe de l'URL (ex: /fr/about -> /en/about)
      // Note: Ceci est une version simplifiée. Avec next-intl, on utilise souvent Link ou useRouter de next-intl/client
      const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg font-mono text-xs">
      <span className="text-gray-500 uppercase tracking-widest">Lang:</span>
      
      <button
        disabled={isPending}
        onClick={() => toggleLanguage('fr')}
        className={`transition-colors ${
          locale === 'fr' 
            ? 'text-indigo-400 font-bold shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        FR
      </button>
      
      <span className="text-gray-600">|</span>
      
      <button
        disabled={isPending}
        onClick={() => toggleLanguage('en')}
        className={`transition-colors ${
          locale === 'en' 
            ? 'text-indigo-400 font-bold shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;