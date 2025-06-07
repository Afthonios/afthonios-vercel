import { getProjectAcademyPage } from '@/lib/directus';
import { notFound } from 'next/navigation';
import ProjectAcademyPage from '@/components/pages/project-academy';
import { generateLocaleParams } from "@/lib/staticLocales";

export function generateStaticParams() {
  return generateLocaleParams();
}

export default async function Page(props: Promise<{ params: { locale: string } }>) {
  const { params } = await props;
  const { locale } = params;
  const data = await getProjectAcademyPage();
  if (!data) return notFound();
  return <ProjectAcademyPage locale={locale} data={data} />;
}
