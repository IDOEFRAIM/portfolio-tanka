"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';

const Philosophy = () => {
  const t = useTranslations('ResearchVision');
  const pillars = t.raw('pillars') as {
    id: string;
    title: string;
    body: string;
    tags: string[];
  }[];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="flex flex-col gap-6 border-b border-brand-cream/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
              01 — {t('subtitle')}
            </p>
            <h2 className="font-serif text-4xl text-brand-cream sm:text-5xl">{t('title')}</h2>
            <p className="text-base leading-relaxed text-brand-cream/65">{t('description')}</p>
          </div>
          <span className="font-serif text-sm italic leading-relaxed text-brand-mint/80 sm:max-w-[260px] sm:text-right">
            {t('footnote')}
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.1}>
              <div className="group flex h-full flex-col gap-5 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-brand-cream/40">[{pillar.id}]</span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand-cream/15 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-brand-cream/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-cream">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-cream/65">{pillar.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
