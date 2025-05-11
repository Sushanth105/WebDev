import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// method 1 : 
// export function middleware(request: NextRequest) {
//     return NextResponse.json({name : 'sushanth'})
//     return NextResponse.redirect(new URL('/' , request.url))
// }

// export const config = {
//     matcher: '/about/:path*',
//   }

// method 2 : 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
//   multiple usage : 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
