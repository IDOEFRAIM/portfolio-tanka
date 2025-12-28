import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock Data AI
const projectsDB: Record<string, any> = {
  "agriconnect": {
    key: "AgriConnect",
    year: "2025",
    client: "AgriConnect",
    role: "ML Engineer",
    stack: ["Python", "PyTorch", "FastAPI", "Docker", "PostGIS", "Sentinel Hub"],
    demoLink: "https://wa.me/+2120782901759",
    repoLink: "https://github.com/IDOEFRAIM/AgriConnect"
  }
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function AIProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // 1. Vérification
  const project = projectsDB[slug.toLocaleLowerCase()];
  if (!project) {
    notFound();
  }

  // 2. Traductions
  const t = await getTranslations('ProjectDetails');
  const content = await getTranslations(`Project_${project.key}`);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Retour */}
        <Link 
          href="/projects" 
          className="inline-block mb-12 text-xs font-mono text-gray-500 hover:text-ai transition-colors tracking-widest uppercase"
        >
          {t('back_index')}
        </Link>

        {/* EN-TÊTE PROJET (Couleur AI / Jaune) */}
        <div className="mb-20 border-b border-gray-200 dark:border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 text-[10px] font-mono font-bold bg-ai/10 text-ai rounded border border-ai/20 uppercase">
                Module: AI_Model
             </span>
             <span className="text-xs font-mono text-gray-400">Computer Vision | AI Engineering</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">
            {content('title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl leading-relaxed">
            {content('subtitle')}
          </p>
        </div>

        {/* CONTENU */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLONNE GAUCHE */}
          <div className="lg:col-span-8 space-y-16">
             
             {/* Visualisation de Données (Abstrait) */}
             <div className="w-full bg-gray-900 rounded-xl border border-gray-300 dark:border-white/10 flex items-center justify-center relative overflow-hidden group py-20">
                
                {/* Grille de neurones simulée */}
                <div className="grid grid-cols-6 gap-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-ai animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-ai font-bold text-lg tracking-widest border border-ai px-4 py-2 bg-black/50 backdrop-blur-sm">
                        INFERENCE_ENGINE
                    </span>
                </div>

                {/* Glow Jaune */}
                <div className="absolute inset-0 bg-ai/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
             </div>

             {/* Sections Texte */}
             <div>
                <h3 className="text-lg font-bold font-mono text-ai mb-4 uppercase tracking-wider">
                  {t('challenge_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content('challenge')}
                </p>
             </div>

             <div>
                <h3 className="text-lg font-bold font-mono text-ai mb-4 uppercase tracking-wider">
                  {t('solution_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content('solution')}
                </p>
             </div>

             {/* Impact */}
             <div className="p-6 bg-ai/5 border-l-4 border-ai rounded-r-xl">
                <h3 className="text-lg font-bold font-mono text-ai mb-2 uppercase tracking-wider">
                  {t('impact_title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{content('impact')}"
                </p>
             </div>

          </div>

          {/* COLONNE DROITE */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Infos */}
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
                    <p className="text-xs text-gray-400 uppercase">Role</p>
                    <p className="font-bold">{project.role}</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase">Model</p>
                    <p className="font-bold">CNN (ResNet) | Agentic | RAG</p>
                 </div>
               </div>
            </div>

            {/* Stack */}
            <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
               <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-white/5 pb-2">
                 {t('architecture')}
               </h4>
               <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono border border-ai/30 text-ai bg-ai/5 rounded">
                      {tech}
                    </span>
                  ))}
               </div>
            </div>

            {/* Actions */}
            <div>
               <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                 {t('links')}
               </h4>
               <div className="flex flex-col gap-3">
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-ai text-black font-bold text-sm rounded shadow-lg shadow-ai/20 hover:bg-ai/90 transition-colors"
                  >
                    {/* Note: Texte noir sur fond jaune pour la lisibilité */}
                    <span>Live Demo</span>
                    <span>→</span>
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 dark:border-white/20 hover:border-ai text-gray-600 dark:text-gray-300 hover:text-ai transition-colors text-sm rounded font-mono"
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