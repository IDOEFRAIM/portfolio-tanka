import { setRequestLocale } from 'next-intl/server';
import PricingSection from '@/components_/pricingOptions';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PricePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-brand-paper text-brand-deep pt-32">
      <PricingSection />
    </main>
  );
}
