'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faArrowsRotate, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Runtime Error Caught by Next.js Error Boundary:', error);
  }, [error]);

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
          backgroundColor: '#fff3e0',
          color: 'var(--error)',
          marginBottom: '24px',
        }}>
          <FontAwesomeIcon icon={faCircleExclamation} style={{ width: 48, height: 48 }} />
        </div>

        <h1 className="heading-4" style={{ marginBottom: '16px' }}>
          Sistem Mengalami Gangguan
        </h1>

        <p className="body-md" style={{ color: 'var(--slate)', marginBottom: '32px' }}>
          Mohon maaf, terjadi kesalahan teknis saat memuat bagian ini. Tim kami telah diberitahu. Anda dapat mencoba memuat ulang, atau kembali ke halaman utama.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
          >
            <FontAwesomeIcon icon={faArrowsRotate} style={{ width: 16, height: 16 }} />
            Coba Lagi
          </button>
          <Link href="/" className="btn btn-secondary btn-lg" style={{ width: '100%' }}>
            <FontAwesomeIcon icon={faHouse} style={{ width: 16, height: 16 }} />
            Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
