// src/lib/i18nConfig.ts

export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];