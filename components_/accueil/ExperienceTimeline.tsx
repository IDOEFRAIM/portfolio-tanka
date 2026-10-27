"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';

const ExperienceTimeline = () => {
  const t = useTranslations('ExperienceTimeline');
  const roles = t.raw('roles') as {
    title: string;
    period: string;
    location: string;
    description: string;
    outcomes: string[];
  }[];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="max-w-2xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
            02 — {t('subtitle')}
          </p>
          <h2 className="font-serif text-4xl text-brand-cream sm:text-5xl">{t('title')}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.1}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-cream/20 font-mono text-xs text-brand-cream/55">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-mint">
                    {role.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-brand-cream">{role.title}</h3>
                  <p className="mt-1 text-sm text-brand-cream/50">{role.location}</p>
                </div>

                <p className="text-sm leading-relaxed text-brand-cream/70">{role.description}</p>

                <ul className="space-y-2.5 border-t border-brand-cream/10 pt-5">
                  {role.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-brand-cream/65">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-brand-mint">
            {t('cta')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
