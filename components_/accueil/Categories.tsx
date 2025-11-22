import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Configuration utilisant les NOMS SÉMANTIQUES (web, mobile, ai, data)
const categoriesConfig = [
  {
    id: "01",
    key: "cat_1",
    link: "/projects/web",
    // Utilisation de la couleur 'web'
    colorClass: "hover:border-web hover:shadow-web/20 dark:hover:shadow-web/20",
    iconColor: "text-web", 
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: "02",
    key: "cat_2",
    link: "/projects/mobile",
    // Utilisation de la couleur 'mobile'
    colorClass: "hover:border-mobile hover:shadow-mobile/20 dark:hover:shadow-mobile/20",
    iconColor: "text-mobile",
    path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    id: "03",
    key: "cat_3",
    link: "/projects/ai",
    // Utilisation de la couleur 'ai'
    colorClass: "hover:border-ai hover:shadow-ai/20 dark:hover:shadow-ai/20",
    iconColor: "text-ai",
    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    id: "04",
    key: "cat_4",
    link: "/projects/ml",
    // Utilisation de la couleur 'data'
    colorClass: "hover:border-data hover:shadow-data/20 dark:hover:shadow-data/20",
    iconColor: "text-data",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
  },
];

const Categories = () => {
  const t = useTranslations('Categories');

  return (
    <section className="py-24 bg-gray-50 dark:bg-black text-slate-900 dark:text-white border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">
                {t('header_title')} <span className="text-primary">{t('header_highlight')}</span>
            </h2>
            <span className="hidden md:block text-xs font-mono text-gray-500">
                {t('select_module')}
            </span>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {categoriesConfig.map((cat) => (
            <Link 
              key={cat.id}
              href={cat.link}
              className={`group relative flex flex-col p-6 rounded-lg transition-all duration-300 
                bg-white dark:bg-neutral-900/50 
                border border-gray-200 dark:border-white/10 
                shadow-sm dark:shadow-none hover:shadow-xl
                ${cat.colorClass}`}
            >
                {/* Numéro */}
                <span className="absolute top-4 right-4 text-xs font-mono text-gray-300 dark:text-gray-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {cat.id}
                </span>

                {/* Icône */}
                <div className={`mb-6 h-10 w-10 ${cat.iconColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={cat.path} />
                    </svg>
                </div>
              
                {/* Textes */}
                <h3 className="text-lg font-bold font-mono tracking-tight mb-1 text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                    {t(`${cat.key}_title`)}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    {t(`${cat.key}_sub`)}
                </p>
              
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-gray-300">
                    {t(`${cat.key}_desc`)}
                </p>
              
                {/* Action */}
                <div className="mt-auto pt-6 flex justify-end">
                    <span className={`text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cat.iconColor}`}>
                        {t('action_access')}
                    </span>
                </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Categories;