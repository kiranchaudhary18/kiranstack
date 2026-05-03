export default function sitemap() {
  const baseUrl = 'https://kirandekaliya.in';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/skills',
    '/projects',
    '/education',
    '/github',
    '/certificates',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
