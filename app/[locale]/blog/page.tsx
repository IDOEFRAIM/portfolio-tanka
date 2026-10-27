import { getTranslations, setRequestLocale } from 'next-intl/server';
import BlogList from '@/components_/BlogList';
import SectionHeader from '@/components_/SectionHeader';
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
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-24 pb-20 px-6">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="py-12 md:py-20 space-y-8">
          <SectionHeader
            eyebrow={locale === 'fr' ? 'Notre Blog' : 'Our Blog'}
            title={t('title')}
            description={t('subtitle')}
            align="center"
          />

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
             <input 
               type="email" 
               placeholder={locale === 'fr' ? 'Entrez votre email' : 'Enter your email'}
               className="flex-1 px-4 py-3 rounded-full border border-brand-border/40 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-brand-border"
             />
             <button className="px-6 py-3 rounded-full border border-brand-border/40 bg-brand-deep text-brand-paper text-sm tracking-[0.3em] uppercase">
               {locale === 'fr' ? "S'abonner" : 'Subscribe'}
             </button>
          </div>
          <p className="text-sm text-brand-border/80 text-center">
            {locale === 'fr' ? "Nous nous soucions de vos données dans notre politique de confidentialité." : "We care about your data in our privacy policy."}
          </p>
        </div>

        {/* LISTE DES ARTICLES */}
        <BlogList initialArticles={articles} locale={locale} />

      </div>
    </main>
  );
}