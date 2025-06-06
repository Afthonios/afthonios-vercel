import ProjectAcademyPage from '@/components/pages/project-academy';

export default function Page({ params }: { params: { locale: string } }) {
  return <ProjectAcademyPage locale={params.locale} />;
}