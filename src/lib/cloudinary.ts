export function cld(urlOrPublicId: string, opts: Record<string,string> = {}) {
    // Wenn ein kompletter URL kommt, gib ihn 1:1 zurück
    if (urlOrPublicId.startsWith('http')) return urlOrPublicId
  
    const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD
    const params = new URLSearchParams({ ...opts, f: 'auto', q: 'auto' })
    return `https://res.cloudinary.com/${cloud}/image/upload/${params.toString()}/${urlOrPublicId}.jpg`
  }