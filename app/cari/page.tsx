import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import JobCard from '@/components/JobCard';
import SearchInput from '@/app/cari/SearchInput';
import { searchPosts } from '@/lib/data';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;
  const results = query ? await searchPosts(query) : [];

  return (
    <div style={{ padding: '48px 0', minHeight: '60vh' }}>
      <div className="container">
        <h1 className="heading-1" style={{ textAlign: 'center', marginBottom: '8px' }}>
          Cari Lowongan
        </h1>
        <p className="body-md" style={{ color: 'var(--slate)', marginBottom: '32px', textAlign: 'center' }}>
          Temukan lowongan yang sesuai dengan kata kunci pencarian
        </p>

        {/* Search Input (Client Component) */}
        <SearchInput initialQuery={query || ''} />

        {/* Results */}
        {query && (
          <div style={{ marginBottom: '32px' }}>
            <p className="body-md" style={{ color: 'var(--slate)' }}>
              {results.length > 0
                ? `Ditemukan ${results.length} hasil untuk "${query}"`
                : `Tidak ada hasil untuk "${query}"`}
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <div className="grid grid-2">
            {results.map((post) => (
              <JobCard key={post._id} post={post} />
            ))}
          </div>
        ) : query ? (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassMinus}
              style={{ width: 48, height: 48, color: 'var(--muted)', marginBottom: '16px' }}
            />
            <h2 className="heading-5" style={{ marginBottom: '8px', color: 'var(--slate)' }}>
              Lowongan tidak ditemukan
            </h2>
            <p className="body-md" style={{ color: 'var(--steel)' }}>
              Coba gunakan kata kunci yang berbeda
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
