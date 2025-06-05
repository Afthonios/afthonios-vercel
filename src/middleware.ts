import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Wenn wir auf Root gehen, also nur "/"
  if (pathname === '/') {
    const locale = 'fr'; // oder 'en', je nach Standard
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};