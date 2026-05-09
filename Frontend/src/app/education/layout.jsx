export const metadata = {
  title: 'Education',
  description:
    'Education and qualifications of Kiran Dekaliya - Software Engineer. Academic background in software development and professional certifications.',
  canonical: 'https://kirandekaliya.in/education',
  alternates: {
    canonical: 'https://kirandekaliya.in/education',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/education',
    siteName: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    title: 'Education | Kiran Dekaliya',
    description:
      'Educational background and qualifications of Kiran Dekaliya - Software Engineer with expertise in MERN Stack.',
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
    title: 'Education | Kiran Dekaliya',
    description:
      'Educational background and professional qualifications of Kiran Dekaliya - Software Engineer.',
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
