import NouvelleOffrePage from '@/components/pages/nouvelle-offre';
import { generateLocaleParams } from "@/lib/staticLocales";

export const generateStaticParams = generateLocaleParams;
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NouvelleOffrePage locale={locale} />;
}