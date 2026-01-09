"use client";

import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import { blogService } from '@/lib/blog-service';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Article } from '@/lib/types';
import { Trash2, Edit, Plus, ArrowLeft } from 'lucide-react';

type ArticleFormData = {
    slug: string;
    category: 'web' | 'mobile' | 'ai' | 'data';
    date: string;
    readTime: string;
    coverImage: string;
    // French Fields
    title_fr: string;
    subtitle_fr: string;
    summary_fr: string;
    content_fr: string;
    toc_fr: string;
    // English Fields
    title_en: string;
    subtitle_en: string;
    summary_en: string;
    content_en: string;
    toc_en: string;
};

export default function AdminPage() {
    const [user, setUser] = useState<any>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Admin State
    const [view, setView] = useState<'list' | 'form'>('list');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'fr' | 'en'>('fr');
    
    const queryClient = useQueryClient();

    // Fetch Articles for List View
    const { data: articles, isLoading: articlesLoading } = useQuery({
        queryKey: ['admin-articles'],
        queryFn: () => blogService.getAllArticles('fr'), // Language doesn't matter for listing
        enabled: !!user
    });

    // React Hook Form
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ArticleFormData>({
        defaultValues: {
            category: 'web',
            date: new Date().toISOString().split('T')[0],
            readTime: '5 min',
            toc_fr: '[]',
            toc_en: '[]'
        }
    });

    // Mutations
    const createMutation = useMutation({
        mutationFn: (data: ArticleFormData) => blogService.createArticle(data),
        onSuccess: () => {
            alert('Article created successfully!');
            setView('list');
            queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
            reset();
        },
        onError: (error: any) => alert('Error creating: ' + error.message)
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: string, data: ArticleFormData }) => blogService.updateArticle(id, data),
        onSuccess: () => {
            alert('Article updated successfully!');
            setView('list');
            setEditingId(null);
            queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
            reset();
        },
        onError: (error: any) => alert('Error updating: ' + error.message)
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => blogService.deleteArticle(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
        },
        onError: (error: any) => alert('Error deleting: ' + error.message)
    });

    // Auth Check
    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await account.get();
                setUser(session);
            } catch {
                console.log('No active session');
            } finally {
                setAuthLoading(false);
            }
        };
        checkSession();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createEmailPasswordSession(email, password);
            const session = await account.get();
            setUser(session);
        } catch (error: any) {
            alert('Login failed: ' + error.message);
        }
    };

    const handleLogout = async () => {
        await account.deleteSession('current');
        setUser(null);
    };

    const handleEdit = (article: Article) => {
        setEditingId(article.id || null);
        
        // Populate form
        setValue('slug', article.slug);
        setValue('category', article.category as any);
        setValue('date', article.date);
        setValue('readTime', article.readTime);
        setValue('coverImage', article.coverImage || '');
        
        // Localized fields need to be extracted from Article if you want to edit them
        // Note: fetchArticles returns mapped objects. In a real app we might need to fetch the raw document 
        // or ensure getAllArticles returns all localized fields hidden in the object.
        // For now, assuming mapDocumentToArticle logic puts them in a way we can access, 
        // OR we might need to rely on the fact that for now we only have what the view returns.
        
        // Wait! mapDocumentToArticle spreads the props. 
        // So article.title might be French title if fetched with 'fr'.
        // We need the RAW data or BOTH languages.
        // Quick fix: The 'getAllArticles' primarily returns one language. 
        // To edit properly, we should probably fetch the single document by ID to get full data,
        // but let's assume for now we might lose the 'other' language data if we don't handle it carefully.
        // BETTER APPROACH: Let's fetch the full document when entering edit mode?
        // Since we are mapped, we might have lost data.
        // Let's rely on the fact that we updated mapDocumentToArticle to include `...props` 
        // which includes all raw fields like title_fr, title_en etc.
        
        const raw = article as any;
        setValue('title_fr', raw.title_fr || '');
        setValue('subtitle_fr', raw.subtitle_fr || '');
        setValue('summary_fr', raw.summary_fr || '');
        setValue('content_fr', raw.content_fr || '');
        setValue('toc_fr', raw.toc_fr || '[]');
        
        setValue('title_en', raw.title_en || '');
        setValue('subtitle_en', raw.subtitle_en || '');
        setValue('summary_en', raw.summary_en || '');
        setValue('content_en', raw.content_en || '');
        setValue('toc_en', raw.toc_en || '[]');

        setView('form');
    };

    const onSubmit = (data: ArticleFormData) => {
        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    if (authLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white">
                <form onSubmit={handleLogin} className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-800">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <div className="space-y-4">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 rounded border dark:bg-gray-800" required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 rounded border dark:bg-gray-800" required />
                        <button type="submit" className="w-full py-2 bg-primary text-white rounded hover:bg-primary/90">Login</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{user.email}</span>
                        <button onClick={handleLogout} className="px-4 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800">Logout</button>
                    </div>
                </div>

                {view === 'list' ? (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Articles ({articles?.length || 0})</h2>
                            <button onClick={() => { setEditingId(null); reset(); setView('form'); }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                                <Plus size={18} /> New Article
                            </button>
                        </div>

                        {articlesLoading ? (
                            <div>Loading articles...</div>
                        ) : (
                            <div className="grid gap-4">
                                {articles?.map((article) => (
                                    <div key={article.id} className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">{article.title}</h3>
                                            <p className="text-sm text-gray-500">{article.date} • {article.category}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleEdit(article)} className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => {
                                                if(confirm('Delete this article?')) deleteMutation.mutate(article.id!);
                                            }} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setView('list')} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-primary">
                            <ArrowLeft size={18} /> Back to List
                        </button>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Article' : 'Create Article'}</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Slug</label>
                                    <input {...register("slug", { required: true })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Cover Image</label>
                                    <input {...register("coverImage")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <select {...register("category")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700">
                                        <option value="web">Web</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="ai">AI</option>
                                        <option value="data">Data</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Date</label>
                                    <input type="date" {...register("date", { required: true })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Read Time</label>
                                    <input {...register("readTime")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                            </div>

                            {/* Language Tabs */}
                            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                                <div className="flex space-x-4">
                                    <button type="button" onClick={() => setActiveTab('fr')} className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors ${activeTab === 'fr' ? 'border-primary text-primary' : 'border-transparent text-gray-500'}`}>Français 🇫🇷</button>
                                    <button type="button" onClick={() => setActiveTab('en')} className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors ${activeTab === 'en' ? 'border-primary text-primary' : 'border-transparent text-gray-500'}`}>English 🇬🇧</button>
                                </div>
                            </div>

                            {/* French Fields */}
                            <div className={activeTab === 'fr' ? 'block space-y-4' : 'hidden'}>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Titre (FR)</label>
                                    <input {...register("title_fr")} placeholder="Titre de l'article" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Sous-titre (FR)</label>
                                    <input {...register("subtitle_fr")} placeholder="Une brève description" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Résumé (FR)</label>
                                    <textarea {...register("summary_fr")} placeholder="Résumé pour la carte" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Contenu HTML (FR)</label>
                                    <textarea {...register("content_fr")} placeholder="<p>Votre contenu ici...</p>" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-64 font-mono text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Table des Matières JSON (FR)</label>
                                    <div className="text-xs text-gray-400 mb-1">Ex: [{`{"id": "intro", "title": "Introduction"}`}]</div>
                                    <textarea {...register("toc_fr")} placeholder="[]" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20 font-mono text-sm" />
                                </div>
                            </div>

                            {/* English Fields */}
                            <div className={activeTab === 'en' ? 'block space-y-4' : 'hidden'}>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Title (EN)</label>
                                    <input {...register("title_en")} placeholder="Article Title" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Subtitle (EN)</label>
                                    <input {...register("subtitle_en")} placeholder="Brief description" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Summary (EN)</label>
                                    <textarea {...register("summary_en")} placeholder="Card summary" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Content HTML (EN)</label>
                                    <textarea {...register("content_en")} placeholder="<p>Your content here...</p>" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-64 font-mono text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Table of Contents JSON (EN)</label>
                                    <div className="text-xs text-gray-400 mb-1">Ex: [{`{"id": "intro", "title": "Introduction"}`}]</div>
                                    <textarea {...register("toc_en")} placeholder="[]" className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20 font-mono text-sm" />
                                </div>
                            </div>

                            <button type="submit" disabled={createMutation.isPending || updateMutation.isPending} className="w-full py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 disabled:opacity-50">
                                {editingId ? (updateMutation.isPending ? 'Updating...' : 'Update Article') : (createMutation.isPending ? 'Creating...' : 'Create Article')}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
