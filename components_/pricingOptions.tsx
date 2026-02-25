import React from 'react';
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('Pricing');

  const tiers = [
    {
      id: 'tier_1',
      name: t('tier_1_name'),
      price: t('tier_1_price'),
      desc: t('tier_1_desc'),
      features: t('tier_1_features').split(','),
      cta: t('tier_1_cta'),
    },
    {
      id: 'tier_2',
      name: t('tier_2_name'),
      price: t('tier_2_price'),
      desc: t('tier_2_desc'),
      features: t('tier_2_features').split(','),
      cta: t('tier_2_cta'),
    },
    {
      id: 'tier_3',
      name: t('tier_3_name'),
      price: t('tier_3_price'),
      desc: t('tier_3_desc'),
      features: t('tier_3_features').split(','),
      cta: t('tier_3_cta'),
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#020617] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Style "Manifeste" */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 dark:border-white/5 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">
              {t('title')}
            </h2>
            <h3 className="text-4xl md:text-6xl font-light italic tracking-tighter leading-none">
              {t('subtitle')}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 uppercase">
            [ Current_Rates_2026 ]
          </span>
        </div>

        {/* Grille Brutaliste */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-slate-100 dark:border-white/5">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className="p-10 border-r border-b md:border-b-0 border-slate-100 dark:border-white/5 flex flex-col group hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all duration-500"
            >
              <span className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">
                {tier.name}
              </span>
              
              <div className="mb-6">
                <span className="text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white">
                  {tier.price}
                </span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-normal min-h-[60px]">
                {tier.desc}
              </p>

              <ul className="space-y-4 mb-16 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:opacity-80 active:scale-[0.98]">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}