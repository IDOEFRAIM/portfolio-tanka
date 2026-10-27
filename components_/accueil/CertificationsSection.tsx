"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';

const CertificationsSection = () => {
  const t = useTranslations('CertificationsSection');
  const certifications = t.raw('records') as {
    name: string;
    issuer: string;
    year: string;
    type: string;
  }[];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="max-w-2xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
            05 — {t('subtitle')}
          </p>
          <h2 className="font-serif text-4xl text-brand-cream sm:text-5xl">{t('title')}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={Math.min(index * 0.05, 0.25)}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30">
                <p className="font-serif text-lg leading-snug text-brand-cream">{cert.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/40">
                  {cert.issuer}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-brand-cream/10 pt-4 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span className="text-brand-mint">{cert.type}</span>
                  <span className="text-brand-cream/45">{cert.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
