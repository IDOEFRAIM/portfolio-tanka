import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock Data (Simule une base de données)
const projectsDB: Record<string, any> = {
  "Liber": {
    key: "liber",
    year: "2023",
    client: "Personnel",
    role: "Lead Full-Stack",
    stack: ["Next.js 14", "PostgreSQL", "GraphQL", "Docker", "Redis"],
    demoLink: "https://wa.me/+2120782901759",
    repoLink: "https://wa.me/+2120782901759"
  }
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function WebProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // On verifie d abord si le projet existe
  const project = projectsDB[slug.toLocaleLowerCase()];
  if (!project) {
    notFound(); 
  }

  // Ensuite on charge la traduction
  const t = await getTranslations('ProjectDetails');
  const content = await getTranslations(`Project_Liber`); // Pour l'instant on force Schola pour la démo

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Retour */}
        <Link 
          href="/projects" 
          className="inline-block mb-12 text-xs font-mono text-gray-500 hover:text-web transition-colors tracking-widest uppercase"
        >
          {t('back_index')}
        </Link>

        {/* EN-TÊTE PROJET */}
        <div className="mb-20 border-b border-gray-200 dark:border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-4">
             {/* Badge Couleur WEB */}
             <span className="px-2 py-1 text-[10px] font-mono font-bold bg-web/10 text-web rounded border border-web/20 uppercase">
                Module: Mobile_App
             </span>
             <span className="text-xs font-mono text-gray-400">Build v.1.0.4</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">
            {content('title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl leading-relaxed">
            {content('subtitle')}
          </p>
        </div>

        {/* CONTENU : Grille 2 Colonnes (Gauche: Info, Droite: Détails) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLONNE GAUCHE : Le Récit (8 colonnes) */}
          <div className="lg:col-span-8 space-y-16">
             
             {/* Placeholder Image / Mockup */}
             <div className="aspect-video w-full bg-gray-200 dark:bg-white/5 rounded-xl border border-gray-300 dark:border-white/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-web/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                <span className="font-mono text-gray-400 text-sm">[ IMAGE_INDISPONIBLE]</span>
             </div>

             {/* Challenge */}
             <div>
                <h3 className="text-lg font-bold font-mono text-web mb-4 uppercase tracking-wider">
                  {t('challenge_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content('challenge')}
                </p>
             </div>

             {/* Solution */}
             <div>
                <h3 className="text-lg font-bold font-mono text-web mb-4 uppercase tracking-wider">
                  {t('solution_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content('solution')}
                </p>
             </div>

             {/* Impact */}
             <div className="p-6 bg-web/5 border-l-4 border-web rounded-r-xl">
                <h3 className="text-lg font-bold font-mono text-web mb-2 uppercase tracking-wider">
                  {t('impact_title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{content('impact')}"
                </p>
             </div>

          </div>

          {/* COLONNE DROITE : Sidebar Technique (4 colonnes) */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Bloc Infos */}
            <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
               <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-white/5 pb-2">
                 {t('mission_brief')}
               </h4>
               
               <div className="space-y-4">
                 <div>
                    <p className="text-xs text-gray-400 uppercase">Client</p>
                    <p className="font-bold">{project.client}</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase">Year</p>
                    <p className="font-bold">{project.year}</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase">Role</p>
                    <p className="font-bold">{project.role}</p>
                 </div>
               </div>
            </div>

            {/* Bloc Stack */}
            <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
               <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-white/5 pb-2">
                 {t('architecture')}
               </h4>
               <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono border border-web/30 text-web bg-web/5 rounded">
                      {tech}
                    </span>
                  ))}
               </div>
            </div>

            {/* Bloc Actions */}
            <div>
               <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                 {t('links')}
               </h4>
               <div className="flex flex-col gap-3">
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-web text-white font-bold text-sm rounded shadow-lg shadow-web/20 hover:bg-web/90 transition-colors"
                  >
                    <span>{t('btn_live')}</span>
                    <span>→</span>
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 dark:border-white/20 hover:border-web text-gray-600 dark:text-gray-300 hover:text-web transition-colors text-sm rounded font-mono"
                  >
                    {t('btn_repo')}
                  </a>
               </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}