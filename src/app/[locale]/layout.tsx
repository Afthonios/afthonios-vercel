import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/ui/Header';

export default async function LocaleLayout(props: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;
  const locale = params.locale;

  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`@/messages/${locale}/nouvelle-offre.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}