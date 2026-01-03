// components/PricingSection.tsx
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
      color: 'border-yellow-500/30'
    },
    {
      id: 'tier_2',
      name: t('tier_2_name'),
      price: t('tier_2_price'),
      desc: t('tier_2_desc'),
      features: t('tier_2_features').split(','),
      cta: t('tier_2_cta'),
      color: 'border-blue-500/30'
    },
    {
      id: 'tier_3',
      name: t('tier_3_name'),
      price: t('tier_3_price'),
      desc: t('tier_3_desc'),
      features: t('tier_3_features').split(','),
      cta: t('tier_3_cta'),
      color: 'border-green-500/30'
    }
  ];

  return (
    <section className="py-24 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
            <h2 className="font-mono text-[10px] font-black opacity-30 uppercase tracking-[0.5em] mb-4">
            {t('title')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter">
            {t('subtitle')}
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`p-8 border ${tier.color} bg-gray-50/50 dark:bg-white/[0.02] flex flex-col hover:bg-gray-100/50 dark:hover:bg-white/[0.04] transition-colors duration-300`}
            >
              <span className="font-mono text-[10px] opacity-50 mb-4 uppercase tracking-widest">
                {tier.name}
              </span>
              
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-black italic">{tier.price}</span>
              </div>

              <p className="text-sm opacity-70 mb-8 leading-relaxed">
                {tier.desc}
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span className="text-blue-500 font-bold">+</span>
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black text-[10px] uppercase tracking-[0.2em] hover:invert transition-all">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}