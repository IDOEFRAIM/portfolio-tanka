// app/[locale]/certifications/page.tsx
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { certifications } from '@/lib/mock-certifications';
import SectionHeader from '@/components_/SectionHeader';

const CATEGORY_LABEL: Record<string, string> = {
  dev: 'Engineering',
  ai: 'Artificial Intelligence',
  ml: 'Machine Learning',
};

type Props = { params: Promise<{ locale: string }> };

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Certifications');

  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          eyebrow={t('subtitle')}
          title={t('title')}
          description={t('intro')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="border border-brand-border/30 bg-white p-8 flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
                  {CATEGORY_LABEL[cert.category] ?? cert.category}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-border border border-brand-border/30 px-3 py-1">
                  {cert.date}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-brand-deep leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.3em] text-brand-border">
                  {t('issued_by')} — {cert.issuer}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-brand-border/20 text-brand-deep/70">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 border-t border-brand-border/20 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-brand-deep hover:text-primary transition-colors"
              >
                <span>{t('verify_btn')}</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
