import { locales } from '@/i18n';
import ProjectAcademyPage from '@/components/pages/project-academy';

export function generateStaticParams(): { locale: string }[] {
  return (locales as string[]).map((locale) => ({ locale }));
}

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <ProjectAcademyPage locale={locale} />;
}
