export const metadata = {
  title: 'Skills | Kiran Dekaliya',
  description:
    'Technical skills of Kiran Dekaliya - Software Engineer and Full-Stack Developer. Expertise in React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, TypeScript, and more.',
  canonical: 'https://kirandekaliya.in/skills',
  alternates: {
    canonical: 'https://kirandekaliya.in/skills',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/skills',
    siteName: 'Kiran Dekaliya | Full-Stack Developer Portfolio',
    title: 'Technical Skills | Kiran Dekaliya',
    description:
      'Explore the technical skills of Kiran Dekaliya - React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, TypeScript, and modern web technologies.',
    images: [
      {
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
        alt: 'Kiran Dekaliya - Software Engineer & Full-Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dekaliya_kiran',
    creator: '@dekaliya_kiran',
    title: 'Technical Skills | Kiran Dekaliya',
    description:
      'Technical skills: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, and modern full-stack development technologies.',
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
