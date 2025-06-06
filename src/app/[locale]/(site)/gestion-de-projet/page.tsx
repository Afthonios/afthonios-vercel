import ProjectAcademyPage from '@/components/pages/project-academy';

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <ProjectAcademyPage locale={locale} />;
}
