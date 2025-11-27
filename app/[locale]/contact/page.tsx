import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ContactPage({ params }: Props) {
  // ✅ Déstructure avec React.use pour éviter l'erreur "params is a Promise"
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('ContactPage');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-6 flex items-end justify-between">
          <div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-mono">
              // {t('subtitle')}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('status')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLONNE GAUCHE : Infos de contact */}
          <div className="space-y-12">
            
            {/* Email Direct */}
            <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
              <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">
                {t('email_label')}
              </h3>
              <a
                href="mailto:idoefraim06@example.com"
                className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors break-all"
              >
                idoefraim06@example.com
              </a>
            </div>

            {/* Réseaux Sociaux */}
            <div>
              <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-6">
                {t('socials_label')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/efraim-m-d-ido-a30021276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                >
                  <span className="font-bold">LinkedIn</span>
                  <span className="opacity-50 group-hover:opacity-100">↗</span>
                </a>
                <a
                  href="https://github.com/IDOEFRAIM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 group"
                >
                  <span className="font-bold">GitHub</span>
                  <span className="opacity-50 group-hover:opacity-100">↗</span>
                </a>
                <a
                  href="https://wa.me/+22601479800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 group"
                >
                  <span className="font-bold">Whatsapp</span>
                  <span className="opacity-50 group-hover:opacity-100">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Formulaire */}
          <div className="relative">
            {/* Effet de bordure néon */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 dark:opacity-30"></div>
            
            <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 rounded-xl">
              <form className="space-y-6">
                
                {/* Nom */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {t('form_name')}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Tanka IDO"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {t('form_email')}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="ido@numix.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {t('form_message')}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tu as une question ou un projet en tête ? C'est simple, ecris moi!"
                  />
                </div>

                {/* Bouton Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg"
                >
                  {t('btn_send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}