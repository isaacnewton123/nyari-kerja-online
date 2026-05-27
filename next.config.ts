import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Vercel free tier: optimasi gambar otomatis
    formats: ['image/avif', 'image/webp'],
    // Batasi ukuran gambar yang di-optimize agar hemat bandwidth
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Minimumkan cache TTL agar gambar tidak sering di-optimize ulang
    minimumCacheTTL: 2592000, // 30 hari
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-bbc253910e994069b1e5b1cc033125ff.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'cdn.nyarikerja.online',
      },
    ],
  },
  // Headers keamanan + cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets agresif (fonts, images, JS/CSS)
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
