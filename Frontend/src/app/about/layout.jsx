export const metadata = {
  title: 'About | Kiran Dekaliya',
  description:
    'About Kiran Dekaliya - Software Engineer and Full-Stack Developer specializing in MERN Stack, React, Next.js, Node.js, and AWS. Learn about my professional journey and expertise.',
  canonical: 'https://kirandekaliya.in/about',
  alternates: {
    canonical: 'https://kirandekaliya.in/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/about',
    siteName: 'Kiran Dekaliya | Full-Stack Developer Portfolio',
    title: 'About Kiran Dekaliya | Software Engineer & Full-Stack Developer',
    description:
      'Learn about Kiran Dekaliya - Software Engineer and Full-Stack Developer specializing in MERN Stack, React, Next.js, Node.js, and AWS.',
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
    title: 'About Kiran Dekaliya | Software Engineer & Full-Stack Developer',
    description:
      'Learn about Kiran Dekaliya - Software Engineer and Full-Stack Developer with expertise in MERN Stack.',
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
