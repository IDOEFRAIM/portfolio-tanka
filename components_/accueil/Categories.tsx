"use client";

import { useTranslations } from 'next-intl';
import Reveal from '../motion/Reveal';

const Categories = () => {
  const t = useTranslations('ProjectsShowcase');
  const projects = t.raw('projects') as {
    name: string;
    label: string;
    summary: string;
    architecture: string;
    stack: string;
    impact: string;
    metrics: { label: string; value: string }[];
    diagram: string[];
  }[];

  return (
    <section id="projets" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="max-w-3xl space-y-4 border-b border-brand-cream/10 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
            04 — {t('subtitle')}
          </p>
          <h2 className="font-serif text-4xl text-brand-cream sm:text-5xl">{t('title')}</h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={Math.min(index * 0.06, 0.3)}>
              <article className="grid grid-cols-1 gap-8 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-mint/30 lg:grid-cols-5">
                <div className="space-y-4 lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-brand-cream/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-mint">
                      {project.label}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-cream">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-brand-cream/65">{project.summary}</p>
                  <p className="text-sm leading-relaxed text-brand-cream/50">{project.architecture}</p>
                </div>

                <div className="space-y-4 lg:col-span-2">
                  <div className="rounded-xl border border-brand-cream/10 p-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/40">
                      Stack
                    </p>
                    <p className="text-sm leading-relaxed text-brand-cream/70">{project.stack}</p>
                  </div>
                  <div className="rounded-xl border border-brand-cream/10 p-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/40">
                      Impact
                    </p>
                    <p className="text-sm leading-relaxed text-brand-cream/70">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 lg:col-span-1">
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-brand-cream/10 px-4 py-3">
                        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-cream/40">
                          {metric.label}
                        </p>
                        <p className="mt-1 font-serif text-2xl text-brand-cream">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-brand-cream/35">
                      Diagramme
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.diagram.map((node) => (
                        <span
                          key={node}
                          className="rounded-full border border-brand-cream/10 bg-brand-ink/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-brand-cream/55"
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
