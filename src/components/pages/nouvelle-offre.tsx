// src/app/[locale]/(site)/nouvelle-offre/page.tsx
import { getNouvelleOffrePage } from '@/lib/directus';
import { notFound } from 'next/navigation';

export default async function NouvelleOffrePage({
  locale,
}: {
  locale: string;
}) {
  const data = await getNouvelleOffrePage();
  if (!data) return notFound();

  const title = locale === 'fr' ? data.title_fr : data.title_en;

  return (
    <main className="px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold">{title}</h1>
    </main>
  );
}