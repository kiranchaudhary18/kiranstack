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
    default: 'Kiran Dekaliya (Chaudhary) | Software Engineer | Full Stack Developer',
    template: '%s | Kiran Dekaliya',
  },
  description:
    'Software Engineer and Full Stack Developer specializing in MERN Stack, React Native, Next.js, AWS, scalable web applications, and modern UI/UX.',
  keywords: [
    'Kiran Dekaliya',
    'Software Engineer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Native Developer',
    'Next.js Developer',
    'Node.js Developer',
    'AWS Developer',
    'Full Stack Developer India',
    'Software Engineer Ahmedabad',
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
    siteName: 'Kiran Dekaliya (Chaudhary) | Software Engineer | Full Stack Developer',
    title: 'Kiran Dekaliya (Chaudhary) | Software Engineer | Full Stack Developer',
    description:
      'Software Engineer and Full Stack Developer specializing in MERN Stack, React Native, Next.js, AWS, scalable web applications, and modern UI/UX.',
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
    title: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    description:
      'Software Engineer and Full Stack Developer specializing in MERN Stack, React Native, Next.js, AWS, scalable web applications, and modern UI/UX.',
    images: ['https://kirandekaliya.in/kd-logo.png'],
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
      alternateName: 'Kiran Dekaliya (Chaudhary)',
      url: 'https://kirandekaliya.in',
      image: {
        '@type': 'ImageObject',
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
      },
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance Software Engineer',
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
        'React',
        'Next.js',
        'Node.js',
        'React Native',
        'MongoDB',
        'PostgreSQL',
        'Express',
        'JavaScript',
        'TypeScript',
        'AWS',
        'Full Stack Development',
        'Mobile App Development',
        'MERN Stack',
      ],
      description:
        'Software Engineer and Full Stack Developer specializing in MERN Stack, React Native, Next.js, AWS, scalable web applications, and modern UI/UX.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kirandekaliya.in/#website',
      url: 'https://kirandekaliya.in',
      name: 'Kiran Dekaliya (Chaudhary) | Software Engineer | Full Stack Developer',
      description: 'Software Engineer and Full Stack Developer specializing in MERN Stack, React Native, Next.js, AWS, scalable web applications, and modern UI/UX.',
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
      '@type': 'Organization',
      '@id': 'https://kirandekaliya.in/#organization',
      name: 'Kiran Dekaliya',
      url: 'https://kirandekaliya.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kirandekaliya.in/kd-logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://github.com/kiranchaudhary18',
        'https://www.linkedin.com/in/chaudharykiran16/',
        'https://x.com/dekaliya_kiran',
      ],
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
          name: 'Skills',
          item: 'https://kirandekaliya.in/skills',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Projects',
          item: 'https://kirandekaliya.in/projects',
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
          name: 'Certificates',
          item: 'https://kirandekaliya.in/certificates',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'GitHub',
          item: 'https://kirandekaliya.in/github',
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'Contact',
          item: 'https://kirandekaliya.in/contact',
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://kirandekaliya.in/#portfolio',
      name: 'Portfolio Pages',
      url: 'https://kirandekaliya.in',
      hasPart: [
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/about',
          name: 'About',
          url: 'https://kirandekaliya.in/about',
          description: 'About Kiran Dekaliya - Software Engineer and Full-Stack Developer with expertise in MERN Stack and modern web technologies.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/skills',
          name: 'Skills',
          url: 'https://kirandekaliya.in/skills',
          description: 'Technical skills including React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, and more.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/projects',
          name: 'Projects',
          url: 'https://kirandekaliya.in/projects',
          description: 'Portfolio of web and mobile projects built with React, Next.js, React Native, and Node.js.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/education',
          name: 'Education',
          url: 'https://kirandekaliya.in/education',
          description: 'Educational background and qualifications in software development and engineering.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/certificates',
          name: 'Certificates',
          url: 'https://kirandekaliya.in/certificates',
          description: 'Professional certifications and achievements in software development.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/github',
          name: 'GitHub',
          url: 'https://kirandekaliya.in/github',
          description: 'Open source projects and GitHub profile - Kiran Dekaliya on GitHub.',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://kirandekaliya.in/contact',
          name: 'Contact',
          url: 'https://kirandekaliya.in/contact',
          description: 'Get in touch with Kiran Dekaliya for project inquiries, collaborations, and business opportunities.',
        },
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://kirandekaliya.in/#profile',
      name: 'Kiran Dekaliya (Chaudhary) | Software Engineer | Full Stack Developer',
      url: 'https://kirandekaliya.in',
      description: 'Professional portfolio and resume of Kiran Dekaliya - Software Engineer specializing in MERN Stack and modern web technologies.',
      mainEntity: { '@id': 'https://kirandekaliya.in/#person' },
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
