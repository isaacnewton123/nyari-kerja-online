import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faArrowLeft, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: '404 - Halaman Tidak Ditemukan | NyariKerja.online',
  description: 'Maaf, halaman atau lowongan yang Anda cari tidak dapat ditemukan atau telah dihapus.',
};

export default function NotFound() {
  return (
    <div style={{
      padding: '96px 16px',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        padding: '48px',
        borderRadius: 'var(--rounded-lg)',
        border: '1px solid var(--hairline)',
        background: 'var(--canvas)',
        boxShadow: 'var(--shadow-card)',
      }}>
        <div style={{
          display: 'inline-flex',
          padding: '24px',
          borderRadius: '50%',
          backgroundColor: 'var(--tint-lavender)',
          color: 'var(--primary)',
          marginBottom: '24px',
        }}>
          <FontAwesomeIcon icon={faMagnifyingGlassMinus} style={{ width: 48, height: 48 }} />
        </div>

        <h1 style={{
          fontSize: '64px',
          fontWeight: 800,
          color: 'var(--primary)',
          marginBottom: '8px',
          lineHeight: 1,
        }}>
          404
        </h1>

        <h2 className="heading-5" style={{ marginBottom: '16px' }}>
          Oops! Halaman Tidak Ditemukan
        </h2>

        <p className="body-md" style={{ color: 'var(--slate)', marginBottom: '32px' }}>
          Maaf, halaman atau lowongan pekerjaan yang Anda cari mungkin telah dihapus, kedaluwarsa, atau URL yang Anda masukkan salah.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link href="/" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ width: 16, height: 16 }} />
            Kembali ke Beranda
          </Link>
          <Link href="/cari" className="btn btn-secondary btn-lg" style={{ width: '100%' }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ width: 16, height: 16 }} />
            Cari Lowongan
          </Link>
        </div>
      </div>
    </div>
  );
}
