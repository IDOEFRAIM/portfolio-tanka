'use client'; // On utilise Framer Motion (léger) pour garantir l'effet "Whaouh" fluide
import Link from 'next/link';
import { motion } from 'framer-motion';

const PROTOCOLS = [
  {
    id: '01',
    category: 'WEB_CORE',
    title: 'Site Vitrine',
    price: '150.000',
    color: 'bg-web',
    features: ['Next.js 16', 'SEO','Ergonomique','Responsive', 'Lighthouse 100/100']
  },
  {
    id: '02',
    category: 'ECO_FLOW',
    title: 'E-Commerce & Flux Monétaire',
    price: '250.000',
    color: 'bg-secondary',
    features: ['Real-time Inventory', 'Local API Payment', 'Admin Dashboard']
  },
  {
    id: '03',
    category: 'MOB_NATIVE',
    title: 'App Mobile',
    price: '600.000',
    color: 'bg-mobile',
    features: ['iOS & Android Native', 'Offline Integration']
  }
];

export default function TheRevealArchitect() {
  return (
    <main className="relative bg-white">
      
      {/* SECTION 1 : LE HERO FIXÉ (REVEAL SOURCE) */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center bg-white overflow-hidden">
        {/* Background Grid & Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border-2 border-primary text-primary font-mono text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            Tanka Dev
          </motion.div>
          
          <h1 className="text-[12vw] font-black italic uppercase leading-[0.75] tracking-tighter text-slate-900">
            L'ÉLITE <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent italic">TECHNIQUE.</span>
          </h1>
          
          <div className="mt-12 flex justify-center gap-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black italic">99.9%</span>
              <span className="text-[10px] font-mono opacity-40 uppercase">Performance</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black italic">∞</span>
              <span className="text-[10px] font-mono opacity-40 uppercase">Scalabilité</span>
            </div>
          </div>
        </div>

        {/* Parallax Décoratif */}
        <div className="absolute top-20 left-20 text-[20vw] font-black text-slate-50 -z-10 select-none italic">EFRA</div>
      </section>

      {/* SECTION 2 : LE REVEAL SCROLL (LES CARTES) */}
      <section className="relative z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        
        {PROTOCOLS.map((p, index) => (
          <section 
            key={p.id} 
            className="sticky top-0 h-screen w-full flex items-center justify-center bg-white border-t border-slate-100"
          >
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* CÔTÉ GAUCHE : IDENTITÉ */}
              <div className="relative">
                <span className="text-[15vw] font-black text-slate-50 absolute -top-20 -left-10 z-0 italic">
                  {p.id}
                </span>
                <div className="relative z-10">
                  <div className={`w-12 h-1.5 ${p.color} mb-8`}></div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
                    Categorie_{p.category}
                  </span>
                  <h2 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-10 text-slate-900">
                    {p.title}
                  </h2>
                  <ul className="space-y-4">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase font-mono">
                        <span className={`w-2 h-2 rotate-45 ${p.color}`}></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CÔTÉ DROIT : INVESTISSEMENT */}
              <div className="flex flex-col justify-center items-end text-right">
                <div className="mb-12">
                  <span className="text-xs font-mono font-black opacity-30 uppercase tracking-[0.3em]">Capital_Required</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-8xl font-black tracking-tighter italic text-slate-900">{p.price}</span>
                    <span className="text-2xl font-bold opacity-20 uppercase italic">CFA</span>
                  </div>
                </div>
                
                <button className="group relative w-full lg:w-96 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.4em] overflow-hidden rounded-sm transition-transform active:scale-95">
                  <Link
                  href="https://wa.me/+22601479800">
                  <span className="relative z-10">Me contacter</span>
                  </Link>
                  <div className={`absolute inset-0 ${p.color} translate-y-full group-hover:translate-y-0 transition-transform duration-500`}></div>
                </button>
              </div>

            </div>
          </section>
        ))}

        {/* SECTION 3 : LE CLOSER (CONSULTING) */}
        <section className="relative min-h-screen bg-slate-900 text-white flex items-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
            <div>
              <h3 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
                Besoin d'un <br />
                <span className="text-primary italic">Expert ?</span>
              </h3>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md">
                Pour les systèmes complexes, l'IA générative personnalisée ou les infrastructures Cloud critiques.
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="group cursor-pointer">
                <span className="text-ai font-mono text-[10px] font-black uppercase tracking-[0.5em] block mb-4">// AI_Stratégie</span>
                <p className="text-3xl font-bold italic group-hover:translate-x-4 transition-transform duration-500 underline decoration-ai underline-offset-8">
                     <Link
                  href="https://wa.me/+22601479800">
                  <span className="relative z-10">Consulting RAG & Agents IA →</span>
                  </Link> 
                  </p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-data font-mono text-[10px] font-black uppercase tracking-[0.5em] block mb-4">// Infrastructure</span>
                <p className="text-3xl font-bold italic group-hover:translate-x-4 transition-transform duration-500 underline decoration-data underline-offset-8">
                      <Link
                  href="https://wa.me/+22601479800">
                  <span className="relative z-10">Cloud & DevOps Mastery →</span>
                  </Link>  </p>
              </div>
            </div>
          </div>
          
          {/* Background Decor */}
          <div className="absolute top-0 right-0 text-[30vw] font-black text-white/[0.02] italic select-none">AI</div>
        </section>
      </section>

    </main>
  );
}