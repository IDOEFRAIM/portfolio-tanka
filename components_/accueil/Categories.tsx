import Link from 'next/link';
import { useTranslations } from 'next-intl';

const categoriesConfig = [
  {
    id: "01",
    key: "cat_1",
    link: "en/projects/web/Schola",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: "02",
    key: "cat_2",
    link: "en/projects/mobile/Liber",
    path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    id: "03",
    key: "cat_3",
    link: "/projects/ai/AgriConnect",
    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    id: "04",
    key: "cat_4",
    link: "/projects/data/fraud-detection",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
  },
];

const Categories = () => {
  const t = useTranslations('Categories');

  return (
    <section className="py-24 bg-white dark:bg-[#020617] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Minimaliste */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase italic">
                {t('header_title')} <span className="font-bold not-italic">{t('header_highlight')}</span>
            </h2>
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
                {t('select_module')}
            </span>
        </div>

        {/* Grille Brutalist / Épurée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-slate-100 dark:border-white/5">
          
          {categoriesConfig.map((cat) => (
            <Link 
              key={cat.id}
              href={cat.link}
              className="group relative flex flex-col p-8 border-r border-b border-slate-100 dark:border-white/5 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-white/[0.02]"
            >
                {/* Numéro Discret */}
                <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 mb-8 block group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    [{cat.id}]
                </span>

                {/* Icône Simplifiée */}
                <div className="mb-8 h-6 w-6 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={cat.path} />
                    </svg>
                </div>
              
                {/* Titre & Sous-titre */}
                <h3 className="text-xl font-medium tracking-tight mb-1">
                    {t(`${cat.key}_title`)}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                    {t(`${cat.key}_sub`)}
                </p>
              
                {/* Description avec interlignage serré */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                    {t(`${cat.key}_desc`)}
                </p>
              
                {/* Flèche de lien minimale */}
                <div className="mt-auto flex items-center gap-2 overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-widest translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        {t('action_access')}
                    </span>
                    <span className="text-lg translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">→</span>
                </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Categories;