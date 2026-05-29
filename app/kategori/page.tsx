import type { Metadata } from 'next';
import { getCategories } from '@/lib/data';
import CategoriesContent from './CategoriesContent';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Kategori Lowongan Kerja',
  description:
    'Jelajahi kategori lowongan kerja di NyariKerja. Temukan posisi sesuai bidang keahlianmu.',
  alternates: {
    canonical: 'https://nyarikerja.online/kategori',
  },
};

export default async function CategoriesPage() {
  const categories = await getCategories();
  return <CategoriesContent categories={categories} />;
}
