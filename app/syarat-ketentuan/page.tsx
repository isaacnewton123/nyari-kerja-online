import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Syarat & Ketentuan - NyariKerja.online',
  description: 'Syarat dan Ketentuan Layanan NyariKerja.online',
  openGraph: {
    title: 'Syarat & Ketentuan - NyariKerja.online',
    description: 'Syarat dan Ketentuan Layanan NyariKerja.online',
  },
  twitter: {
    title: 'Syarat & Ketentuan - NyariKerja.online',
    description: 'Syarat dan Ketentuan Layanan NyariKerja.online',
  },
};

export default function SyaratKetentuanPage() {
  return (
    <div style={{ padding: '48px 0', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '768px' }}>
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs-separator" style={{ width: 10, height: 10 }} />
          <span className="breadcrumbs-current">Syarat &amp; Ketentuan</span>
        </div>

        <div className="card-base" style={{ padding: '32px' }}>
          <h1 className="heading-1" style={{ marginBottom: '32px' }}>
            Syarat &amp; Ketentuan Layanan
          </h1>

          <p className="body-md" style={{ marginBottom: '16px' }}>
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
          </p>

          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8 }}>
            Syarat dan ketentuan ini mengatur penggunaan website{' '}
            <strong>NyariKerja.online</strong>. Dengan mengakses dan menggunakan
            layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui
            semua persyaratan di bawah ini.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            1. Sifat Layanan (Disclaimer)
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            <strong>NyariKerja.online</strong> adalah sebuah platform agregator
            lowongan pekerjaan (Job Portal). Kami menyajikan informasi lowongan
            yang dikumpulkan dari berbagai sumber publik di internet. Kami{' '}
            <strong>bukan</strong> agen penyalur tenaga kerja (Outsourcing) dan
            kami tidak terafiliasi dengan perusahaan yang memposting lowongan
            kerja tersebut, kecuali dinyatakan lain.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            2. Peringatan Penipuan Rekrutmen
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Kami <strong>SANGAT MELARANG</strong> dan tidak pernah meminta
            imbalan finansial dalam bentuk apapun kepada pencari kerja. Perlu
            diketahui bahwa proses rekrutmen yang sah dan resmi{' '}
            <strong>TIDAK PERNAH memungut biaya apapun</strong> (termasuk biaya
            pendaftaran, biaya seragam, tiket travel, dsb). Jika Anda mendapati
            informasi lowongan di situs kami yang terindikasi penipuan, mohon
            kebijaksanaan Anda untuk mengabaikannya.
          </p>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Segala kerugian materi maupun non-materi yang timbul akibat
            transaksi di luar wewenang platform kami sepenuhnya adalah tanggung
            jawab pengguna.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            3. Verifikasi Data
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Meski kami berupaya menyaring informasi lowongan yang ditayangkan,
            pengguna tetap diwajibkan melakukan{' '}
            <strong>pemeriksaan ulang (cross-check)</strong> terkait keabsahan
            dan keaslian informasi rekrutmen dari perusahaan yang dilamar.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            4. Tautan ke Pihak Ketiga
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Website kami mungkin memuat tautan yang mengarahkan Anda ke situs
            pihak ketiga (misalnya formulir lamaran perusahaan).
            NyariKerja.online tidak bertanggung jawab atas isi konten, kebijakan
            privasi, maupun keamanan dari website pihak ketiga tersebut.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            5. Perubahan Syarat &amp; Ketentuan
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Syarat dan ketentuan ini dapat diubah atau diperbarui kapan saja
            tanpa pemberitahuan sebelumnya. Pengguna diharapkan memeriksa
            halaman ini secara berkala.
          </p>
        </div>
      </div>
    </div>
  );
}
