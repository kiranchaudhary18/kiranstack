import '../index.css';
import LayoutWrapper from '../components/LayoutWrapper';

export const metadata = {
  metadataBase: new URL('https://kirandekaliya.in'),
  title: {
    default: 'Kiran Dekaliya | Full Stack Developer | React Native Developer | Software Engineer',
    template: '%s | Kiran Dekaliya',
  },
  description:
    'Kiran Dekaliya (Kiran Chaudhary) — Full Stack Developer, React Native Developer & Software Engineer based in Ahmedabad, Gujarat, India. Expert in MERN Stack, Next.js, and mobile apps.',
  keywords: [
    'Kiran Dekaliya',
    'Kiran Chaudhary',
    'Kiran Dekaliya portfolio',
    'Kiran Chaudhary developer',
    'Full Stack Developer India',
    'React Native Developer India',
    'Software Engineer Ahmedabad',
    'MERN Stack Developer',
    'Next.js Developer India',
    'Full Stack Developer Ahmedabad',
    'Software Engineer Gujarat',
    'JavaScript Developer India',
  ],
  authors: [{ name: 'Kiran Dekaliya', url: 'https://kirandekaliya.in' }],
  creator: 'Kiran Dekaliya',
  publisher: 'Kiran Dekaliya',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in',
    siteName: 'Kiran Dekaliya Portfolio',
    title: 'Kiran Dekaliya | Full Stack Developer | React Native Developer',
    description:
      'Kiran Dekaliya (Kiran Chaudhary) — Full Stack Developer & React Native Developer from Ahmedabad, India. Building scalable web and mobile applications.',
    images: [
      {
        url: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1776965724/ChatGPT_Image_Apr_19_2026_10_52_51_PM_uhap27.png',
        width: 1200,
        height: 630,
        alt: 'Kiran Dekaliya - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiran Dekaliya | Full Stack Developer | React Native Developer',
    description:
      'Kiran Dekaliya (Kiran Chaudhary) — Full Stack Developer & Software Engineer from Ahmedabad, India.',
    images: ['https://res.cloudinary.com/dnbayngfx/image/upload/v1776965724/ChatGPT_Image_Apr_19_2026_10_52_51_PM_uhap27.png'],
    creator: '@dekaliya_kiran',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kirandekaliya.in',
  },
  verification: {
    google: 'REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://kirandekaliya.in/#person',
      name: 'Kiran Dekaliya',
      alternateName: ['Kiran Chaudhary', 'Kiran Dekaliya Chaudhary'],
      url: 'https://kirandekaliya.in',
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1776965724/ChatGPT_Image_Apr_19_2026_10_52_51_PM_uhap27.png',
        width: 400,
        height: 400,
      },
      jobTitle: ['Full Stack Developer', 'React Native Developer', 'Software Engineer'],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/kiranchaudhary18',
        'https://www.linkedin.com/in/chaudharykiran16/',
        'https://x.com/dekaliya_kiran',
        'https://leetcode.com/u/KiranChaudhary/',
      ],
      knowsAbout: [
        'React.js',
        'Next.js',
        'Node.js',
        'React Native',
        'MongoDB',
        'Express.js',
        'JavaScript',
        'TypeScript',
        'Full Stack Development',
        'Mobile App Development',
      ],
      description:
        'Kiran Dekaliya (also known as Kiran Chaudhary) is a Full Stack Developer, React Native Developer, and Software Engineer based in Ahmedabad, Gujarat, India.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kirandekaliya.in/#website',
      url: 'https://kirandekaliya.in',
      name: 'Kiran Dekaliya Portfolio',
      description: 'Portfolio of Kiran Dekaliya — Full Stack Developer & Software Engineer from Ahmedabad, India.',
      author: { '@id': 'https://kirandekaliya.in/#person' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A192F] text-white" suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
