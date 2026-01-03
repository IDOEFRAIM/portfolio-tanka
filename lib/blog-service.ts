import { databases, APPWRITE_CONFIG } from './appwrite';
import { mockArticles, Article } from './mock-articles';
import { ID, Query } from 'appwrite';

// Helper to map Appwrite document to Article type based on locale
const mapDocumentToArticle = (doc: any, locale: string): Article => {
    // Determine suffix based on locale (default to 'fr')
    const suffix = locale === 'en' ? '_en' : '_fr';
    
    // Helper to get localized field with fallback to base field (for backward compatibility)
    const getField = (field: string) => doc[`${field}${suffix}`] || doc[field];

    const tocRaw = getField('toc');

    return {
        slug: doc.slug, // Slug is usually shared, or you can localize it too if needed
        title: getField('title'),
        subtitle: getField('subtitle'),
        summary: getField('summary'),
        date: doc.date,
        readTime: doc.readTime,
        category: doc.category,
        toc: typeof tocRaw === 'string' ? JSON.parse(tocRaw) : (tocRaw || []),
        content: getField('content'),
        coverImage: doc.coverImage,
    };
};

export const blogService = {
    async getAllArticles(locale: string = 'fr'): Promise<Article[]> {
        try {
            if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
                console.warn('⚠️ [BLOG] Appwrite Project ID not set. Using MOCK data.');
                // Map mocks to localized structure
                return mockArticles.map(doc => mapDocumentToArticle(doc, locale));
            }

            console.log('🚀 [BLOG] Fetching articles from Appwrite...');

            const response = await databases.listDocuments(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                [
                    Query.orderDesc('date')
                ]
            );

            console.log(`✅ [BLOG] Successfully fetched ${response.documents.length} articles from Appwrite.`);

            return response.documents.map(doc => mapDocumentToArticle(doc, locale));
        } catch (error) {
            console.error('❌ [BLOG] Failed to fetch from Appwrite. Fallback to MOCKS.', error);
            // Map mocks to localized structure on error too
            return mockArticles.map(doc => mapDocumentToArticle(doc, locale));
        }
    },

    async getArticleBySlug(slug: string, locale: string = 'fr'): Promise<Article | undefined> {
        try {
            if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
                const mock = mockArticles.find(a => a.slug === slug);
                return mock ? mapDocumentToArticle(mock, locale) : undefined;
            }

            const response = await databases.listDocuments(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                [
                    Query.equal('slug', slug)
                ]
            );

            if (response.documents.length === 0) {
                // Try to find in mocks if not in Appwrite (hybrid approach)
                const mock = mockArticles.find(a => a.slug === slug);
                return mock ? mapDocumentToArticle(mock, locale) : undefined;
            }

            return mapDocumentToArticle(response.documents[0], locale);
        } catch (error) {
            console.error(`Failed to fetch article ${slug} from Appwrite:`, error);
            const mock = mockArticles.find(a => a.slug === slug);
            return mock ? mapDocumentToArticle(mock, locale) : undefined;
        }
    },

    // Updated to accept localized data
    async createArticle(articleData: any) {
        try {
             const response = await databases.createDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                ID.unique(),
                articleData
            );
            return response;
        } catch (error) {
            console.error('Failed to create article:', error);
            throw error;
        }
    }
};
