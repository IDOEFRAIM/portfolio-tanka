import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ContactPage');

  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-b border-brand-border/30 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-primary">{t('subtitle')}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
              {t('title')}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-brand-border">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t('status')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="border border-brand-border/20 p-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-brand-border mb-4">
                {t('email_label')}
              </h3>
              <a
                href="mailto:idoefraim06@gmail.com"
                className="text-2xl md:text-3xl font-serif text-brand-deep hover:text-primary transition-colors break-all"
              >
                idoefraim06@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-brand-border mb-6">
                {t('socials_label')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/efraim-m-d-ido-a30021276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-brand-border/30 hover:border-brand-deep transition-colors group"
                >
                  <span className="font-serif text-lg">LinkedIn</span>
                  <span className="text-brand-border group-hover:text-brand-deep transition-colors">↗</span>
                </a>
                <a
                  href="https://github.com/IDOEFRAIM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-brand-border/30 hover:border-brand-deep transition-colors group"
                >
                  <span className="font-serif text-lg">GitHub</span>
                  <span className="text-brand-border group-hover:text-brand-deep transition-colors">↗</span>
                </a>
                <a
                  href="https://wa.me/+22601479800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-brand-border/30 hover:border-brand-deep transition-colors group sm:col-span-2"
                >
                  <span className="font-serif text-lg">WhatsApp</span>
                  <span className="text-brand-border group-hover:text-brand-deep transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border border-brand-border/20 p-8 md:p-10">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-brand-border">
                  {t('form_name')}
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-brand-border/30 px-4 py-3 text-brand-deep focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tanka IDO"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-brand-border">
                  {t('form_email')}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-brand-border/30 px-4 py-3 text-brand-deep focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-brand-border">
                  {t('form_message')}
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-brand-border/30 px-4 py-3 text-brand-deep focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-deep text-brand-paper text-[11px] uppercase tracking-[0.35em] hover:opacity-90 transition-opacity"
              >
                {t('btn_send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
