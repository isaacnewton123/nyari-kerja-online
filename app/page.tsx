import HeroSection from '@/components/HeroSection';
import HomeContent from '@/components/HomeContent';
import JsonLd from '@/components/JsonLd';
import { getPaginatedPosts, getLatestPosts, getCategories, getStats } from '@/lib/data';

// Revalidate setiap 5 menit — hemat quota Vercel free tier
export const revalidate = 300;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function HomePage(props: Props) {
  const searchParams = await props.searchParams;
  const pageParam = searchParams?.page;
  const page = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const limit = 12;

  const [paginatedData, latestPosts, categories, stats] = await Promise.all([
    getPaginatedPosts(page, limit),
    getLatestPosts(6),
    getCategories(),
    getStats(),
  ]);

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NyariKerja',
    url: 'https://nyarikerja.online',
    description:
      'Platform pencarian lowongan kerja terpercaya di Indonesia.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://nyarikerja.online/cari?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HeroSection stats={stats} />
      <HomeContent
        allPosts={paginatedData.posts}
        latestPosts={latestPosts}
        categories={categories}
        currentPage={page}
        totalPages={paginatedData.totalPages}
      />
    </>
  );
}
