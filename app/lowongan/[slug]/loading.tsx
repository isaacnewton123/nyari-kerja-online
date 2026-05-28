import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingJobDetail() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      gap: '16px',
      padding: '40px'
    }}>
      <FontAwesomeIcon 
        icon={faSpinner} 
        spin 
        style={{ width: '48px', height: '48px', color: 'var(--primary)' }} 
      />
      <h2 className="heading-4" style={{ color: 'var(--ink)' }}>
        Memuat Detail Lowongan...
      </h2>
      <p style={{ color: 'var(--slate)', textAlign: 'center' }}>
        Mohon tunggu sebentar, kami sedang mengambil data lowongan pekerjaan ini untuk Anda.
      </p>
    </div>
  );
}
