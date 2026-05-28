import { getCollection } from './mongodb';
import { JobPost, Category } from './types';

// ---- Data Fetching Functions ----

export async function getPaginatedPosts(page = 1, limit = 10): Promise<{ posts: JobPost[], totalPosts: number, totalPages: number }> {
  const collection = await getCollection();
  const skip = (page - 1) * limit;

  const [docs, totalPosts] = await Promise.all([
    collection.find({}).sort({ created_at: -1 }).skip(skip).limit(limit).toArray(),
    collection.countDocuments()
  ]);

  return {
    posts: docs.map(serializeDoc) as unknown as JobPost[],
    totalPosts,
    totalPages: Math.ceil(totalPosts / limit)
  };
}

export async function getLatestPosts(limit = 6): Promise<JobPost[]> {
  const collection = await getCollection();
  const docs = await collection
    .find({})
    .sort({ created_at: -1 })
    .limit(limit)
    .toArray();

  return docs.map(serializeDoc) as unknown as JobPost[];
}

export async function getPostBySlug(slug: string): Promise<JobPost | null> {
  const collection = await getCollection();
  const doc = await collection.findOne({ slug });
  if (!doc) return null;
  return serializeDoc(doc) as unknown as JobPost;
}

export async function getPostsByCategory(categoryName: string): Promise<JobPost[]> {
  const collection = await getCollection();
  const docs = await collection
    .find({ category: categoryName })
    .sort({ created_at: -1 })
    .toArray();

  return docs.map(serializeDoc) as unknown as JobPost[];
}

export async function searchPosts(query: string): Promise<JobPost[]> {
  const collection = await getCollection();
  const regex = { $regex: query, $options: 'i' };

  const docs = await collection
    .find({
      $or: [
        { company: regex },
        { category: regex },
        { location: regex },
        { 'jobs.position': regex },
        { 'seo.tags': regex },
        { slug: regex },
      ],
    })
    .sort({ created_at: -1 })
    .limit(30)
    .toArray();

  return docs.map(serializeDoc) as unknown as JobPost[];
}

export async function getRelatedPosts(currentSlug: string, limit = 3): Promise<JobPost[]> {
  const current = await getPostBySlug(currentSlug);
  if (!current) return [];

  const collection = await getCollection();
  const docs = await collection
    .find({
      slug: { $ne: currentSlug },
      category: current.category,
    })
    .sort({ created_at: -1 })
    .limit(limit)
    .toArray();

  return docs.map(serializeDoc) as unknown as JobPost[];
}

export async function getCategories(): Promise<Category[]> {
  const collection = await getCollection();
  const pipeline = [
    { $match: { category: { $ne: null, $exists: true } } },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 as const } },
  ];

  const results = await collection.aggregate(pipeline).toArray();

  return results
    .filter((r) => r._id != null)
    .map((r) => ({
      name: r._id as string,
      slug: slugify(r._id as string),
      count: r.count as number,
    }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  const collection = await getCollection();
  const docs = await collection
    .find({}, { projection: { slug: 1 } })
    .toArray();

  return docs.map((d) => d.slug as string);
}

export async function getStats(): Promise<{ posts: number; companies: number; categories: number }> {
  const collection = await getCollection();

  const [totalPosts, companiesAgg, categoriesAgg] = await Promise.all([
    collection.countDocuments(),
    collection.aggregate([{ $group: { _id: '$company' } }, { $count: 'total' }]).toArray(),
    collection.aggregate([{ $group: { _id: '$category' } }, { $count: 'total' }]).toArray(),
  ]);

  return {
    posts: totalPosts,
    companies: companiesAgg[0]?.total || 0,
    categories: categoriesAgg[0]?.total || 0,
  };
}

// ---- Helper functions ----

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'dan')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeDoc(doc: any): Record<string, unknown> {
  return {
    ...doc,
    _id: doc._id.toString(),
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getTimeAgo(dateStr: string): string {
  const now = new Date();
  const posted = new Date(dateStr);
  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Hari ini';
  if (diffDays === 1) return '1 hari lalu';
  if (diffDays < 7) return `${diffDays} hari lalu`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
  return `${Math.floor(diffDays / 30)} bulan lalu`;
}
