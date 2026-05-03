export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://kirandekaliya.in/sitemap.xml',
    host: 'https://kirandekaliya.in',
  };
}
