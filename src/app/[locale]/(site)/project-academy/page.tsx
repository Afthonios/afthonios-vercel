import { getProjectAcademyPage } from '@/lib/directus';
import type { ProjectAcademyData } from '@/lib/directus';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { generateLocaleParams } from "@/lib/staticLocales";
export const generateStaticParams = generateLocaleParams;

export default async function Page({ params }) {
  const { locale } = params;
  const data: ProjectAcademyData = await getProjectAcademyPage();
  if (!data) return notFound();
  return <ProjectAcademyPage locale={locale} data={data} />;
}