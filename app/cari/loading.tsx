import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingSearch() {
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
        Mencari Lowongan...
      </h2>
      <p style={{ color: 'var(--slate)' }}>
        Harap tunggu sebentar, kami sedang mencocokkan kata kunci Anda.
      </p>
    </div>
  );
}
