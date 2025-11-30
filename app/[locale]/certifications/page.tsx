// app/[locale]/certifications/page.tsx
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { certifications } from '@/lib/mock-certifications';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

const getBadgeTheme = (cat: string) => {
  switch (cat) {
    case 'dev': return 'border-web text-web bg-web/5 hover:bg-web/10';
    case 'ai':  return 'border-ai text-ai bg-ai/5 hover:bg-ai/10';
    case 'ml':  return 'border-data text-data bg-data/5 hover:bg-data/10';
    default:    return 'border-primary text-primary bg-primary/5';
  }
};

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  // Définit la locale pour next-intl côté serveur
  setRequestLocale(locale);

  // Récupère les traductions côté serveur (namespace 'Certifications')
  const t = await getTranslations('Certifications');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="font-mono text-primary tracking-widest text-sm uppercase">
              /root/user/efraim/credentials
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-mono">
            // {t('subtitle')}
          </p>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-light">
            {t('intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => {
            const themeClass = getBadgeTheme(cert.category);

            return (
              <div
                key={cert.id}
                className={`group relative p-8 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${themeClass.replace('bg-', 'bg-').split(' ')[2].replace('/5', '')} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                <div className="flex justify-between items-start mb-6">
                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${themeClass}`}>
                      <Award className="w-6 h-6" />
                   </div>

                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                   </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="mb-6">
                   <p className="text-xs font-mono text-gray-400 uppercase mb-1">{t('issued_by')}</p>
                   <p className="text-sm font-semibold">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 text-[10px] font-mono border border-gray-200 dark:border-white/10 rounded bg-gray-50 dark:bg-black/30 text-gray-500 dark:text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-end justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                   <div>
                      <p className="text-xs font-mono text-gray-400 uppercase mb-1">{t('date_label')}</p>
                      <p className="text-sm font-bold">{cert.date}</p>
                   </div>

                   <a
                     href={cert.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:underline ${themeClass.split(' ')[1]}`}
                   >
                     {t('verify_btn')}
                     <ExternalLink className="w-3 h-3" />
                   </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}