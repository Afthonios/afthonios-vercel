import { locales } from '@/i18n';
import ProjectAcademyPage from '@/components/pages/project-academy';

export function generateStaticParams(): { locale: string }[] {
  return (locales as string[]).map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectAcademyPage locale={locale} />;
}