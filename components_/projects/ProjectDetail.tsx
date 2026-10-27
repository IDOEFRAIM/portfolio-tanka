import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects-data';

type Labels = {
  back_index: string;
  mission_brief: string;
  architecture: string;
  challenge_title: string;
  solution_title: string;
  impact_title: string;
  links: string;
  btn_live: string;
  btn_repo: string;
};

type Content = {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
};

const CATEGORY_LABEL: Record<Project['category'], string> = {
  web: 'Web Platform',
  mobile: 'Mobile Application',
  ai: 'AI & Machine Learning',
  data: 'Data Science',
};

export default function ProjectDetail({
  project,
  content,
  labels,
}: {
  project: Project;
  content: Content;
  labels: Labels;
}) {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 mb-12 text-[11px] font-mono uppercase tracking-[0.35em] text-brand-border hover:text-brand-deep transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          {labels.back_index}
        </Link>

        <div className="mb-16 border-b border-brand-border/30 pb-10 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
            {CATEGORY_LABEL[project.category]}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            {content.title}
          </h1>
          <p className="text-lg text-brand-deep/70 leading-relaxed max-w-3xl">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {project.images.length > 0 ? (
              <div className="grid gap-6">
                {project.images.map((img, idx) => (
                  <div key={img} className="relative aspect-video w-full overflow-hidden border border-brand-border/20">
                    <Image
                      src={img}
                      alt={`${content.title} — visual ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <section className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-brand-border">
                {labels.challenge_title}
              </h3>
              <p className="text-lg text-brand-deep/80 leading-relaxed">
                {content.challenge}
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-brand-border">
                {labels.solution_title}
              </h3>
              <p className="text-lg text-brand-deep/80 leading-relaxed">
                {content.solution}
              </p>
            </section>

            <section className="border-l border-primary/60 pl-8 py-2 space-y-3">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary">
                {labels.impact_title}
              </h3>
              <p className="text-2xl font-serif leading-snug text-brand-deep">
                "{content.impact}"
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="border border-brand-border/20 p-8 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-border border-b border-brand-border/20 pb-4">
                {labels.mission_brief}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-border/70">Client</p>
                  <p className="font-serif text-lg">{project.client}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-border/70">Year</p>
                  <p className="font-serif text-lg">{project.year}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-border/70">Role</p>
                  <p className="font-serif text-lg">{project.role}</p>
                </div>
              </div>
            </div>

            <div className="border border-brand-border/20 p-8 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-border border-b border-brand-border/20 pb-4">
                {labels.architecture}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs uppercase tracking-[0.2em] border border-brand-border/30 text-brand-deep/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-border">
                {labels.links}
              </h4>
              {project.demoLink !== '#' && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full px-5 py-4 bg-brand-deep text-brand-paper text-[11px] uppercase tracking-[0.3em] hover:opacity-90 transition-opacity"
                >
                  <span>{labels.btn_live}</span>
                  <span>→</span>
                </a>
              )}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full px-5 py-4 border border-brand-border/40 text-[11px] uppercase tracking-[0.3em] hover:border-brand-deep transition-colors"
              >
                <span>{labels.btn_repo}</span>
                <span>→</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
