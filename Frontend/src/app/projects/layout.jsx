export const metadata = {
  title: 'Project',
  description:
    'Portfolio projects by Kiran Dekaliya - Software Engineer. Web and mobile applications built with React, Next.js, React Native, Node.js, and modern technologies.',
  canonical: 'https://kirandekaliya.in/projects',
  alternates: {
    canonical: 'https://kirandekaliya.in/projects',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/projects',
    siteName: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    title: 'Projects | Kiran Dekaliya',
    description:
      'View portfolio projects by Kiran Dekaliya - Software Engineer showcasing expertise in React, Next.js, React Native, and Node.js.',
    images: [
      {
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
        alt: 'Kiran Dekaliya - Software Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dekaliya_kiran',
    creator: '@dekaliya_kiran',
    title: 'Projects | Kiran Dekaliya',
    description:
      'Web and mobile projects built with React, Next.js, React Native, Node.js, and modern technologies.',
    images: ['https://kirandekaliya.in/kd-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }) {
  return children;
}
