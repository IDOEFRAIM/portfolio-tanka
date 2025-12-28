// components/PricingSection.tsx
import React from 'react';

const tiers = [
  {
    name: 'Consulting_IA',
    price: 'Sur Devis',
    unit: '/projet',
    features: ['Audit de système', 'Architecture RAG', 'Optimisation LLM'],
    cta: 'Lancer l_audit',
    color: 'border-yellow-500/30'
  },
  {
    name: 'Full_Stack_Dev',
    price: '500€',
    unit: '/jour',
    features: ['Next.js / TypeScript', 'API Design', 'Performance Core Web Vitals'],
    cta: 'Réserver un slot',
    color: 'border-blue-500/30'
  },
  {
    name: 'Efra_Learning_VIP',
    price: '299€',
    unit: '/formation',
    features: ['Accès à vie', 'Support Discord privé', 'Projets réels inclus'],
    cta: 'S_inscrire',
    color: 'border-green-500/30'
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-[10px] font-black opacity-30 uppercase tracking-[0.5em] mb-16">
          Service_Pricing_Protocols_v1
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`p-8 border ${tier.color} bg-gray-50/50 dark:bg-white/[0.02] flex flex-col`}
            >
              <span className="font-mono text-[10px] opacity-50 mb-4 uppercase tracking-widest">
                ID: {tier.name}
              </span>
              
              <div className="mb-8">
                <span className="text-4xl font-black italic">{tier.price}</span>
                <span className="text-xs opacity-50 ml-2 uppercase font-mono">{tier.unit}</span>
              </div>

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