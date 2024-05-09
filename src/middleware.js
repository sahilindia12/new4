

import { NextResponse } from 'next/server'
import { useEffect } from 'react'


 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const token= 12345
        

     if (token==123345) {
        console.log('tokenis here');
     }

 else{
    return NextResponse.redirect(new URL('/otp', request.url))
 }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/chat/:path*',"/cookes/:path*","/add/:path*"]
}