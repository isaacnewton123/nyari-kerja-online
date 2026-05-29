# NyariKerja.online — Frontend 🚀

Platform lowongan kerja modern, cepat, dan SEO-optimized untuk Indonesia. Dibangun dengan **Next.js 16 App Router**, **TypeScript**, dan **Vanilla CSS** dengan design-token system kustom.

> **Live:** [https://nyarikerja.online](https://nyarikerja.online)

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| **Bahasa** | [TypeScript](https://www.typescriptlang.org/) (strict mode) |
| **Styling** | Vanilla CSS — Design System kustom dengan CSS Custom Properties (lihat [`DESIGN.md`](./DESIGN.md)) |
| **Icons** | [FontAwesome 6](https://fontawesome.com/) (Solid + Brands, tree-shaken via library) |
| **Database** | [MongoDB](https://www.mongodb.com/) (driver native `mongodb`, bukan Mongoose) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Image CDN** | Cloudflare R2 (`cdn.nyarikerja.online`) |
| **Deployment** | [Vercel](https://vercel.com/) (Free Tier) |
| **Font** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts, `next/font`) |

---

## 📁 Struktur Proyek

```
nyarikerja.online-frontend/
├── app/
│   ├── (home)/
│   │   ├── page.tsx              # Homepage (SSR, revalidate 5 min)
│   │   └── loading.tsx           # Skeleton loading homepage
│   ├── lowongan/
│   │   ├── page.tsx              # Daftar semua lowongan (paginated)
│   │   ├── loading.tsx           # Skeleton loading daftar lowongan
│   │   └── [slug]/
│   │       ├── page.tsx          # Detail lowongan (SSG + ISR)
│   │       ├── JobDetailContent.tsx  # Client component detail lowongan
│   │       └── loading.tsx       # Skeleton loading detail
│   ├── cari/
│   │   ├── page.tsx              # Halaman hasil pencarian
│   │   ├── SearchInput.tsx       # Client component search input
│   │   └── loading.tsx           # Skeleton loading pencarian
│   ├── kategori/
│   │   ├── page.tsx              # Daftar semua kategori
│   │   ├── CategoriesContent.tsx # Render daftar kategori
│   │   ├── loading.tsx           # Skeleton loading kategori
│   │   └── [slug]/
│   │       ├── page.tsx          # Lowongan per kategori
│   │       └── CategoryDetailContent.tsx
│   ├── tentang/
│   │   ├── page.tsx              # Halaman Tentang Kami
│   │   └── AboutContent.tsx      # Konten tentang kami
│   ├── kebijakan-privasi/
│   │   └── page.tsx              # Kebijakan Privasi
│   ├── syarat-ketentuan/
│   │   └── page.tsx              # Syarat & Ketentuan
│   ├── layout.tsx                # Root layout (Navbar + Footer + Analytics)
│   ├── globals.css               # Design System (1300+ baris, token-based)
│   ├── error.tsx                 # Error boundary
│   ├── global-error.tsx          # Global error boundary
│   ├── not-found.tsx             # Halaman 404
│   ├── robots.ts                 # robots.txt generator
│   ├── sitemap.ts                # Dynamic sitemap generator
│   ├── manifest.json             # PWA Web App Manifest
│   ├── favicon.ico               # Favicon
│   ├── apple-icon.png            # Apple touch icon
│   ├── icon0.svg                 # SVG icon
│   └── icon1.png                 # PNG icon
├── components/
│   ├── Navbar.tsx                # Navbar responsif (search, mobile drawer)
│   ├── Footer.tsx                # Footer (links, social media, copyright)
│   ├── HeroSection.tsx           # Hero banner dengan search bar + stats
│   ├── HomeContent.tsx           # Konten homepage (kategori + lowongan terbaru)
│   ├── JobCard.tsx               # Card lowongan (reusable)
│   └── JsonLd.tsx                # Schema.org JSON-LD injector
├── lib/
│   ├── data.ts                   # Data fetching layer (semua query MongoDB)
│   ├── mongodb.ts                # MongoDB connection (pooling, serverless-optimized)
│   ├── types.ts                  # TypeScript interfaces (JobPost, Category, dll.)
│   ├── utils.ts                  # Utility functions (formatDate, getTimeAgo)
│   └── fontawesome.ts            # FontAwesome library config (tree-shaking)
├── public/
│   ├── logo-nyarikerja.png       # Logo utama
│   ├── og-image-nyarikerja.webp  # Open Graph image untuk social sharing
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── next.config.ts                # Konfigurasi Next.js (security headers, image optimization)
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies & scripts
├── DESIGN.md                     # Dokumentasi Design System
└── .env.example                  # Template environment variables
```

---

## 🗺️ Halaman & Routes

| Route | Deskripsi | Rendering |
|---|---|---|
| `/` | Homepage — hero, kategori populer, lowongan terbaru | SSR + ISR (5 min) |
| `/lowongan` | Semua lowongan kerja (paginated, 12/page) | SSR + ISR (5 min) |
| `/lowongan/[slug]` | Detail lowongan (info, gaji, persyaratan, cara melamar) | SSG + ISR (5 min) |
| `/cari?q=...` | Pencarian lowongan (regex multi-field) | SSR |
| `/kategori` | Daftar semua kategori | SSR + ISR (5 min) |
| `/kategori/[slug]` | Lowongan berdasarkan kategori | SSG + ISR (5 min) |
| `/tentang` | Tentang NyariKerja | Static |
| `/kebijakan-privasi` | Kebijakan Privasi | Static |
| `/syarat-ketentuan` | Syarat & Ketentuan | Static |

---

## 🧩 Komponen Utama

| Komponen | Tipe | Fungsi |
|---|---|---|
| `Navbar` | Client | Navigasi responsif, search bar expandable, mobile drawer |
| `Footer` | Server | Footer dengan link navigasi, social media, kontak |
| `HeroSection` | Client | Hero banner dengan search, statistik live (lowongan/perusahaan/kategori) |
| `HomeContent` | Server | Kategori populer (pastel cards) + lowongan terbaru |
| `JobCard` | Server | Card lowongan (logo perusahaan, posisi, lokasi, kategori badge, waktu) |
| `SearchInput` | Client | Input pencarian dengan loading state (`useTransition`) |
| `JobDetailContent` | Client | Full detail lowongan (breadcrumb, section, gaji, persyaratan, share, sidebar) |
| `JsonLd` | Server | Inject structured data (Schema.org WebSite / JobPosting) |

---

## 🗄️ Data Layer

MongoDB diakses langsung via **native `mongodb` driver** (bukan Mongoose). Connection pool dioptimasi untuk Vercel Serverless:

- `maxPoolSize: 3` — pool kecil per function instance
- `maxIdleTimeMS: 10000` — release idle connections cepat
- Connection di-cache via `globalThis` agar reuse antar request

### Fungsi Data (`lib/data.ts`)

| Fungsi | Deskripsi |
|---|---|
| `getLatestPosts(limit)` | Ambil N lowongan terbaru |
| `getPaginatedPosts(page, limit)` | Paginated listing |
| `getPostBySlug(slug)` | Detail lowongan by slug |
| `searchPosts(query)` | Pencarian regex multi-field (company, category, location, position, tags) |
| `getPostsByCategory(name)` | Filter by kategori |
| `getRelatedPosts(slug, limit)` | Lowongan terkait (kategori sama) |
| `getCategories()` | Aggregation: semua kategori + count |
| `getCategoryBySlug(slug)` | Lookup kategori by slug |
| `getAllSlugs()` | Semua slug (untuk SSG/sitemap) |
| `getStats()` | Statistik: total lowongan, perusahaan, kategori |

---

## ⚙️ Environment Variables

```env
# Database (wajib)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/
MONGODB_DB_NAME=nyarikerja_db
MONGODB_COLLECTION_NAME=jobs
```

Salin `.env.example` ke `.env.local` dan isi nilainya.

---

## 🚀 Menjalankan Lokal

```bash
# 1. Install dependencies
npm install
# atau
bun install

# 2. Siapkan environment
cp .env.example .env.local
# Edit .env.local dengan kredensial MongoDB Anda

# 3. Jalankan development server
npm run dev
# atau
bun dev

# 4. Buka di browser
# http://localhost:3000
```

## 📦 Scripts

| Command | Deskripsi |
|---|---|
| `npm run dev` | Development server (hot reload) |
| `npm run build` | Build production |
| `npm start` | Jalankan production build |
| `npm run lint` | ESLint check |

---

## 🔒 Keamanan & Performa

### Security Headers (via `next.config.ts`)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `poweredByHeader: false`

### Image Optimization
- Format: AVIF + WebP otomatis
- Remote patterns: Cloudflare R2 CDN
- Cache TTL: 30 hari
- Static assets: `Cache-Control: public, max-age=31536000, immutable`

### SEO
- Dynamic `<title>` dan `<meta description>` per halaman
- Open Graph & Twitter Card metadata
- Schema.org JSON-LD (WebSite + JobPosting)
- Dynamic `sitemap.xml` (static pages + semua kategori + semua lowongan)
- `robots.txt` (allow `/`, disallow `/api/` dan `/cari`)
- Canonical URLs per halaman

---

## 🎨 Design System

CSS menggunakan **Design Token system** berbasis CSS Custom Properties. Semua token (warna, spacing, typography, shadow, border-radius) didefinisikan di `:root` dalam `globals.css` dan didokumentasikan lengkap di [`DESIGN.md`](./DESIGN.md).

Highlight:
- **Brand palette:** Navy, Purple, Orange, Pink, Teal, Green
- **Pastel tints:** Peach, Rose, Mint, Lavender, Sky, Yellow
- **Typography:** 12 level (hero-display → micro-uppercase), responsive breakpoints
- **Components:** Buttons (7 varian), Cards, Badges, Inputs, Pills, Navigation, Breadcrumbs

---

## 📝 Lisensi

© 2026 NyariKerja.online — All rights reserved.
