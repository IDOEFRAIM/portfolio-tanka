"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import Reveal from '../motion/Reveal';
import TiltCard from '../motion/TiltCard';

const QUICK_LINK_TARGETS = {
  github: 'https://github.com/IDOEFRAIM',
  linkedin: 'https://www.linkedin.com/in/efraim-m-d-ido-a30021276',
  email: 'mailto:idoefraim06@gmail.com',
  cv: '/cv.pdf',
} as const;

type Spotlight = {
  label: string;
  value: string;
};

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  linkedin: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 17v-7" />
    </svg>
  ),
  email: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ExecutiveHero = () => {
  const t = useTranslations('ExecutiveHero');
  const meta = t.raw('meta') as {
    location_label: string;
    location_value: string;
    languages_label: string;
    languages_value: string;
    focus_label: string;
    focus_value: string;
  };
  const quickLinkLabels = t.raw('quick_links') as Record<string, string>;
  const spotlight = t.raw('spotlight') as Spotlight[];

  const quickLinks = Object.entries(quickLinkLabels)
    .map(([key, label]) => ({
      key,
      label,
      href: QUICK_LINK_TARGETS[key as keyof typeof QUICK_LINK_TARGETS],
    }))
    .filter((link) => Boolean(link.href));

  const metaGrid = [
    { label: meta.location_label, value: meta.location_value },
    { label: meta.languages_label, value: meta.languages_value },
    { label: meta.focus_label, value: meta.focus_value },
  ];

  const fullName = t('title');
  const [firstName, ...rest] = fullName.split(' ');
  const lastName = rest.join(' ');

  return (
    <section className="relative pt-28 pb-24 sm:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-[620px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0) 65%)' }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex flex-col gap-5">
          <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-cream/55">
              {t('role_deck')}
            </span>
            <span className="inline-flex max-w-sm items-start gap-2 rounded-2xl border border-brand-mint/25 px-4 py-2.5 text-xs leading-relaxed text-brand-mint/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" />
              {t('availability')}
            </span>
          </motion.div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-2 lg:max-w-xl">
              <motion.svg
                viewBox="0 0 320 90"
                className="-ml-1 h-16 w-auto sm:h-20"
                aria-hidden="true"
                variants={item}
              >
                <motion.text
                  x="0"
                  y="62"
                  fontFamily="var(--font-newsreader), serif"
                  fontStyle="italic"
                  fontSize="60"
                  fill="none"
                  stroke="#E7DFC8"
                  strokeWidth="1"
                  style={{ strokeDasharray: 340 }}
                  initial={{ strokeDashoffset: 340 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
                >
                  {firstName}
                </motion.text>
              </motion.svg>
              <motion.h1
                variants={item}
                className="font-serif text-6xl font-medium leading-[0.95] text-brand-cream sm:text-7xl"
              >
                {lastName}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-lg font-serif text-xl italic leading-relaxed text-brand-mint sm:text-2xl"
              >
                {t('hero_statement')}
              </motion.p>
              <motion.p variants={item} className="mt-2 max-w-md text-sm leading-relaxed text-brand-cream/65">
                {t('statement_detail')}
              </motion.p>

              <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="mailto:idoefraim06@gmail.com"
                    className="inline-block rounded-full bg-brand-cream px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.3em] text-brand-ink transition-opacity hover:opacity-85"
                  >
                    {t('cta_contact')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#projets"
                    className="inline-block rounded-full border border-brand-cream/30 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.3em] text-brand-cream/85 transition-colors hover:border-brand-cream/60"
                  >
                    {t('cta_projects')}
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={item} className="mt-5 flex items-center gap-2.5">
                {quickLinks
                  .filter((l) => l.key !== 'cv')
                  .map((link) => (
                    <motion.div key={link.key} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/70 transition-colors hover:border-brand-mint/50 hover:text-brand-mint"
                      >
                        {SOCIAL_ICONS[link.key]}
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </div>

            <motion.div variants={item} className="w-full max-w-sm shrink-0 lg:mt-1">
              <TiltCard
                className="rounded-2xl bg-card-sheen p-px shadow-immersive"
                expandLabel="Agrandir la carte"
                flipLabel="Retourner la carte"
                closeLabel="Fermer"
                front={
                  <div className="flex h-full flex-col justify-between gap-6 rounded-[15px] bg-gradient-to-br from-brand-forestDeep to-[#0A1512] p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-lg text-brand-cream">{fullName}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-brand-cream/50">
                          {t('role_deck')}
                        </p>
                      </div>
                      <div
                        className="h-10 w-14 rounded-md border border-brand-cream/25"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(135deg, rgba(134,239,201,0.45) 0 2px, transparent 2px 4px)',
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-brand-cream/45">
                        {meta.focus_label}
                      </p>
                      <p className="text-sm leading-relaxed text-brand-cream/85">{meta.focus_value}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-brand-cream/60">{meta.location_value}</span>
                      {quickLinks.find((l) => l.key === 'cv') && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-cream/35">
                          ↓ {quickLinkLabels.cv}
                        </span>
                      )}
                    </div>
                  </div>
                }
                back={
                  <div className="flex h-full flex-col justify-between gap-6 rounded-[15px] bg-gradient-to-br from-[#0A1512] to-brand-forestDeep p-6">
                    <div
                      className="h-10 w-full rounded-sm"
                      style={{ background: 'repeating-linear-gradient(135deg, rgba(134,239,201,0.35) 0 3px, rgba(243,241,234,0.08) 3px 6px)' }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-serif text-2xl italic text-brand-cream/90">{fullName}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-cream/40">Signature</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      {quickLinks
                        .filter((l) => l.key !== 'cv')
                        .map((link) => (
                          <Link
                            key={link.key}
                            href={link.href}
                            aria-label={link.label}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/70 transition-colors hover:border-brand-mint/50 hover:text-brand-mint"
                          >
                            {SOCIAL_ICONS[link.key]}
                          </Link>
                        ))}
                      {quickLinks.find((l) => l.key === 'cv') && (
                        <Link
                          href={QUICK_LINK_TARGETS.cv}
                          className="ml-auto rounded-full bg-brand-cream px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-ink"
                        >
                          ↓ {quickLinkLabels.cv}
                        </Link>
                      )}
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-brand-cream/10 bg-brand-cream/10 sm:grid-cols-3">
          {metaGrid.map((item) => (
            <div key={item.label} className="bg-brand-ink/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-cream/45">{item.label}</p>
              <p className="mt-3 font-serif text-xl text-brand-cream">{item.value}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {spotlight.map((spot, index) => (
            <Reveal key={spot.label} delay={index * 0.08}>
              <div className="rounded-xl border border-brand-cream/10 bg-brand-cream/[0.03] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-mint/80">{spot.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-cream/75">{spot.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExecutiveHero;
