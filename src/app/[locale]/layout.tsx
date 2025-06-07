import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { createDirectus, rest, readSingleton } from '@directus/sdk';
import Header from '@/components/layout/Header';

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

  // Guard against unsupported locale
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  // Load translations
  const messages = (
    await import(`@/messages/${locale}/nouvelle-offre.json`)
  ).default;

  // Fetch header singleton
  const headerData = await directus.request(readSingleton('classic_header'));

  // Inject logo URL fallback
  const headerDataWithLogo = {
    ...headerData,
    logo_url: '/assets/logo_afthonios.webp',
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} data={headerDataWithLogo} />
      {children}
    </NextIntlClientProvider>
  );
}