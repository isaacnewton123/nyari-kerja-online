'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body style={{
        fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
      }}>
        <div style={{
          padding: '96px 16px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center',
            padding: '48px',
            borderRadius: '12px',
            border: '1px solid #e5e3df',
            boxShadow: '0px 4px 12px 0px rgba(15, 15, 15, 0.08)',
          }}>
            <div style={{
              display: 'inline-flex',
              padding: '24px',
              borderRadius: '50%',
              backgroundColor: '#fff3e0',
              color: '#e03131',
              marginBottom: '24px',
            }}>
              <FontAwesomeIcon icon={faCircleExclamation} style={{ width: 48, height: 48 }} />
            </div>

            <h1 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' }}>
              Terjadi Kesalahan Kritis
            </h1>

            <p style={{ fontSize: '16px', color: '#5d5b54', marginBottom: '32px', lineHeight: 1.55 }}>
              Mohon maaf, terjadi kesalahan yang tidak terduga. Silakan coba muat ulang halaman.
            </p>

            <button
              onClick={() => reset()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#5645d4',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <FontAwesomeIcon icon={faArrowsRotate} style={{ width: 16, height: 16 }} />
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
