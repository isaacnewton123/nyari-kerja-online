# NyariKerja.online - Frontend 🚀

Selamat datang di repositori frontend untuk **NyariKerja.online**, sebuah portal lowongan kerja modern, cepat, dan responsif. Proyek ini dibangun menggunakan teknologi web terkini untuk memberikan pengalaman terbaik bagi para pencari kerja.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library UI:** [Material UI (MUI)](https://mui.com/)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MongoDB](https://www.mongodb.com/) (menggunakan Mongoose)
- **Package Manager:** [Bun](https://bun.sh/)

## 📦 Prasyarat

Sebelum memulai, pastikan kamu sudah menginstal:
- [Bun](https://bun.sh/) (Disarankan untuk kecepatan optimal) atau Node.js / npm.
- Akses ke database MongoDB.

## 🚀 Cara Menjalankan di Lokal (Development)

1. **Clone repository ini** (jika belum).
2. **Buka terminal** dan arahkan ke folder frontend ini.
3. **Install semua dependensi** menggunakan Bun:
   ```bash
   bun install
   ```
4. **Siapkan Environment Variables**:
   Buat file `.env.local` di *root directory* (sejajar dengan `package.json`) dan isi dengan konfigurasi database kamu:
   ```env
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/nyarikerjodb?retryWrites=true&w=majority"
   ```
5. **Jalankan Development Server**:
   ```bash
   bun dev
   ```
6. **Buka di Browser**:
   Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya!

## 📁 Struktur Folder Penting

- `/app` - Berisi routing halaman (Pages), Layout, dan API Routes (fitur Next.js App Router).
- `/components` - Berisi komponen React yang dapat digunakan kembali (seperti `JobCard`, `HeroSection`, `Footer`).
- `/lib` - Berisi fungsi utilitas (`utils.ts`), koneksi database (`mongodb.ts`), dan definisi tipe TypeScript (`types.ts`).

## ⚙️ Skrip Perintah (Scripts)

- `bun dev` - Menjalankan aplikasi dalam mode *development*.
- `bun run build` - Melakukan kompilasi/build untuk *production*.
- `bun start` - Menjalankan aplikasi hasil kompilasi *production*.
- `bun run lint` - Mengecek error dan standar penulisan kode menggunakan ESLint.

## ✨ Fitur Utama
- **SSR & SEO Friendly:** Dioptimalkan secara bawaan oleh Next.js agar mudah ditemukan di Google.
- **Responsif:** Tampilan yang mulus dan rapi dari layar HP hingga Desktop berkat sistem Grid MUI.
- **Dynamic Routing:** Halaman lowongan, kategori, dan pencarian dibuat dinamis sesuai data dari database.

---
*Dibuat dengan ❤️ untuk membantu jutaan orang mendapatkan pekerjaan impian.*
