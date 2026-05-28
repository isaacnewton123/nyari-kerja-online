import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '16px'
    }}>
      <FontAwesomeIcon 
        icon={faSpinner} 
        spin 
        style={{ width: '40px', height: '40px', color: 'var(--primary)' }} 
      />
      <h2 className="heading-4" style={{ color: 'var(--ink)' }}>
        Memuat Data...
      </h2>
      <p style={{ color: 'var(--slate)' }}>
        Harap tunggu sebentar, kami sedang menyiapkan halaman untuk Anda.
      </p>
    </div>
  );
}
