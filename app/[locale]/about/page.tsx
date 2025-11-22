"use client";

import { useTranslations } from 'next-intl';
import { Sparkles, GraduationCap, Code, Globe, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Composant pour l'étape de la Timeline
const TimelineStep = ({
  year,
  title,
  desc,
  icon: Icon,
  isLast
}: {
  year: string;
  title: string;
  desc: React.ReactNode;
  icon: React.ElementType;
  isLast: boolean;
}) => (
  <div className="flex relative pl-8">
    {/* Ligne verticale */}
    {!isLast && (
      <div className="absolute left-4 top-1 h-full w-0.5 bg-gray-200 dark:bg-white/10 z-0"></div>
    )}

    {/* Cercle/Icône */}
    <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 bg-white dark:bg-black border-2 border-primary rounded-full z-10">
      <Icon className="w-4 h-4 text-primary" />
    </div>

    {/* Contenu */}
    <div className="flex-grow pb-12">
      <h3 className="text-sm font-mono text-primary/80 uppercase tracking-widest mb-1">{year}</h3>
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">{desc}</p>
    </div>
  </div>
);

export default function AboutPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('About');
  const [isMounted, setIsMounted] = useState(false);

  // Utiliser useEffect pour garantir que le composant est monté côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Retourner null ou un loader simple pendant l'hydratation

  // Définition de votre parcours détaillé
  const timelineData = [
    {
      year: t('step_1_year'),
      title: t('step_1_title'),
      desc: t.rich('step_1_desc', {
        bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
        highlight: (chunks) => <span className="text-secondary">{chunks}</span>
      }),
      icon: Sparkles
    },
    {
      year: t('step_2_year'),
      title: t('step_2_title'),
      desc: t.rich('step_2_desc', {
        bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
        highlight: (chunks) => <span className="text-secondary">{chunks}</span>
      }),
      icon: GraduationCap
    },
    {
      year: t('step_3_year'),
      title: t('step_3_title'),
      desc: t.rich('step_3_desc', {
        bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
        highlight: (chunks) => <span className="text-secondary">{chunks}</span>
      }),
      icon: Code
    },
    {
      year: t('step_4_year'),
      title: t('step_4_title'),
      desc: t.rich('step_4_desc', {
        bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
        highlight: (chunks) => <span className="text-secondary">{chunks}</span>
      }),
      icon: Globe
    },
    {
      year: t('step_5_year'),
      title: t('step_5_title'),
      desc: t.rich('step_5_desc', {
        bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
        highlight: (chunks) => <span className="text-secondary">{chunks}</span>
      }),
      icon: Zap
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* EN-TÊTE */}
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-6">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            {t('subtitle')}
          </p>
        </div>

        {/* INTRODUCTION */}
        <p className="text-2xl font-light mb-20 max-w-4xl leading-relaxed text-slate-700 dark:text-gray-300">
          {t('intro')}
        </p>

        {/* TIMELINE */}
        <div className="lg:max-w-3xl">
          {timelineData.map((step, index) => (
            <TimelineStep
              key={index}
              year={step.year}
              title={step.title}
              desc={step.desc}
              icon={step.icon}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}