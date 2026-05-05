import '../index.css';
import LayoutWrapper from '../components/LayoutWrapper';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata = {
  metadataBase: new URL('https://kirandekaliya.in'),
  title: {
    default: 'Kiran Dekaliya | Kiran Chaudhary | Full Stack Developer | Software Engineer',
    template: '%s | Kiran Dekaliya',
  },
  description:
    'Kiran Chaudhary (Kiran Dekaliya) — Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies. Expert in MERN Stack, Next.js, and React Native development based in Ahmedabad, India.',
  keywords: [
    'Kiran Chaudhary',
    'Kiran Dekaliya',
    'Kiran Chaudhary developer',
    'Kiran Dekaliya portfolio',
    'Kiran Chaudhary portfolio',
    'Kiran Dekaliya Full Stack Developer',
    'Kiran Chaudhary Full Stack Developer',
    'Full Stack Developer India',
    'React Native Developer India',
    'Software Engineer Ahmedabad',
    'MERN Stack Developer',
    'Next.js Developer India',
    'Node.js Developer India',
    'Full Stack Developer Ahmedabad',
    'Software Engineer Gujarat',
    'JavaScript Developer India',
    'React Developer India',
    'Web Developer Ahmedabad',
  ],
  authors: [{ name: 'Kiran Chaudhary', url: 'https://kirandekaliya.in' }],
  creator: 'Kiran Chaudhary',
  publisher: 'Kiran Chaudhary',
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
    siteName: 'Kiran Chaudhary | Kiran Dekaliya Portfolio',
    title: 'Kiran Chaudhary | Kiran Dekaliya | Full Stack Developer & Software Engineer',
    description:
      'Kiran Chaudhary (Kiran Dekaliya) — Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies.',
    images: [
      {
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
        alt: 'Kiran Dekaliya Logo - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiran Chaudhary | Kiran Dekaliya | Full Stack Developer & Software Engineer',
    description:
      'Kiran Chaudhary (Kiran Dekaliya) — Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications.',
    images: ['https://kirandekaliya.in/kd-logo.png'],
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
      name: 'Kiran Chaudhary',
      alternateName: ['Kiran Dekaliya', 'Kiran Dekaliya Chaudhary', 'Kiran Chaudhary Dekaliya'],
      url: 'https://kirandekaliya.in',
      image: {
        '@type': 'ImageObject',
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
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
      name: 'Kiran Chaudhary | Kiran Dekaliya Portfolio',
      description: 'Kiran Chaudhary (Kiran Dekaliya) — Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating innovative web applications with modern technologies.',
      author: { '@id': 'https://kirandekaliya.in/#person' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://kirandekaliya.in/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kirandekaliya.in/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://kirandekaliya.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About',
          item: 'https://kirandekaliya.in/about',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Projects',
          item: 'https://kirandekaliya.in/projects',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Skills',
          item: 'https://kirandekaliya.in/skills',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Education',
          item: 'https://kirandekaliya.in/education',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Contact',
          item: 'https://kirandekaliya.in/contact',
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://kirandekaliya.in/#portfolio',
      name: 'Portfolio Pages',
      hasPart: [
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/about',
          name: 'About Me',
          url: 'https://kirandekaliya.in/about',
          description: 'Learn more about Kiran Chaudhary (Kiran Dekaliya), his background, and professional experience as a Full Stack Developer.'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/projects',
          name: 'Projects',
          url: 'https://kirandekaliya.in/projects',
          description: 'View the latest web and mobile projects built with React, Next.js, and Node.js.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/skills',
          name: 'Skills',
          url: 'https://kirandekaliya.in/skills',
          description: 'Explore technical skills including React, Next.js, Node.js, MongoDB, and more.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/education',
          name: 'Education',
          url: 'https://kirandekaliya.in/education',
          description: 'Educational background and certifications.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/github',
          name: 'GitHub',
          url: 'https://kirandekaliya.in/github',
          description: 'Open source projects and contributions on GitHub.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/contact',
          name: 'Contact',
          url: 'https://kirandekaliya.in/contact',
          description: 'Get in touch with Kiran Chaudhary (Kiran Dekaliya) for project inquiries and collaborations.',
        },
      ],
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
