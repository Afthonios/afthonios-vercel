import { getProjectAcademyPage } from '@/lib/directus';
import type { ProjectAcademyPageProps } from '@/components/pages/project-academy';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { generateLocaleParams } from "@/lib/staticLocales";
export const generateStaticParams = generateLocaleParams;

type PageProps = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { locale } = params;
  const raw = await getProjectAcademyPage();
  if (!raw) return notFound();
  const data = raw as ProjectAcademyPageProps['data'];
  return <ProjectAcademyPage locale={locale} data={data} />;
}