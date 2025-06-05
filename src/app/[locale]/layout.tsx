import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { createDirectus, rest, readSingleton } from '@directus/sdk';
import Header from '@/components/ui/Header';

const directus = createDirectus(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!
).with(rest());

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  const messages = (
    await import(`@/messages/${locale}/nouvelle-offre.json`)
  ).default;

  // Fetch the “classic_header” singleton in a version‑safe way
  const headerData = await directus.request(readSingleton('classic_header'));

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} data={headerData} />
      {children}
    </NextIntlClientProvider>
  );
}