// 1. ATTENTION À L'IMPORT ICI (next-intl/server)
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

const projectsData = [
  {
    id: "1",
    slug: "AgriConnect",
    category: "ai",
    stack: ["Python", "TensorFlow", "Next.js"],
    status: "deployed"
  },
  {
    id: "2",
    slug: "Liber",
    category: "mobile",
    stack: ["Flutter", "Dart", "Firebase"],
    status: "deployed"
  },
  {
    id: "3",
    slug: "Schola",
    category: "web",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    status: "In Progress"
  },
  {
    id: "4",
    slug: "fraud-detection",
    category: "data",
    stack: ["numpy", "matplotlib", "imbalanced-learn"],
    status: "building"
  }
];

const getCategoryStyles = (cat: string) => {
  switch (cat) {
    case 'web': return 'border-web text-web shadow-web/10 hover:shadow-web/30';
    case 'mobile': return 'border-mobile text-mobile shadow-mobile/10 hover:shadow-mobile/30';
    case 'ai': return 'border-ai text-ai shadow-ai/10 hover:shadow-ai/30';
    case 'data': return 'border-data text-data shadow-data/10 hover:shadow-data/30';
    default: return 'border-primary text-primary shadow-primary/10 hover:shadow-primary/30';
  }
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  
  // Active le rendu statique pour cette locale
  setRequestLocale(locale);
  
  // 2. CORRECTION ICI : On utilise await getTranslations()
  // car nous sommes dans un composant asynchrone (Server Component)
  const t = await getTranslations('ProjectsIndex');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>System_Status: Online</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              {t('title')}
            </h1>
          </div>
          <p className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md text-right">
            // {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projectsData.map((project) => {
             const styles = getCategoryStyles(project.category);
             
             return (
              <Link 
                key={project.id} 
                href={`/projects/${project.category}/${project.slug}`}
                className={`group relative flex flex-col h-full p-6 rounded-xl border bg-white dark:bg-white/5 transition-all duration-300 hover:-translate-y-1 ${styles} hover:border-opacity-100 border-opacity-30 dark:border-opacity-30 border-gray-300 dark:border-white/10 shadow-lg`}
              >
                
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-xs font-mono font-bold uppercase px-2 py-1 rounded bg-current bg-opacity-10`}>
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-full">
                    {project.status === 'deployed' ? t('status_deployed') : t('status_building')}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-current transition-colors">
                  {t(`items.${project.id}.title`)}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                   {t(`items.${project.id}.desc`)}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-gray-100 dark:bg-black/50 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-2 text-xs font-mono font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    {t('view_project')}
                  </div>
                </div>

              </Link>
             );
          })}

        </div>

      </div>
    </main>
  );
}