import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(({ locale }) => ({
  // locale ist bereits "fr", "en" … – fällt andernfalls zurück auf "fr"
  locale: locale || 'fr',
  messages: {}          // leer, weil wir die echten Texte in layout.tsx laden
}));