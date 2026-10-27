"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';

const FinalCTA = () => {
  const t = useTranslations('ContactPage');

  return (
    <section id="contact" className="relative scroll-mt-28 py-28 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 65%)' }}
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center" y={16}>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/30 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-mint">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" />
          {t('status')}
        </span>

        <h2 className="font-serif text-5xl text-brand-cream sm:text-6xl">{t('title')}</h2>
        <p className="max-w-lg text-base leading-relaxed text-brand-cream/65">{t('subtitle')}</p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="mailto:idoefraim06@gmail.com"
              className="inline-block rounded-full bg-brand-cream px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-brand-ink transition-opacity hover:opacity-85"
            >
              {t('email_label')}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-brand-cream/30 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-brand-cream/85 transition-colors hover:border-brand-cream/60"
            >
              {t('cta_link')}
            </Link>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/IDOEFRAIM"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/55 transition-colors hover:border-brand-mint/40 hover:text-brand-mint"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://www.linkedin.com/in/efraim-m-d-ido-a30021276"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/55 transition-colors hover:border-brand-mint/40 hover:text-brand-mint"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 17v-7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default FinalCTA;
