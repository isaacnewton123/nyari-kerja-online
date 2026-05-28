import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Category } from '@/lib/types';

interface CategoriesContentProps {
  categories: Category[];
}

export default function CategoriesContent({ categories }: CategoriesContentProps) {
  return (
    <div style={{ padding: '64px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h1 className="heading-1" style={{ marginBottom: '8px' }}>
            Kategori Lowongan
          </h1>
          <p className="body-md" style={{ color: 'var(--slate)' }}>
            Pilih kategori yang sesuai dengan minat dan keahlianmu
          </p>
        </div>

        <div className="grid grid-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="card-base"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                textDecoration: 'none',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3, fontSize: '16px' }}>
                  {cat.name}
                </p>
                <span className="caption" style={{ color: 'var(--steel)' }}>
                  {cat.count} lowongan
                </span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} style={{ width: 14, height: 14, color: 'var(--stone)' }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
