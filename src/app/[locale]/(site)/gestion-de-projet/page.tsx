import ProjectAcademyPage from '@/components/pages/project-academy';

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(params);
  return <ProjectAcademyPage locale={locale} />;
}
