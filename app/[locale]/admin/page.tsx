"use client";

import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import { blogService } from '@/lib/blog-service';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'fr' | 'en'>('fr'); // Tab state
    const router = useRouter();

    // React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ArticleFormData>({
        defaultValues: {
            category: 'web',
            date: new Date().toISOString().split('T')[0],
            readTime: '5 min',
            toc_fr: '[]',
            toc_en: '[]'
        }
    });

    // React Query Mutation
    const mutation = useMutation({
        mutationFn: (data: ArticleFormData) => blogService.createArticle(data),
        onSuccess: () => {
            alert('Article created successfully!');
            reset();
        },
        onError: (error: any) => {
            alert('Error creating article: ' + error.message);
        }
    });

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {
        try {
            const session = await account.get();
            setUser(session);
        } catch (error) {
            console.log('No active session');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createEmailPasswordSession(email, password);
            checkSession();
        } catch (error) {
            alert('Login failed: ' + (error as any).message);
        }
    };

    const handleLogout = async () => {
        await account.deleteSession('current');
        setUser(null);
    };

    const onSubmit = (data: ArticleFormData) => {
        mutation.mutate(data);
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white">
                <form onSubmit={handleLogin} className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-800">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Create New Article</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Logged in as {user.email}</span>
                        <button onClick={handleLogout} className="px-4 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                            Logout
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                    
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Slug (Shared)</label>
                            <input {...register("slug", { required: true })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                            {errors.slug && <span className="text-red-500 text-xs">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Cover Image URL</label>
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
                            <input {...register("readTime", { required: true })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                        </div>
                    </div>

                    {/* Language Tabs */}
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={() => setActiveTab('fr')}
                                className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors ${
                                    activeTab === 'fr' 
                                    ? 'border-primary text-primary' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                }`}
                            >
                                Français 🇫🇷
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('en')}
                                className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors ${
                                    activeTab === 'en' 
                                    ? 'border-primary text-primary' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                }`}
                            >
                                English 🇬🇧
                            </button>
                        </div>
                    </div>

                    {/* French Fields */}
                    <div className={activeTab === 'fr' ? 'block space-y-4' : 'hidden'}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Titre (FR)</label>
                            <input {...register("title_fr", { required: activeTab === 'fr' })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Sous-titre (FR)</label>
                            <input {...register("subtitle_fr")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Résumé (FR)</label>
                            <textarea {...register("summary_fr")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Contenu HTML (FR)</label>
                            <textarea {...register("content_fr")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-64 font-mono text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">TOC JSON (FR)</label>
                            <textarea {...register("toc_fr")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20 font-mono text-sm" />
                        </div>
                    </div>

                    {/* English Fields */}
                    <div className={activeTab === 'en' ? 'block space-y-4' : 'hidden'}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Title (EN)</label>
                            <input {...register("title_en", { required: activeTab === 'en' })} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Subtitle (EN)</label>
                            <input {...register("subtitle_en")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Summary (EN)</label>
                            <textarea {...register("summary_en")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Content HTML (EN)</label>
                            <textarea {...register("content_en")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-64 font-mono text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">TOC JSON (EN)</label>
                            <textarea {...register("toc_en")} className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-700 h-20 font-mono text-sm" />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="w-full py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                        {mutation.isPending ? 'Creating...' : 'Create Article'}
                    </button>
                </form>
            </div>
        </div>
    );
}
