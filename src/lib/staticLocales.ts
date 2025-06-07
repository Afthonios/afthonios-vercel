

import { locales } from "@/lib/i18nConfig";

// Helper to generate locale-specific static params
export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}