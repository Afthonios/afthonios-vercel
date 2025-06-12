import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const DEFAULT_LOCALE = 'fr';
const ALLOWED_LEARN_PATHS = [
  '/fr/project-academy',
  '/en/project-academy',
  '/fr/new-offer',
  '/en/new-offer',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host');

  // Redirect to default locale if path doesn't start with /fr or /en
  if (
    pathname === '/' ||
    (!pathname.startsWith('/fr') &&
      !pathname.startsWith('/en') &&
      !PUBLIC_FILE.test(pathname))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Password protection for staging.afthonios.com
  if (host === 'staging.afthonios.com') {
    const expected = 'Basic ' + Buffer.from('afthonios:xyHwoc-8rovpy-fusgof').toString('base64');
    const authHeader = request.headers.get('authorization');

    if (authHeader !== expected) {
      return new NextResponse(
        `<html><body>
           <form method="get" style="display: flex; flex-direction: column; gap: 10px; max-width: 300px; margin: 40px auto; font-family: sans-serif;">
             <label>
               Username
               <input type="text" name="username" autocomplete="username" />
             </label>
             <label>
               Password
               <input type="password" name="password" autocomplete="current-password" />
             </label>
             <button type="submit">Login</button>
           </form>
         </body></html>`, {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Afthonios Staging"',
            'Content-Type': 'text/html',
          },
        });
    }
  }

  // Restrict pages on learn.afthonios.com
  if (host === 'learn.afthonios.com') {
    const currentPath = request.nextUrl.pathname;
    if (!ALLOWED_LEARN_PATHS.includes(currentPath)) {
      return NextResponse.redirect('https://afthonios.com');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};