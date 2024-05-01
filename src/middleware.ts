import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


/* These URL patterns are used to specify which routes or
paths the middleware function should be applied to. */
export const config = {
  matcher: [
    '/login/:path*',
    '/signup/:path*',
  ]
}

/**
 * The middleware function checks for an access token in cookies and redirects to the '/store' URL if
 * the token is present.
 * @param {NextRequest} request - The `middleware` function takes a `NextRequest` object as a
 * parameter. This object likely contains information about the incoming request, such as headers,
 * body, URL, and other relevant details. The function uses this request object to check for the
 * presence of an access token in the cookies of the request
 * @returns A redirect response to the '/store' URL is being returned if an access token is found in
 * the cookies.
 */
export function middleware(request: NextRequest) {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value
  if(accessToken){
    return NextResponse.redirect(new URL('/store', request.url))
  }
}