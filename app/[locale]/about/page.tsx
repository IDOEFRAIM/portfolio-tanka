"use client";

import { useTranslations } from 'next-intl';

const TimelineStep = ({
  year,
  title,
  place,
  desc,
  index,
  isLast,
}: {
  year: string;
  title: string;
  place: string;
  desc: React.ReactNode;
  index: number;
  isLast: boolean;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-brand-border/20 last:border-b-0">
    <div className="md:col-span-3 space-y-2">
      <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="font-serif text-2xl text-brand-deep">{year}</p>
      <p className="text-[11px] uppercase tracking-[0.3em] text-brand-border">{place}</p>
    </div>
    <div className="md:col-span-9 space-y-3">
      <h3 className="text-xl font-serif text-brand-deep">{title}</h3>
      <p className="text-brand-deep/70 leading-relaxed max-w-2xl">{desc}</p>
    </div>
  </div>
);

export default function AboutPage() {
  const t = useTranslations('About');

  const timelineData = [
    {
      year: t('step_1_year'),
      title: t('step_1_title'),
      place: t('step_1_place'),
      desc: t.rich('step_1_desc', {
        bold: (chunks) => <span className="text-brand-deep font-medium">{chunks}</span>,
        highlight: (chunks) => <span className="text-primary">{chunks}</span>,
      }),
    },
    {
      year: t('step_2_year'),
      title: t('step_2_title'),
      place: t('step_2_place'),
      desc: t.rich('step_2_desc', {
        bold: (chunks) => <span className="text-brand-deep font-medium">{chunks}</span>,
        highlight: (chunks) => <span className="text-primary">{chunks}</span>,
      }),
    },
    {
      year: t('step_3_year'),
      title: t('step_3_title'),
      place: t('step_3_place'),
      desc: t.rich('step_3_desc', {
        bold: (chunks) => <span className="text-brand-deep font-medium">{chunks}</span>,
        highlight: (chunks) => <span className="text-primary">{chunks}</span>,
      }),
    },
    {
      year: t('step_4_year'),
      title: t('step_4_title'),
      place: t('step_4_place'),
      desc: t.rich('step_4_desc', {
        bold: (chunks) => <span className="text-brand-deep font-medium">{chunks}</span>,
        highlight: (chunks) => <span className="text-primary">{chunks}</span>,
      }),
    },
    {
      year: t('step_5_year'),
      title: t('step_5_title'),
      place: t('step_5_place'),
      desc: t.rich('step_5_desc', {
        bold: (chunks) => <span className="text-brand-deep font-medium">{chunks}</span>,
        highlight: (chunks) => <span className="text-primary">{chunks}</span>,
      }),
    },
  ];

  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 border-b border-brand-border/30 pb-10 space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-primary">{t('subtitle')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg text-brand-deep/70 leading-relaxed max-w-2xl">
            {t('intro')}
          </p>
        </div>

        <div>
          {timelineData.map((step, index) => (
            <TimelineStep
              key={index}
              year={step.year}
              title={step.title}
              place={step.place}
              desc={step.desc}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
