"use client";

import { useTranslations } from 'next-intl';

const SkillsTicker = () => {
  const t = useTranslations('MasteryMatrix');
  const categories = t.raw('categories') as { name: string; items: string[] }[];
  const skills = categories.flatMap((c) => c.items);
  const loop = [...skills, ...skills];

  return (
    <div className="group relative overflow-hidden border-y border-brand-cream/10 bg-brand-ink/50 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-ink to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-forestDeep to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center whitespace-nowrap px-5 font-mono text-xs uppercase tracking-[0.3em] text-brand-cream/40"
          >
            {skill}
            <span className="ml-5 text-brand-mint/40" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
