import { getProjectAcademyPage } from '@/lib/directus';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { generateLocaleParams } from "@/lib/staticLocales";
import type { ProjectAcademyPageProps } from '@/components/pages/project-academy';

export function generateStaticParams() {
  return generateLocaleParams();
}

type PageProps = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { locale } = params;

  const data: ProjectAcademyPageProps['data'] = await getProjectAcademyPage();
  if (!data) return notFound();
  return <ProjectAcademyPage locale={locale} data={data} />;
}
