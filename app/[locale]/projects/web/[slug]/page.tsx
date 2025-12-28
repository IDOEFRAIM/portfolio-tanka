import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// --- DATA & HELPERS ---

const projectsDB: Record<string, any> = {
  "agriconnect": {
    translationKey: "Project_AgriConnect",
    category: "ai",
    year: "2024",
    client: "AgriTech Initiative",
    role: "AI Engineer",
    stack: ["Python", "TensorFlow", "Sentinel-2 API", "Cloud"],
    images: [], 
    demoLink: "#",
    repoLink: "https://github.com/IDOEFRAIM"
  },
  "liber": {
    translationKey: "Project_Liber",
    category: "web",
    year: "2023",
    client: "Education NGO",
    role: "Full-Stack Developer",
    stack: ["Next.js", "GraphQL", "PWA", "IndexedDB"],
    images: ["/projects/liber-1.jpg"], 
    demoLink: "#",
    repoLink: "https://github.com/IDOEFRAIM"
  },
  "edutrack-lms": {
    translationKey: "Project_schola",
    category: "web",
    year: "2024",
    client: "West Africa Schools",
    role: "Lead Architect",
    stack: ["Next.js", "PostgreSQL", "Docker", "GraphQL"],
    images: [],
    demoLink: "#",
    repoLink: "https://github.com/IDOEFRAIM"
  },
  "fraud-detection": {
    translationKey: "Project_fraud-detection",
    category: "data",
    year: "2023",
    client: "FinTech Research",
    role: "Data Scientist",
    stack: ["Scikit-Learn", "XGBoost", "SHAP", "FastAPI"],
    images: [],
    demoLink: "#",
    repoLink: "https://github.com/IDOEFRAIM"
  },
  "mindcare": {
    translationKey: "Project_mindcare",
    category: "ai",
    year: "2024",
    client: "HealthTech Startup",
    role: "AI & Full-Stack",
    stack: ["RAG", "LLM (GPT-4)", "Next.js", "Tailwind"],
    images: ["/mindcare1.jpeg", "/mindcare2.jpeg", "/mindcare3.jpeg"], 
    demoLink: "https://mindcare-wheat.vercel.app/expertise",
    repoLink: "https://github.com/IDOEFRAIM"
  },
  "amira-shop": {
    translationKey: "Project_amira_shop",
    category: "web",
    year: "2024",
    client: "E-commerce Regional",
    role: "Lead Developer",
    stack: ["Next.js", "Stripe API", "Zustand", "ISR"],
    images: [],
    demoLink: "#",
    repoLink: "https://github.com/IDOEFRAIM"
  }
};

const getColors = (cat: string) => {
  switch (cat) {
    case 'ai': return 'text-yellow-500 border-yellow-500/30 bg-yellow-500/5';
    case 'web': return 'text-blue-500 border-blue-500/30 bg-blue-500/5';
    case 'data': return 'text-green-500 border-green-500/30 bg-green-500/5';
    default: return 'text-primary border-primary/30 bg-primary/5';
  }
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// --- MAIN PAGE COMPONENT ---

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projectsDB[slug.toLocaleLowerCase()];
  if (!project) notFound();

  const t = await getTranslations('ProjectDetails');
  const content = await getTranslations(project.translationKey);
  const colorClass = getColors(project.category);

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* BACK NAV */}
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-2 mb-12 text-[10px] font-mono font-bold text-gray-400 hover:text-current transition-colors tracking-[0.2em] uppercase"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          {t('back_index')}
        </Link>

        {/* HEADER */}
        <div className="mb-20 border-b border-gray-100 dark:border-white/5 pb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-3 py-1 text-[10px] font-mono font-black border uppercase tracking-widest ${colorClass}`}>
              Module: {project.category}_System
            </span>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest italic">
              Registry_ID: {slug.toUpperCase()}_v1
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-none">
            {content('title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-4xl leading-tight">
            {content('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* ENHANCED VISUALS SECTION */}
            <section className="space-y-8">
              <h3 className="text-xs font-black font-mono opacity-40 uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-12 h-[1px] bg-current"></span> 
                Visual_Data_Attachments
              </h3>

              {project.images && project.images.length > 0 ? (
                <div className="grid gap-8">
                  {project.images.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="group relative border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A] p-2"
                    >
                      {/* Technical Label for each image */}
                      <div className="flex justify-between items-center mb-2 px-2">
                        <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">
                          Attachment_0{idx + 1}.raw
                        </span>
                        <span className="text-[9px] font-mono opacity-40 uppercase">
                          Scan_Mode: Active
                        </span>
                      </div>

                      <div className="relative aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image 
                          src={img} 
                          alt={`Project Visual ${idx + 1}`} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-20"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-20"></div>
                    </div>
                  ))}
                </div>
              ) : (
                /* PLACEHOLDER */
                <div className="relative aspect-video w-full flex items-center justify-center border border-dashed border-gray-300 dark:border-white/10 opacity-50">
                   <span className="font-mono text-[10px] tracking-[0.5em] uppercase">No_Visual_Data_Locked</span>
                </div>
              )}
            </section>

            {/* TEXT CONTENT */}
            <div className="grid gap-20">
              <section>
                <h3 className="text-xs font-black font-mono opacity-40 mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-current"></span> {t('challenge_title')}
                </h3>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {content('challenge')}
                </p>
              </section>

              <section>
                <h3 className="text-xs font-black font-mono opacity-40 mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                   <span className="w-8 h-[1px] bg-current"></span> {t('solution_title')}
                </h3>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {content('solution')}
                </p>
              </section>

              <section className={`p-10 border-l-8 ${colorClass.split(' ')[1]} bg-opacity-5`}>
                <h3 className="text-xs font-black font-mono mb-4 uppercase tracking-[0.3em]">
                  {t('impact_title')}
                </h3>
                <p className="text-2xl md:text-3xl font-bold italic tracking-tight leading-tight">
                  "{content('impact')}"
                </p>
              </section>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12">
            
            <div className="sticky top-32 space-y-12">
              {/* MISSION BRIEF */}
              <div className="p-8 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <h4 className="font-mono text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-8 border-b border-current pb-2">
                  {t('mission_brief')}
                </h4>
                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-mono uppercase opacity-40 block mb-1">Client</label>
                    <span className="font-bold text-lg uppercase tracking-tight">{project.client}</span>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase opacity-40 block mb-1">Deployment_Year</label>
                    <span className="font-bold text-lg">{project.year}</span>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase opacity-40 block mb-1">Assigned_Role</label>
                    <span className="font-bold text-lg uppercase tracking-tight">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* ARCHITECTURE */}
              <div className="p-8 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <h4 className="font-mono text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-8 border-b border-current pb-2">
                  {t('architecture')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-mono font-bold border border-gray-200 dark:border-white/10 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROTOCOLS */}
              <div className="space-y-4">
                 <a 
                  href={project.demoLink} 
                  target="_blank"
                  className="flex items-center justify-between w-full p-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-widest hover:invert transition-all duration-300"
                >
                  <span>{t('btn_live')}</span>
                  <span>→</span>
                </a>
                <a 
                  href={project.repoLink} 
                  target="_blank"
                  className="flex items-center justify-between w-full p-4 border border-slate-900 dark:border-white font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <span>{t('btn_repo')}</span>
                  <span className="opacity-30 italic text-[9px]">EXT_SRC</span>
                </a>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}