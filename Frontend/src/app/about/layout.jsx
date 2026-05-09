export const metadata = {
  title: 'About',
  description:
    'About Kiran Dekaliya - Software Engineer with expertise in MERN Stack development, React, Next.js, Node.js, and AWS. Passionate about building scalable web applications.',
  canonical: 'https://kirandekaliya.in/about',
  alternates: {
    canonical: 'https://kirandekaliya.in/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/about',
    siteName: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    title: 'About Kiran Dekaliya | Software Engineer',
    description:
      'Learn about Kiran Dekaliya - Software Engineer specializing in MERN Stack, React, Next.js, Node.js, and AWS.',
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
    title: 'About Kiran Dekaliya | Software Engineer',
    description:
      'Software Engineer specializing in MERN Stack, React, Next.js, Node.js, and AWS.',
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
