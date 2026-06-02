import HeroSection from "@/components/HeroSection";
import HomeContent from "@/components/HomeContent";
import JsonLd from "@/components/JsonLd";
import { getLatestPosts, getCategories, getStats } from "@/lib/data";

// Revalidate setiap 5 menit — hemat quota Vercel free tier
export const revalidate = 300;

export default async function HomePage() {
  const [latestPosts, categories, stats] = await Promise.all([
    getLatestPosts(6),
    getCategories(),
    getStats(),
  ]);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NyariKerja",
    url: "https://www.nyarikerja.online",
    description: "Platform pencarian lowongan kerja terpercaya di Indonesia.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.nyarikerja.online/cari?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HeroSection stats={stats} />
      <HomeContent latestPosts={latestPosts} categories={categories} />
    </>
  );
}
