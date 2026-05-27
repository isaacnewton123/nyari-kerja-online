import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/lib/ThemeRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nyarikerja.online'),
  title: {
    default: 'NyariKerja — Lowongan Kerja Terbaru di Indonesia',
    template: '%s | NyariKerja',
  },
  description:
    'Temukan lowongan kerja terbaru dari perusahaan-perusahaan terbaik di Indonesia. Platform pencarian kerja terpercaya untuk karir impianmu.',
  keywords: [
    'lowongan kerja',
    'cari kerja',
    'loker',
    'karir',
    'pekerjaan',
    'Indonesia',
    'job vacancy',
    'nyarikerja',
    'lowongan kerja terbaru',
    'info loker',
    'cari lowongan',
  ],
  authors: [{ name: 'NyariKerja' }],
  creator: 'NyariKerja',
  publisher: 'NyariKerja',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://nyarikerja.online',
    siteName: 'NyariKerja',
    title: 'NyariKerja — Lowongan Kerja Terbaru di Indonesia',
    description:
      'Temukan lowongan kerja terbaru dari perusahaan-perusahaan terbaik di Indonesia.',
    images: [
      {
        url: '/og-image-nyarikerja.png',
        width: 1200,
        height: 630,
        alt: 'NyariKerja — Platform Lowongan Kerja Indonesia',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NyariKerja — Lowongan Kerja Terbaru di Indonesia',
    description:
      'Temukan lowongan kerja terbaru dari perusahaan-perusahaan terbaik di Indonesia.',
    images: ['/og-image-nyarikerja.png'],
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
  appleWebApp: {
    title: 'Nyari Kerja',
  },
  verification: {
    // Tambahkan Google Search Console verification code nanti
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://nyarikerja.online',
  },
  category: 'Job Board',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
