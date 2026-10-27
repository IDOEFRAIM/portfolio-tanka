"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';

const HookProject = () => {
  const t = useTranslations('MasteryMatrix');
  const categories = t.raw('categories') as { name: string; items: string[] }[];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="max-w-3xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
            03 — {t('title')}
          </p>
          <p className="text-base leading-relaxed text-brand-cream/65">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-brand-cream">{category.name}</h3>
                  <span className="rounded-full border border-brand-mint/25 px-2.5 py-0.5 font-mono text-[10px] text-brand-mint">
                    {category.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-brand-cream/15 bg-brand-ink/40 px-3 py-1.5 text-xs text-brand-cream/75 transition-colors hover:border-brand-mint/40 hover:text-brand-mint"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-brand-cream/50">{t('note')}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default HookProject;
