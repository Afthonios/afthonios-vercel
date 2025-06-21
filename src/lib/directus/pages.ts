export async function getPageNewOffer(locale: 'fr' | 'en') {
    const lang = locale === 'fr' ? 'fr-FR' : 'en-US'
    const url  = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/page_newoffer`
              + `?filter[_translations][languages_code][_eq]=${lang}`
              + `&fields=*,_translations.*`
    const res  = await fetch(url, { next: { revalidate: 1800 } })
    const { data } = await res.json()
    return { ...data, ...data._translations?.[0] }
  }