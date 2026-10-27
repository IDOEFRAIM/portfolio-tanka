"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';
import CountUp from '../motion/CountUp';
import { projects } from '../../lib/projects-data';

const StatsStrip = () => {
  const t = useTranslations('Stats');
  const tSkills = useTranslations('MasteryMatrix');
  const tExperience = useTranslations('ExperienceTimeline');
  const tCerts = useTranslations('CertificationsSection');

  const categories = tSkills.raw('categories') as { items: string[] }[];
  const roles = tExperience.raw('roles') as unknown[];
  const certs = tCerts.raw('records') as unknown[];

  const technologiesCount = categories.reduce((sum, c) => sum + c.items.length, 0);

  const stats = [
    { label: t('projects'), value: projects.length, suffix: '+' },
    { label: t('technologies'), value: technologiesCount, suffix: '+' },
    { label: t('experience'), value: roles.length, suffix: '' },
    { label: t('certifications'), value: certs.length, suffix: '' },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-brand-cream/10 bg-brand-cream/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-brand-ink/50 p-8 text-center">
              <p className="font-serif text-5xl text-brand-cream sm:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default StatsStrip;
