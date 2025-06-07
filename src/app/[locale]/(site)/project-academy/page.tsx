import { getProjectAcademyPage } from '@/lib/directus';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { getStaticLocaleParams } from "@/lib/staticLocales";
export const generateStaticParams = getStaticLocaleParams;

export default async function Page({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const data = await getProjectAcademyPage();
  if (!data) return notFound();
  return <ProjectAcademyPage locale={locale} data={data} />;
}