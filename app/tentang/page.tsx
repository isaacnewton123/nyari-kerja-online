import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'Tentang NyariKerja',
  description:
    'NyariKerja adalah platform pencarian lowongan kerja terpercaya di Indonesia. Temukan informasi selengkapnya tentang misi dan visi kami.',
  alternates: {
    canonical: 'https://nyarikerja.online/tentang',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
