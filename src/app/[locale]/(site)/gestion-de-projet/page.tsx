import { getProjectAcademyPage } from '@/lib/directus';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { generateLocaleParams } from "@/lib/staticLocales";
import type { ProjectAcademyPageProps } from '@/components/pages/project-academy';

export function generateStaticParams() {
  return generateLocaleParams();
}

// @ts-expect-error – Next.js type system injects incompatible generic constraint
export default async function Page({ params }) {
  const { locale } = params;

  const data: ProjectAcademyPageProps['data'] = await getProjectAcademyPage();
  if (!data) return notFound();
  return <ProjectAcademyPage locale={locale} data={data} />;
}
