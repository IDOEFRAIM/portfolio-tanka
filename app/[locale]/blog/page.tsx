import { getTranslations } from 'next-intl/server';
import { getAllArticles, Article } from '@/lib/mock-articles';
import Link from 'next/link';
import { Clock, Calendar, Hash } from 'lucide-react';

// Composant pour chaque carte d'article
const ArticleCard = ({ article }: { article: Article }) => {
  //Penser a ajouter d autre partie,pas juste la tech,montrer ses softskill
  const categoryColors:any = {
    'web': 'text-sky-500 border-sky-500/30 bg-sky-500/5',
    'ia': 'text-pink-500 border-pink-500/30 bg-pink-500/5',
    'data': 'text-green-500 border-green-500/30 bg-green-500/5',
  };

  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="block p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 group shadow-md hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        <span className={`text-xs font-mono uppercase px-3 py-1 border rounded-full whitespace-nowrap ml-4 ${categoryColors[article.category]}`}>
            {article.category}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {article.summary}
      </p>
      
      <div className="flex items-center space-x-4 text-xs font-mono text-gray-500 dark:text-gray-500">
        <span className="flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {article.date}
        </span>
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {article.readTime}
        </span>
        
      </div>
    </Link>
  );
};


export default async function BlogIndexPage() {
  // Récupération des traductions côté Serveur pour la performance
  const t = await getTranslations('Blog');
  
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      
      {/* Fond Grille */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* EN-TÊTE BLOG */}
        <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-6">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-mono">
            // {t('subtitle')}
          </p>
        </div>

        {/* LISTE DES ARTICLES :efra n oublie pas de segmenter selon le type et d ajouter un filtreur apres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

      </div>
    </main>
  );
}