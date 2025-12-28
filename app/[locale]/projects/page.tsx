// app/[locale]/projects/page.tsx
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

// 1. Données synchronisées avec tes traductions JSON
const projectsData = [
  {
    id: "1",
    slug: "agriconnect",
    category: "ai",
    stack: ["Python", "TensorFlow", "Satellite API"],
    status: "deployed"
  },
  {
    id: "2",
    slug: "liber",
    category: "web",
    stack: ["Next.js", "GraphQL", "PWA"],
    status: "deployed"
  },
  {
    id: "3",
    slug: "edutrack-lms",
    category: "web",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    status: "deployed"
  },
  {
    id: "4",
    slug: "fraud-detection",
    category: "data",
    stack: ["Scikit-Learn", "XGBoost", "Python"],
    status: "building"
  },
  {
    id: "5",
    slug: "mindcare",
    category: "web",
    stack: ["RAG", "LLM", "Next.js"],
    status: "deployed"
  },
  {
    id: "6",
    slug: "amira-shop",
    category: "web",
    stack: ["Next.js", "Stripe", "Tailwind"],
    status: "deployed"
  }
];

// Helper pour le style visuel par catégorie
const getCategoryStyles = (cat: string) => {
  switch (cat) {
    case 'web': return 'border-blue-500/30 text-blue-500 shadow-blue-500/5 hover:border-blue-500 hover:shadow-blue-500/20';
    case 'mobile': return 'border-purple-500/30 text-purple-500 shadow-purple-500/5 hover:border-purple-500 hover:shadow-purple-500/20';
    case 'ai': return 'border-yellow-500/30 text-yellow-500 shadow-yellow-500/5 hover:border-yellow-500 hover:shadow-yellow-500/20';
    case 'data': return 'border-green-500/30 text-green-500 shadow-green-500/5 hover:border-green-500 hover:shadow-green-500/20';
    default: return 'border-gray-500/30 text-gray-500 shadow-gray-500/5 hover:border-gray-500 hover:shadow-gray-500/20';
  }
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  
  setRequestLocale(locale);
  const t = await getTranslations('ProjectsIndex');

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300 overflow-hidden">
      
      {/* Background Grid - Style Architecture/System */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div>
         <div className="absolute inset-0 bg-radial-gradient from-transparent via-white dark:via-[#050505] to-white dark:to-[#050505]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header du Registre */}
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-green-500 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>{locale === 'fr' ? 'Système_Opérationnel' : 'System_Online'}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
              {t('title')}
            </h1>
          </div>
          <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-sm md:text-right leading-tight">
            // {t('subtitle')}
          </p>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => {
             const styles = getCategoryStyles(project.category);
             
             return (
              <Link 
                key={project.id} 
                href={`/projects/${project.category}/${project.slug}`}
                className={`group relative flex flex-col h-full p-8 rounded-none border bg-white dark:bg-[#0A0A0A] transition-all duration-500 ${styles} shadow-xl`}
              >
                {/* Status & Catégorie */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Module</span>
                    <span className="text-sm font-mono font-bold uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Status</span>
                    <span className="text-[10px] font-mono font-bold uppercase border border-current px-2 py-0.5 mt-1">
                      {project.status === 'deployed' ? t('status_deployed') : t('status_building')}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4 mb-12">
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                    {t(`items.${project.id}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-3">
                     {t(`items.${project.id}.desc`)}
                  </p>
                </div>

                {/* Footer de Carte */}
                <div className="mt-auto space-y-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono py-0.5 px-2 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono font-black uppercase tracking-[0.2em]">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-current">
                      {t('view_project')}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Effet Décoratif "Corner" */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
             );
          })}
        </div>

      </div>
    </main>
  );
}