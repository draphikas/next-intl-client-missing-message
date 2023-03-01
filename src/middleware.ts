import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'fr',
});

export const config = {
  // Skip all paths that aren't pages that you'd like to internationalize
  matcher: ['/((?!api|_next|favicon.ico|assets).*)'],
};
