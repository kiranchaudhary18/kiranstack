export const metadata = {
  title: 'GitHub | Kiran Dekaliya',
  description:
    'GitHub profile of Kiran Dekaliya - Software Engineer and Full-Stack Developer. Open source projects, repositories, and contributions to the developer community.',
  canonical: 'https://kirandekaliya.in/github',
  alternates: {
    canonical: 'https://kirandekaliya.in/github',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/github',
    siteName: 'Kiran Dekaliya | Full-Stack Developer Portfolio',
    title: 'GitHub | Kiran Dekaliya',
    description:
      'GitHub profile and open source projects by Kiran Dekaliya - Software Engineer and Full-Stack Developer specializing in MERN Stack.',
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
    title: 'GitHub | Kiran Dekaliya',
    description:
      'Open source projects and GitHub contributions by Kiran Dekaliya - Software Engineer and Full-Stack Developer.',
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
