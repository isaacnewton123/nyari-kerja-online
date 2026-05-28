import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import JobCard from '@/components/JobCard';
import { JobPost, Category } from '@/lib/types';

interface CategoryDetailContentProps {
  cat: Category;
  posts: JobPost[];
}

export default function CategoryDetailContent({ cat, posts }: CategoryDetailContentProps) {
  return (
    <div style={{ padding: '48px 0' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Beranda</Link>
          <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs-separator" style={{ width: 10, height: 10 }} />
          <Link href="/kategori">Kategori</Link>
          <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs-separator" style={{ width: 10, height: 10 }} />
          <span className="breadcrumbs-current">{cat.name}</span>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h1 className="heading-1">Lowongan {cat.name}</h1>
          <p className="body-sm" style={{ color: 'var(--slate)' }}>
            {posts.length} lowongan tersedia
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-2">
            {posts.map((post) => (
              <JobCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <h2 className="heading-5" style={{ marginBottom: '8px', color: 'var(--slate)' }}>
              Belum ada lowongan
            </h2>
            <p className="body-sm" style={{ color: 'var(--steel)' }}>
              Lowongan di kategori {cat.name} sedang belum tersedia. Cek kembali nanti!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
