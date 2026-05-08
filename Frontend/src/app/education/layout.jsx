export const metadata = {
  title: 'Education | Kiran Dekaliya',
  description:
    'Education and qualifications of Kiran Dekaliya - Software Engineer and Full-Stack Developer (MERN). Details about courses, certifications, and professional development.',
  canonical: 'https://kirandekaliya.in/education',
  alternates: {
    canonical: 'https://kirandekaliya.in/education',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/education',
    siteName: 'Kiran Dekaliya | Full-Stack Developer Portfolio',
    title: 'Education | Kiran Dekaliya',
    description:
      'Educational background and qualifications of Kiran Dekaliya - Software Engineer with expertise in MERN Stack and modern web technologies.',
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
    title: 'Education | Kiran Dekaliya',
    description:
      'Educational background, qualifications, and professional development of Kiran Dekaliya - Software Engineer.',
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
