import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGlobe, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Feature {
  icon: IconDefinition;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: faBriefcase,
    title: 'Lowongan Terkurasi',
    description: 'Setiap lowongan yang kami tampilkan sudah diverifikasi untuk memastikan keaslian dan relevansi informasi.',
  },
  {
    icon: faGlobe,
    title: 'Akses Cepat',
    description: 'Platform kami dirancang untuk memberikan pengalaman pencarian yang cepat dan efisien tanpa hambatan.',
  },
  {
    icon: faShieldHalved,
    title: 'Aman & Terpercaya',
    description: 'Keamanan data pengguna adalah prioritas utama kami. Informasi pribadi Anda selalu terlindungi.',
  },
  {
    icon: faUsers,
    title: 'Komunitas',
    description: 'Bergabung dengan jutaan pencari kerja di Indonesia yang sudah menemukan karir impian mereka.',
  },
];

export default function AboutContent() {
  return (
    <div style={{ padding: '64px 0' }}>
      <div className="container" style={{ maxWidth: '768px' }}>
        {/* Hero */}
        <div style={{ marginBottom: '48px' }}>
          <h1 className="heading-1" style={{ marginBottom: '8px' }}>
            Tentang NyariKerja
          </h1>
          <p className="body-md" style={{ color: 'var(--slate)', maxWidth: '500px' }}>
            Membantu jutaan orang Indonesia menemukan karir yang tepat dan bermakna
          </p>
        </div>

        {/* Mission */}
        <div className="card-base" style={{ marginBottom: '40px' }}>
          <h2 className="heading-4" style={{ marginBottom: '16px' }}>
            Misi Kami
          </h2>
          <p className="body-md" style={{ marginBottom: '12px', lineHeight: 1.8 }}>
            NyariKerja hadir sebagai jembatan antara pencari kerja dan perusahaan-perusahaan
            terbaik di Indonesia. Kami percaya bahwa setiap orang berhak mendapatkan akses
            yang sama terhadap peluang karir yang berkualitas.
          </p>
          <p className="body-md" style={{ color: 'var(--slate)', lineHeight: 1.8 }}>
            Platform kami dirancang untuk menyederhanakan proses pencarian kerja, mulai dari
            menemukan lowongan yang sesuai hingga proses lamaran. Dengan teknologi modern dan
            pendekatan yang berpusat pada pengguna, kami berkomitmen untuk memberikan pengalaman
            terbaik dalam perjalanan karir Anda.
          </p>
        </div>

        {/* Features */}
        <h2 className="heading-4" style={{ marginBottom: '24px' }}>
          Mengapa NyariKerja?
        </h2>
        <div className="grid grid-2" style={{ marginBottom: '40px' }}>
          {features.map((feature) => (
            <div className="card-base" key={feature.title} style={{ height: '100%' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 'var(--rounded-md)',
                backgroundColor: 'var(--tint-lavender)',
                color: 'var(--primary)',
                marginBottom: '16px',
              }}>
                <FontAwesomeIcon icon={feature.icon} style={{ width: 22, height: 22 }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>
                {feature.title}
              </h3>
              <p className="body-sm" style={{ color: 'var(--slate)', lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-base" style={{ textAlign: 'center' }}>
          <h2 className="heading-4" style={{ marginBottom: '8px' }}>
            Siap Memulai Perjalanan Karirmu?
          </h2>
          <p className="body-sm" style={{ color: 'var(--slate)', maxWidth: '480px', margin: '0 auto 24px' }}>
            Jelajahi ribuan lowongan dari perusahaan-perusahaan terbaik di Indonesia dan
            temukan posisi yang sesuai dengan impianmu.
          </p>
          <Link href="/kategori" className="btn btn-primary">
            Jelajahi Lowongan
          </Link>
        </div>
      </div>
    </div>
  );
}
