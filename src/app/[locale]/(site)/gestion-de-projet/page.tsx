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

  const raw = await getProjectAcademyPage();
  if (!raw) return notFound();
  const data = raw as ProjectAcademyPageProps['data'];
  return <ProjectAcademyPage locale={locale} data={data} />;
}
