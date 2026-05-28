import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Kebijakan Privasi - NyariKerja.online',
  description: 'Kebijakan Privasi dan Pengumpulan Data di NyariKerja.online',
};

export default function KebijakanPrivasiPage() {
  return (
    <div style={{ padding: '48px 0', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '768px' }}>
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs-separator" style={{ width: 10, height: 10 }} />
          <span className="breadcrumbs-current">Kebijakan Privasi</span>
        </div>

        <div className="card-base" style={{ padding: '32px' }}>
          <h1 className="heading-1" style={{ marginBottom: '32px' }}>
            Kebijakan Privasi
          </h1>

          <p className="body-md" style={{ marginBottom: '16px' }}>
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
          </p>

          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8 }}>
            Selamat datang di <strong>NyariKerja.online</strong>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang mungkin Anda berikan saat menggunakan layanan kami.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            1. Pengumpulan Informasi
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Kami <strong>tidak meminta atau menyimpan data pribadi sensitif</strong> seperti KTP, nomor rekening, atau dokumen rahasia lainnya di server kami. Sistem kami bertindak sebagai perantara yang menyediakan informasi (Job Aggregator). Segala bentuk pendaftaran atau pengiriman lamaran (CV) dilakukan secara langsung di platform pihak ketiga atau ke email resmi perusahaan perekrut yang tertera pada lowongan.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            2. Keamanan Data
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Kami selalu berupaya menyediakan lingkungan yang aman bagi pengguna. Namun, perlu diingat bahwa kami tidak memiliki kendali atas kebijakan privasi dari website pihak ketiga atau platform perusahaan perekrut. Pastikan Anda berhati-hati saat mengirimkan dokumen pribadi melalui internet.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            3. Analitik dan Cookies
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Kami mungkin menggunakan teknologi pelacakan anonim (seperti Google Analytics) untuk memahami statistik lalu lintas website agar kami dapat memberikan pengalaman yang lebih baik. Data yang direkam bersifat agregat dan tidak mengidentifikasi Anda secara pribadi.
          </p>

          <h2 className="heading-5" style={{ marginTop: '32px', marginBottom: '16px' }}>
            4. Perubahan Kebijakan
          </h2>
          <p className="body-md" style={{ marginBottom: '16px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
            Kebijakan privasi ini dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya, sesuai dengan perkembangan layanan kami. Dengan tetap mengakses website kami, Anda menyetujui versi terbaru dari kebijakan privasi ini.
          </p>
        </div>
      </div>
    </div>
  );
}
