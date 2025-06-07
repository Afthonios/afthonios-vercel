import { locales } from "@/i18n";

// Helper to generate locale-specific static params
export function generateLocaleParams(): { locale: string }[] {
  return locales.map((locale) => ({ locale }));
}