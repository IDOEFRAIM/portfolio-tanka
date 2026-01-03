import { getTranslations } from 'next-intl/server';
import BlogList from '@/components_/BlogList';
import { blogService } from '@/lib/blog-service';

// ISR: Revalidate every hour (3600 seconds)
// This creates the "Netflix-like" effect where the cache is updated periodically
export const revalidate = 3600;

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Récupération des traductions côté Serveur pour la performance
  const t = await getTranslations('Blog');
  
  // Fetch articles on the server with ISR
  const articles = await blogService.getAllArticles(locale);
  
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

        {/* LISTE DES ARTICLES (Server Component Data -> Client Component Display) */}
        <BlogList articles={articles} />

      </div>
    </main>
  );
}