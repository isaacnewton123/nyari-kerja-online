import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Top section */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
            {/* About */}
            <div style={{ maxWidth: '320px' }}>
              <Image
                src="/logo-nyarikerja.png"
                alt="NyariKerja"
                width={120}
                height={40}
                style={{ objectFit: 'contain', marginBottom: '16px' }}
              />
              <p style={{ fontSize: '15px', color: 'var(--steel)', fontWeight: 500, lineHeight: 1.6, marginBottom: '16px' }}>
                Platform pencarian lowongan kerja terpercaya di Indonesia. Temukan karir
                impianmu dari perusahaan-perusahaan terbaik.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a href="https://instagram.com/nyarikerjaonline" target="_blank" rel="noreferrer" className="footer-link" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} style={{ width: 20, height: 20 }} />
                </a>
                <a href="https://facebook.com/nyarikerjaonline" target="_blank" rel="noreferrer" className="footer-link" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} style={{ width: 20, height: 20 }} />
                </a>
                <a href="https://t.me/nyarikerjaonline" target="_blank" rel="noreferrer" className="footer-link" aria-label="Telegram">
                  <FontAwesomeIcon icon={faTelegram} style={{ width: 20, height: 20 }} />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
              {/* Menu */}
              <div>
                <h4 className="footer-heading">Menu</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Link href="/" className="footer-link">Beranda</Link>
                  <Link href="/kategori" className="footer-link">Kategori</Link>
                  <Link href="/tentang" className="footer-link">Tentang Kami</Link>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 className="footer-heading">Informasi</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Link href="/syarat-ketentuan" className="footer-link">Syarat &amp; Ketentuan</Link>
                  <Link href="/kebijakan-privasi" className="footer-link">Kebijakan Privasi</Link>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="footer-heading">Kontak</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span className="footer-link" style={{ cursor: 'default' }}>
                    info@nyarikerja.online
                  </span>
                  <span className="footer-link" style={{ cursor: 'default' }}>
                    nyarikerja.online
                  </span>
                  <span className="footer-link" style={{ cursor: 'default' }}>
                    Karawang, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="divider" style={{ margin: 0 }} />

          {/* Bottom */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--stone)', fontWeight: 500 }}>
              © {new Date().getFullYear()} NyariKerja. Hak cipta dilindungi.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/syarat-ketentuan" style={{ fontSize: '13px', color: 'var(--stone)', fontWeight: 500, transition: 'color 180ms' }}>
                Syarat &amp; Ketentuan
              </Link>
              <Link href="/kebijakan-privasi" style={{ fontSize: '13px', color: 'var(--stone)', fontWeight: 500, transition: 'color 180ms' }}>
                Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
