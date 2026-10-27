"use client";

import { useState, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

const LANG_CHOICES: Array<'fr' | 'en'> = ['fr', 'en'];

const SettingsBar = () => {
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const switchLocale = (nextLocale: 'fr' | 'en') => {
    if (nextLocale === locale) return;
    startTransition(() => {
      const segments = pathname.split('/');
      if (segments[1]) {
        segments[1] = nextLocale;
      }
      router.replace(segments.join('/') || '/');
    });
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em]">
      <div className="flex items-center gap-1 rounded-full border border-brand-border/40 bg-brand-paper/70 px-2 py-1">
        {LANG_CHOICES.map((code) => (
          <button
            key={code}
            disabled={isPending}
            onClick={() => switchLocale(code)}
            className={`h-6 w-6 rounded-full transition-colors ${
              locale === code
                ? 'bg-brand-deep text-brand-paper'
                : 'text-brand-border hover:text-brand-deep'
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="h-8 w-8 border border-brand-border/40 flex items-center justify-center rounded-full text-xs"
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'dark' ? '☾' : '☀︎'}
      </button>
    </div>
  );
};

export default SettingsBar;
