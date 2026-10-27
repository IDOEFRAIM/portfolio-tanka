"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { motion } from "framer-motion";

const NAV_LINKS: { href: string; key: string; label?: string; icon: string }[] = [
  { href: "/", key: "home", icon: "home" },
  { href: "/about", key: "about", icon: "user" },
  { href: "/projects", key: "projects", icon: "grid" },
  { href: "/blog", key: "blog", label: "Blog", icon: "doc" },
  { href: "/certifications", key: "certifications", label: "Certifications", icon: "badge" },
  { href: "/price", key: "price", label: "Tarifs", icon: "tag" },
  { href: "/contact", key: "contact", icon: "mail" },
];

const ICONS: Record<string, React.ReactNode> = {
  home: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  ),
  grid: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="4" y="4" width="7" height="7" />
      <rect x="13" y="4" width="7" height="7" />
      <rect x="4" y="13" width="7" height="7" />
      <rect x="13" y="13" width="7" height="7" />
    </svg>
  ),
  doc: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
  badge: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
    </svg>
  ),
  tag: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M3 11.5 11.5 3H20v8.5L11.5 20 3 11.5Z" />
      <circle cx="14.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

const LANG_CHOICES: Array<"fr" | "en"> = ["fr", "en"];

const NavBar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: "fr" | "en") => {
    if (nextLocale === locale || isPending) return;
    startTransition(() => {
      const segments = pathname.split("/");
      if (segments[1]) segments[1] = nextLocale;
      router.replace(segments.join("/") || "/");
    });
  };

  return (
    <>
      {/* Monogramme fixe — identité + retour accueil */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block"
      >
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            aria-label={t("signature")}
            className="fixed top-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-ink/70 text-[11px] font-mono tracking-[0.2em] text-brand-cream backdrop-blur-md transition-colors hover:border-brand-mint/50 hover:text-brand-mint"
          >
            EI
          </Link>
        </motion.div>
      </motion.div>

      {/* CTA discrète en haut à droite */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block"
      >
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="mailto:idoefraim06@gmail.com"
            className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-ink/70 px-4 py-2.5 text-[10px] uppercase tracking-[0.3em] text-brand-mint backdrop-blur-md transition-colors hover:border-brand-mint hover:bg-brand-mint/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" />
            {t("cta")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Dock de navigation flottant */}
      <motion.nav
        aria-label="Navigation principale"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 left-1/2 z-50 flex max-w-[94vw] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border border-brand-cream/10 bg-brand-ink/85 px-2 py-1.5 shadow-immersive backdrop-blur-md [scrollbar-width:none] sm:bottom-5 sm:gap-1 sm:px-2.5 sm:py-2 [&::-webkit-scrollbar]:hidden"
      >
        {NAV_LINKS.map((link) => {
          const label = link.label ?? t(link.key as Parameters<typeof t>[0]);
          return (
            <motion.div key={link.href} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }} className="shrink-0">
              <Link
                href={link.href}
                aria-label={label}
                title={label}
                className="group flex h-8 w-8 items-center justify-center rounded-full text-brand-cream/55 transition-colors hover:bg-brand-cream/10 hover:text-brand-mint sm:h-10 sm:w-10"
              >
                {ICONS[link.icon]}
              </Link>
            </motion.div>
          );
        })}

        <div className="mx-1 h-5 w-px shrink-0 bg-brand-cream/15 sm:mx-1.5" aria-hidden="true" />

        <div className="flex shrink-0 items-center gap-0.5 px-0.5 sm:px-1" role="group" aria-label="Langue">
          {LANG_CHOICES.map((code) => (
            <motion.button
              key={code}
              type="button"
              disabled={isPending}
              onClick={() => switchLocale(code)}
              aria-pressed={locale === code}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className={`rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:px-2.5 sm:py-1.5 ${
                locale === code
                  ? "bg-brand-cream text-brand-ink"
                  : "text-brand-cream/55 hover:text-brand-cream"
              }`}
            >
              {code}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
