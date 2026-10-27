// app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import {
  ExecutiveHero,
  SkillsTicker,
  Philosophy,
  ExperienceTimeline,
  HookProject,
  Categories,
  CertificationsSection,
  StatsStrip,
  FinalCTA,
} from '../../components_/accueil';
import PricingSection from '../../components_/pricingOptions';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-brand-ink via-brand-forestDeep to-brand-forestDark text-brand-cream">
      <div className="flex flex-col divide-y divide-brand-cream/10">
        <ExecutiveHero />
        <SkillsTicker />
        <Philosophy />
        <ExperienceTimeline />
        <HookProject />
        <Categories />
        <CertificationsSection />
        <PricingSection />
        <StatsStrip />
        <FinalCTA />
      </div>
    </main>
  );
}
