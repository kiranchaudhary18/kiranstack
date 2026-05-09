export const metadata = {
  title: 'Contact',
  description:
    'Contact Kiran Dekaliya - Software Engineer. Get in touch for project inquiries, collaborations, and business opportunities.',
  canonical: 'https://kirandekaliya.in/contact',
  alternates: {
    canonical: 'https://kirandekaliya.in/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kirandekaliya.in/contact',
    siteName: 'Kiran Dekaliya | Software Engineer | Full Stack Developer',
    title: 'Contact | Kiran Dekaliya',
    description:
      'Get in touch with Kiran Dekaliya - Software Engineer for project inquiries, collaborations, and business opportunities.',
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
    title: 'Contact | Kiran Dekaliya',
    description:
      'Contact Kiran Dekaliya for project inquiries, collaborations, and business opportunities.',
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
