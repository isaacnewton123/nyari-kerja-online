import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCategories, getCategoryBySlug, getPostsByCategory } from '@/lib/data';
import CategoryDetailContent from './CategoryDetailContent';

export const dynamicParams = true;
export const revalidate = 300;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) return { title: 'Kategori Tidak Ditemukan' };

  return {
    title: `Lowongan ${cat.name}`,
    description: `Daftar lowongan kerja di bidang ${cat.name}. Temukan posisi terbaik di NyariKerja.`,
    alternates: {
      canonical: `https://www.nyarikerja.online/kategori/${slug}`,
    },
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) notFound();

  const posts = await getPostsByCategory(cat.name);

  return <CategoryDetailContent cat={cat} posts={posts} />;
}
