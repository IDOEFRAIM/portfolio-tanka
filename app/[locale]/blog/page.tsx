import { getTranslations, setRequestLocale } from 'next-intl/server';
import BlogList from '@/components_/BlogList';
import { blogService } from '@/lib/blog-service';

// ISR: Revalidate every hour (3600 seconds)
// This creates the "Netflix-like" effect where the cache is updated periodically
export const revalidate = 3600;

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  // Récupération des traductions côté Serveur pour la performance
  const t = await getTranslations('Blog');
  
  // Fetch articles from Appwrite
  const articles = await blogService.getAllArticles(locale);
  
  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white pt-24 pb-20 px-6 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EN-TÊTE BLOG STYLE UNTITLED UI */}
        <div className="py-12 md:py-20 text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-4 text-sm md:text-base tracking-wide uppercase">
             {locale === 'fr' ? 'Notre Blog' : 'Our Blog'}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder={locale === 'fr' ? 'Entrez votre email' : 'Enter your email'}
               className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400"
             />
             <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
               {locale === 'fr' ? "S'abonner" : 'Subscribe'}
             </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            {locale === 'fr' ? "Nous nous soucions de vos données dans notre politique de confidentialité." : "We care about your data in our privacy policy."}
          </p>
        </div>

        {/* LISTE DES ARTICLES */}
        <BlogList initialArticles={articles} locale={locale} />

      </div>
    </main>
  );
}