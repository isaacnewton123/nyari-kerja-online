import Link from 'next/link';
import JobCard from '@/components/JobCard';
import { getPaginatedPosts } from '@/lib/data';

export const revalidate = 3600;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SemuaLowonganPage(props: Props) {
  const searchParams = await props.searchParams;
  const pageParam = searchParams?.page;
  const page = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const limit = 12;

  const paginatedData = await getPaginatedPosts(page, limit);

  return (
    <div style={{ padding: '48px 0', minHeight: '60vh' }}>
      <div className="container">
        <h1 className="heading-1" style={{ textAlign: 'center', marginBottom: '8px' }}>
          Semua Lowongan
        </h1>
        <p className="body-md" style={{ color: 'var(--slate)', marginBottom: '48px', textAlign: 'center' }}>
          Jelajahi seluruh lowongan pekerjaan yang tersedia saat ini
        </p>

        {paginatedData.posts.length > 0 ? (
          <>
            <div className="grid grid-2">
              {paginatedData.posts.map((post) => (
                <JobCard key={post._id} post={post} />
              ))}
            </div>

            {/* Pagination Controls */}
            {paginatedData.totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px' }}>
                {page > 1 && (
                  <Link href={`/lowongan?page=${page - 1}`} className="btn btn-secondary">
                    Sebelumnya
                  </Link>
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', fontWeight: 500, color: 'var(--ink)' }}>
                  Halaman {page} dari {paginatedData.totalPages}
                </div>

                {page < paginatedData.totalPages && (
                  <Link href={`/lowongan?page=${page + 1}`} className="btn btn-secondary">
                    Selanjutnya
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--slate)' }}>
            <p>Belum ada lowongan tersedia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
