// components/BackButton.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on home page (e.g. /en, /fr)
    // Pathname splits: /en -> ['', 'en'] (length 2)
    // /en/about -> ['', 'en', 'about'] (length 3)
    const segments = pathname?.split('/').filter(Boolean) || [];
    setIsVisible(segments.length > 1);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => router.back()}
      className="fixed bottom-8 left-8 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg hover:scale-105 hover:border-primary/50 transition-all duration-300 group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-primary group-hover:-translate-x-1 transition-all"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span className="text-sm font-mono font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider group-hover:text-primary transition-colors">
        Back
      </span>
    </button>
  );
}