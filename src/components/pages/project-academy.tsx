// src/app/[locale]/(site)/project-academy/page.tsx
import { getProjectAcademyPage } from '@/lib/directus';
import { notFound } from 'next/navigation';

export default async function ProjectAcademyPage({ locale }: { locale: string }) {
  const data = await getProjectAcademyPage();
  if (!data) return notFound();

  const title = locale === 'fr' ? data.title_fr : data.title_en;
  const subtitle = locale === 'fr' ? data.subtitle_fr : data.subtitle_en;
  const section1Text = locale === 'fr' ? data.section_1_text_fr : data.section_1_text_en;
  const introText = locale === 'fr' ? data.intro_text_fr : data.intro_text_en;
  const section1Title = locale === 'fr' ? data.section_1_title_fr : data.section_1_title_en;

  return (
    <main className="px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl text-gray-600">{subtitle}</h2>
      <div
        className="prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: introText || '' }}
      />
      <h3 className="text-2xl font-semibold mt-8">{section1Title}</h3>
      <div
        className="prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: section1Text || '' }}
      />
    </main>
  );
}