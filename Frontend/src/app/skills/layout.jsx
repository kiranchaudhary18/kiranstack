export const metadata = {
  title: 'Skills & Expertise ',
  description:
    'Technical skills of Kiran Dekaliya - Software Engineer. Proficient in React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, TypeScript, and modern full-stack development.',
  canonical: 'https://kirandekaliya.in/skills',
  alternates: {
    canonical: 'https://kirandekaliya.in/skills',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/skills',
    siteName: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    title: 'Skills & Expertise | Kiran Dekaliya',
    description:
      'Technical expertise: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, TypeScript, and modern web technologies.',
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
    title: 'Skills & Expertise | Kiran Dekaliya',
    description:
      'Full Stack development skills: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS.',
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
