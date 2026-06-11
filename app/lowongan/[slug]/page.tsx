import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getAllSlugs, getRelatedPosts, getLatestPosts } from '@/lib/data';
import JobDetailContent from './JobDetailContent';

// Halaman baru yang belum di-build akan otomatis di-render on-demand
export const dynamicParams = true;
// Cache halaman selama 24 jam — hemat quota Vercel free tier
export const revalidate = 86400;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Lowongan Tidak Ditemukan' };

  const title = post.seo?.meta_title || `Lowongan di ${post.company}`;
  const description = post.seo?.meta_description || `Lowongan kerja di ${post.company}, ${post.location}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | NyariKerja`,
      description,
      type: 'article',
      url: `https://www.nyarikerja.online/lowongan/${slug}`,
      images: post.image_url ? [{ url: post.image_url }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.image_url ? [post.image_url] : undefined,
    },
    alternates: {
      canonical: `https://www.nyarikerja.online/lowongan/${slug}`,
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug);
  const recommendedPosts = await getLatestPosts(3);

  return <JobDetailContent post={post} relatedPosts={relatedPosts} recommendedPosts={recommendedPosts} slug={slug} />;
}
