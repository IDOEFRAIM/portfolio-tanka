import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock Data (Data Science)
const projectsDB: Record<string, any> = {
  "fraud-detection": {
    key: "fraud_detection",
    year: "2024",
    client: "Kaggle Dataset",
    role: "Data Scientist",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SMOTE"],
    demoLink: "https://github.com/IDOEFRAIM/kaggle/tree/master/fraud_detection",
    repoLink: "https://github.com/IDOEFRAIM/kaggle/blob/master/fraud_detection/fraud.ipynb"
  }
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function DataProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projectsDB[slug.toLocaleLowerCase()];
  if (!project) {
    notFound();
  }

  const t = await getTranslations('ProjectDetails');

  // Inline content specific to the fraud detection project
  const title = "Détection de Fraudes";
  const subtitle =
    "Système d'analyse de transactions (Kaggle) — traitement des classes fortement déséquilibrées.";
  const challenge =
    "Les jeux de données de fraude sont massivement déséquilibrés : les transactions frauduleuses représentent une infime portion des enregistrements. Ce déséquilibre fausse les modèles classiques et rend la détection des anomalies difficile sans stratégies adaptées.";
  const solution =
    "Approche multi‑volet : ingénierie de features, rééchantillonnage (SMOTE) et pondération des classes, entraînement de modèles robustes (XGBoost) et pipelines de validation basés sur courbes Precision‑Recall. Ajustement des seuils et monitoring des métriques sensibles (precision, recall, F1) pour limiter les faux positifs tout en capturant les fraudes réelles.";
  const impact =
    "Permet de détecter les transactions frauduleuses avec une meilleure sensibilité sur des données déséquilibrées. Le pipeline inclut des étapes d'explicabilité (SHAP) et des alertes opérationnelles pour intégrer le modèle en production. Repo : https://github.com/IDOEFRAIM";

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/projects" 
          className="inline-block mb-12 text-xs font-mono text-gray-500 hover:text-data transition-colors tracking-widest uppercase"
        >
          {t('back_index')}
        </Link>

        {/* EN-TÊTE (Couleur DATA / Vert) */}
        <div className="mb-20 border-b border-gray-200 dark:border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-1 text-[10px] font-mono font-bold bg-data/10 text-data rounded border border-data/20 uppercase">
                Module: Fraud_Detection
             </span>
             <span className="text-xs font-mono text-gray-400">Imbalanced Data / Anomaly Detection</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* GAUCHE */}
          <div className="lg:col-span-8 space-y-16">
              
             {/* Visualisation Graphique (Barres animées) */}
             <div className="w-full bg-gray-900 rounded-xl border border-gray-300 dark:border-white/10 flex items-end justify-center gap-2 px-20 py-20 relative overflow-hidden group h-[300px]">
                
                {/* Simulation de Bar Chart */}
                {[40, 70, 50, 90, 60, 80, 45, 75, 55, 95].map((h, i) => (
                    <div 
                        key={i} 
                        className="w-4 bg-data/50 group-hover:bg-data transition-colors duration-300 rounded-t-sm relative"
                        style={{ height: `${h}%` }}
                    >
                        {/* Petite lueur au sommet de la barre */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/50"></div>
                    </div>
                ))}
                
                <div className="absolute top-6 right-6 font-mono text-xs text-data border border-data px-2 py-1 rounded bg-black/50">
                    LIVE_FEED ●
                </div>

                {/* Glow Vert */}
                <div className="absolute inset-0 bg-data/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
             </div>

             {/* Textes */}
             <div>
                <h3 className="text-lg font-bold font-mono text-data mb-4 uppercase tracking-wider">
                  {t('challenge_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {challenge}
                </p>
             </div>

             <div>
                <h3 className="text-lg font-bold font-mono text-data mb-4 uppercase tracking-wider">
                  {t('solution_title')}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {solution}
                </p>
             </div>

             {/* Impact */}
             <div className="p-6 bg-data/5 border-l-4 border-data rounded-r-xl">
                <h3 className="text-lg font-bold font-mono text-data mb-2 uppercase tracking-wider">
                  {t('impact_title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{impact}"
                </p>
             </div>
          </div>

          {/* DROITE */}
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
                    <p className="text-xs text-gray-400 uppercase">Processing</p>
                    <p className="font-bold">Batch + Online Scoring</p>
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
                    <span key={tech} className="px-3 py-1 text-xs font-mono border border-data/30 text-data bg-data/5 rounded">
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
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-data text-black font-bold text-sm rounded shadow-lg shadow-data/20 hover:bg-data/90 transition-colors"
                  >
                    <span>Repository</span>
                    <span>→</span>
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 dark:border-white/20 hover:border-data text-gray-600 dark:text-gray-300 hover:text-data transition-colors text-sm rounded font-mono"
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