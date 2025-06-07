// src/app/[locale]/(site)/new-offer/page.tsx
import { locales } from '@/i18n';
import NouvelleOffrePage from '@/components/pages/nouvelle-offre';

/**
 * Pre-generates a static page for each locale.
 */
export function generateStaticParams(): { locale: string }[] {
  return Array.from(locales).map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NouvelleOffrePage locale={locale} />;
}