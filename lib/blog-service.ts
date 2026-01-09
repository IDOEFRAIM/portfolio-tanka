import { databases, APPWRITE_CONFIG } from './appwrite';
import { Article } from './types';
import { mockArticles } from './mock-articles';
import { ID, Query } from 'appwrite';

// Helper to map Appwrite document or Mock object to Article type based on locale
const mapDocumentToArticle = (doc: any, locale: string): Article => {
    // Determine suffix based on locale (default to 'fr')
    const suffix = locale === 'en' ? '_en' : '_fr';
    
    // Helper to get localized field with fallback to base field (for backward compatibility)
    const getField = (field: string) => doc[`${field}${suffix}`] || doc[field];

    const tocRaw = getField('toc');

    // Populate all localized fields if available in doc
    const localizedFields = {
        title_fr: doc.title_fr,
        title_en: doc.title_en,
        subtitle_fr: doc.subtitle_fr,
        subtitle_en: doc.subtitle_en,
        summary_fr: doc.summary_fr,
        summary_en: doc.summary_en,
        content_fr: doc.content_fr,
        content_en: doc.content_en,
        toc_fr: doc.toc_fr,
        toc_en: doc.toc_en
    };

    return {
        id: doc.$id, // Map Appwrite Document ID
        slug: doc.slug,
        title: getField('title') || 'Untitled',
        subtitle: getField('subtitle') || '',
        summary: getField('summary') || '',
        date: doc.date,
        readTime: doc.readTime || '5 min',
        category: doc.category || 'web',
        toc: typeof tocRaw === 'string' ? JSON.parse(tocRaw) : (tocRaw || []),
        content: getField('content') || '',
        coverImage: doc.coverImage,
        ...localizedFields
    };
};

export const blogService = {
    async getAllArticles(locale: string = 'fr'): Promise<Article[]> {
        try {
            // Check if Appwrite is configured
            if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
                console.warn('⚠️ [BLOG] Appwrite Project ID not set. Using MOCK data.');
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
            console.error('❌ [BLOG] Failed to fetch from Appwrite. Using fallback mocks.', error);
            // Fallback to mocks on error
            return mockArticles.map(doc => mapDocumentToArticle(doc, locale));
        }
    },

    async getArticleBySlug(slug: string, locale: string = 'fr'): Promise<Article | undefined> {
        try {
            if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
                const mock = mockArticles.find(a => a.slug === slug);
                return mock ? mapDocumentToArticle(mock, locale) : undefined;
            }

            console.log(`🚀 [BLOG] Fetching article ${slug} from Appwrite...`);
            
            const response = await databases.listDocuments(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                [
                    Query.equal('slug', slug)
                ]
            );

            if (response.documents.length === 0) {
                console.warn(`⚠️ [BLOG] Article ${slug} not found in Appwrite. Checking mocks...`);
                const mock = mockArticles.find(a => a.slug === slug);
                return mock ? mapDocumentToArticle(mock, locale) : undefined;
            }

            return mapDocumentToArticle(response.documents[0], locale);
        } catch (error) {
            console.error(`❌ [BLOG] Failed to fetch article ${slug} from Appwrite:`, error);
            // Fallback to mocks on error
            const mock = mockArticles.find(a => a.slug === slug);
            return mock ? mapDocumentToArticle(mock, locale) : undefined;
        }
    },

    async createArticle(data: any): Promise<any> {
        try {
            return await databases.createDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error('❌ [BLOG] Failed to create article:', error);
            throw error;
        }
    },

    async updateArticle(documentId: string, data: any): Promise<any> {
        try {
             return await databases.updateDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                documentId,
                data
            );
        } catch (error) {
            console.error('❌ [BLOG] Failed to update article:', error);
            throw error;
        }
    },

    async deleteArticle(documentId: string): Promise<any> {
        try {
            return await databases.deleteDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.collectionId,
                documentId
            );
        } catch (error) {
            console.error('❌ [BLOG] Failed to delete article:', error);
            throw error;
        }
    }
};
