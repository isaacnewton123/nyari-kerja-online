import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faIndustry, faTruck, faUtensils, faStore } from '@fortawesome/free-solid-svg-icons';
import JobCard from '@/components/JobCard';
import { JobPost, Category } from '@/lib/types';

interface HomeContentProps {
  latestPosts: JobPost[];
  categories: Category[];
}

// Assign pastel tints and icons to first 4 categories
const categoryStyles = [
  { bg: 'var(--tint-sky)', iconColor: '#3a2a99', icon: faIndustry },
  { bg: 'var(--tint-rose)', iconColor: '#a02e6d', icon: faTruck },
  { bg: 'var(--tint-mint)', iconColor: 'var(--brand-green)', icon: faUtensils },
  { bg: 'var(--tint-peach)', iconColor: '#793400', icon: faStore },
];

export default function HomeContent({ latestPosts, categories }: HomeContentProps) {
  const targetNames = [
    "Manufaktur & Pabrik",
    "Logistik & Gudang",
    "F&B dan Restoran",
    "Retail"
  ];
  const topCategories = targetNames.map(name => {
    const found = categories.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (found) return found;
    return { name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), count: 0 };
  });

  return (
    <div style={{ position: 'relative', zIndex: 20, marginTop: '-80px' }}>
      <div className="container" style={{ paddingBottom: '96px' }}>

        {/* Information Banner — overlaps hero */}
        <div className="card-base" style={{ maxWidth: '800px', margin: '0 auto 96px', position: 'relative', zIndex: 10, textAlign: 'center', padding: '40px', boxShadow: 'var(--shadow-mockup)' }}>
          <h2 className="heading-3" style={{ color: 'var(--ink-deep)', marginBottom: '16px' }}>
            Langkah Awal Menuju Karir Impian
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--slate)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            NyariKerja.online adalah platform terpadu untuk menemukan pekerjaan yang tepat sesuai minat dan keahlian Anda. Kami berkomitmen menjembatani para profesional dengan kesempatan terbaik dari berbagai industri.
          </p>
        </div>



        {/* Kategori Populer — Pastel Feature Cards */}
        <section style={{ marginBottom: '96px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', marginBottom: '40px' }}>
            <h2 className="heading-2" style={{ color: 'var(--ink-deep)', marginBottom: '16px' }}>
              Jelajahi per Kategori
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--charcoal)' }}>
              Temukan karir yang sesuai dengan minat dan keahlianmu dari berbagai sektor industri terbaik.
            </p>
          </div>

          <div className="grid grid-4" style={{ marginBottom: '32px' }}>
            {topCategories.map((cat, idx) => {
              const style = categoryStyles[idx % categoryStyles.length];
              return (
                <Link
                  key={cat.slug}
                  href={`/kategori/${cat.slug}`}
                  className="category-card"
                  style={{ backgroundColor: style.bg }}
                >
                  <div className="category-card-icon" style={{ color: style.iconColor }}>
                    <FontAwesomeIcon icon={style.icon} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '8px' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--charcoal)', fontWeight: 500, opacity: 0.7, marginTop: 'auto' }}>
                    {cat.count} Lowongan
                  </p>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/kategori" className="btn btn-secondary">
              Lihat Selengkapnya
              <FontAwesomeIcon icon={faArrowRight} style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </section>



        {/* Lowongan Terbaru */}
        {latestPosts.length > 0 && (
          <section style={{ marginBottom: '96px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', marginBottom: '32px' }}>
              <div>
                <h2 className="heading-2" style={{ color: 'var(--ink-deep)', marginBottom: '8px' }}>
                  Lowongan Terbaru
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--charcoal)' }}>
                  Kesempatan emas yang baru saja dipublikasikan.
                </p>
              </div>
              <Link href="/lowongan" className="btn btn-secondary">
                Lihat Semua <FontAwesomeIcon icon={faArrowRight} style={{ width: 14, height: 14 }} />
              </Link>
            </div>

            <div className="grid grid-2">
              {latestPosts.map((post) => (
                <JobCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        )}


      </div>
    </div>
  );
}
