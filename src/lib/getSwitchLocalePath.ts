import { slugMap } from '@/lib/locale-slug-map';

export function getSwitchLocalePath(pathname: string, currentLocale: 'fr' | 'en'): string {
  const parts = pathname.split('/').filter(Boolean); // ['fr','gestion-de-projet',...]
  const [, slug, ...rest] = parts;
  const targetSlug = (slug && slugMap[slug as keyof typeof slugMap]) || '';
  const targetLocale = currentLocale === 'fr' ? 'en' : 'fr';
  const restPath = rest.length ? '/' + rest.join('/') : '';
  const slugPath = targetSlug ? '/' + targetSlug : '';
  return `/${targetLocale}${slugPath}${restPath}`;
}
