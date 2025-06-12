import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
});

export default function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const expected = 'Basic ' + Buffer.from('afthonios:xyHwoc-8rovpy-fusgof').toString('base64');

  if (request.headers.get('host')?.startsWith('staging.') && authHeader !== expected) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Staging Zone"',
      },
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};