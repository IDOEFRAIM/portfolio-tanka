// app/[locale]/projects/page.tsx
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { projects } from '@/lib/projects-data';
import SectionHeader from '@/components_/SectionHeader';

const CATEGORY_LABEL: Record<string, string> = {
  web: 'Web',
  mobile: 'Mobile',
  ai: 'AI & ML',
  data: 'Data',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ProjectsIndex');

  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          eyebrow={t('subtitle')}
          title={t('title')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const id = String(projects.indexOf(project) + 1);

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.category}/${project.slug}`}
                className="group flex flex-col h-full border border-brand-border/30 bg-white p-8 transition-colors hover:border-brand-deep"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
                    {CATEGORY_LABEL[project.category]}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-border">
                    {project.year}
                  </span>
                </div>

                <div className="space-y-3 mb-12 flex-grow">
                  <h3 className="text-2xl font-serif leading-snug group-hover:text-primary transition-colors">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="text-sm text-brand-deep/70 leading-relaxed">
                    {t(`items.${id}.desc`)}
                  </p>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-brand-border/20 text-brand-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-brand-border/20 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-brand-border">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('view_project')}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
