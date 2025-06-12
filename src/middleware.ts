import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');

  // Nur dann schützen, wenn wir auf staging.afthonios.com sind
  if (host === 'staging.afthonios.com') {
    const expected = 'Basic ' + Buffer.from('afthonios:xyHwoc-8rovpy-fusgof').toString('base64');
    const authHeader = request.headers.get('authorization');

    if (authHeader !== expected) {
      return new NextResponse(
        `<html><body>
           <form method="get">
             <input type="text" name="username" />
             <input type="password" name="password" />
           </form>
         </body></html>`, {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Afthonios Staging"',
            'Content-Type': 'text/html'
          },
        });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};