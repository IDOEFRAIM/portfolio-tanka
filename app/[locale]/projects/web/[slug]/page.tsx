import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getProject } from '@/lib/projects-data';
import ProjectDetail from '@/components_/projects/ProjectDetail';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function WebProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject('web', slug);
  if (!project) notFound();

  const labels = await getTranslations('ProjectDetails');
  const content = await getTranslations(project.translationKey);

  return (
    <ProjectDetail
      project={project}
      labels={{
        back_index: labels('back_index'),
        mission_brief: labels('mission_brief'),
        architecture: labels('architecture'),
        challenge_title: labels('challenge_title'),
        solution_title: labels('solution_title'),
        impact_title: labels('impact_title'),
        links: labels('links'),
        btn_live: labels('btn_live'),
        btn_repo: labels('btn_repo'),
      }}
      content={{
        title: content('title'),
        subtitle: content('subtitle'),
        challenge: content('challenge'),
        solution: content('solution'),
        impact: content('impact'),
      }}
    />
  );
}
