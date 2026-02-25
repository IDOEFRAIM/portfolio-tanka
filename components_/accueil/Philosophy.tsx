import Link from "next/link";
import { useTranslations } from 'next-intl';

const Philosophy = () => {
  const t = useTranslations('Philosophy');

  return (
    <section className="relative py-24 bg-white dark:bg-[#020617] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
      
      {/* Fond : Texture Grille Minimaliste */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header : Style Éditorial */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 dark:border-white/5 pb-8">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase italic leading-none">
            {t('header_title')} 
            <span className="not-italic font-black block md:inline md:ml-4 text-slate-900 dark:text-white">
              {t('header_subtitle')}
            </span>
          </h2>
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">
            {t('system_status')}
          </span>
        </div>

        {/* La Grille des 3 Piliers : Style Manifeste */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-slate-100 dark:border-white/5">

          {/* BLOC 1 */}
          <div className="group relative p-10 border-r border-b md:border-b-0 border-slate-100 dark:border-white/5 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-white/[0.02]">
            <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 mb-8 block">[01]</span>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 italic">{t('block_1_title')}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-sm">
              {t.rich('block_1_text', {
                bold: (chunks) => <span className="text-slate-900 dark:text-white font-bold">{chunks}</span>
              })}
            </p>
          </div>

          {/* BLOC 2 */}
          <div className="group relative p-10 border-r border-b md:border-b-0 border-slate-100 dark:border-white/5 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-white/[0.02]">
            <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 mb-8 block">[02]</span>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 italic">{t('block_2_title')}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-sm">
               {t('block_2_text')}
            </p>
          </div>

          {/* BLOC 3 */}
          <div className="group relative p-10 border-r border-slate-100 dark:border-white/5 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-white/[0.02]">
            <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 mb-8 block">[03]</span>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 italic">{t('block_3_title')}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-sm">
              {t.rich('block_3_text', {
                highlight: (chunks) => <span className="text-slate-900 dark:text-white font-bold border-b border-slate-900 dark:border-white">{chunks}</span>
              })}
            </p>
          </div>

        </div>

        {/* Lien discret */}
        <div className="mt-16 flex justify-center md:justify-end">
          <Link 
            href="/about" 
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <span>{t('link_read_more')}</span>
            <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;