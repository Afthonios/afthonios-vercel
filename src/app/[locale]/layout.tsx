import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { createDirectus, rest, readSingleton } from '@directus/sdk';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const directus = createDirectus(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!
).with(rest());

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

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
      <Footer />
    </NextIntlClientProvider>
  );
}