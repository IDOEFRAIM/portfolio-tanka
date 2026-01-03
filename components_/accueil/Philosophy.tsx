import Link from "next/link";
import { useTranslations } from 'next-intl';

const Philosophy = () => {
  const t = useTranslations('Philosophy');

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-black text-slate-900 dark:text-white border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      
      {/* Éléments de fond (Grille adaptée Dark/Light) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         {/* Gradient d'ambiance en haut à droite */}
         <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de section style "Terminal" */}
        <div className="mb-16 flex items-end justify-between border-b border-gray-200 dark:border-white/10 pb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase">
            {t('header_title')} 
            {/* Utilisation du Gradient Centralisé */}
            <span className="text-transparent bg-clip-text bg-hero-gradient ml-2">
              {t('header_subtitle')}
            </span>
          </h2>
          <span className="hidden md:block font-mono text-xs text-primary tracking-widest font-bold">
            {t('system_status')}
          </span>
        </div>

        {/* La Grille des 3 Piliers (Mindset) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BLOC 1 : L'Origine (Couleur PRIMARY / Indigo) */}
          <div className="group relative p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 rounded-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-6xl font-black text-slate-900 dark:text-white">01</span>
            </div>
            <h3 className="text-xl font-mono text-primary font-bold mb-4">{t('block_1_title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              {t.rich('block_1_text', {
                bold: (chunks) => <strong className="text-slate-900 dark:text-white font-bold">{chunks}</strong>
              })}
            </p>
          </div>

          {/* BLOC 2 : Le Loup (Couleur DATA / Vert) */}
          <div className="group relative p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 rounded-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-6xl font-black text-slate-900 dark:text-white">02</span>
            </div>
            <h3 className="text-xl font-mono text-data font-bold mb-4">{t('block_2_title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
               {t('block_2_text')}
            </p>
          </div>

          {/* BLOC 3 : La Cible (Couleur SECONDARY / Violet) */}
          <div className="group relative p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 rounded-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-6xl font-black text-slate-900 dark:text-white">03</span>
            </div>
            <h3 className="text-xl font-mono text-secondary font-bold mb-4">{t('block_3_title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              {t.rich('block_3_text', {
                highlight: (chunks) => <span className="text-transparent bg-clip-text bg-hero-gradient font-bold">{chunks}</span>
              })}
            </p>
          </div>

        </div>

        {/* Bouton de lien discret en bas */}
        <div className="mt-12 text-center md:text-right">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-primary dark:hover:text-white transition-colors border-b border-transparent hover:border-primary dark:hover:border-white pb-1"
          >
            <span>{t('link_read_more')}</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;