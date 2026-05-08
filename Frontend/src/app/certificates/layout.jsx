export const metadata = {
  title: 'Certificates | Kiran Dekaliya',
  description:
    'Professional certifications and achievements of Kiran Dekaliya - Software Engineer and Full-Stack Developer. Credentials in MERN Stack, React, Node.js, and AWS.',
  canonical: 'https://kirandekaliya.in/certificates',
  alternates: {
    canonical: 'https://kirandekaliya.in/certificates',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/certificates',
    siteName: 'Kiran Dekaliya | Full-Stack Developer Portfolio',
    title: 'Certificates | Kiran Dekaliya',
    description:
      'Professional certifications and achievements by Kiran Dekaliya - Software Engineer with expertise in MERN Stack, React, and modern web technologies.',
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
    title: 'Certificates | Kiran Dekaliya',
    description:
      'Professional certifications and credentials in MERN Stack, React, Node.js, and AWS by Kiran Dekaliya.',
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
