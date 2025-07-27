import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimization, favicon, and all files with extensions
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    '/login',
    '/register',
  ],
};
