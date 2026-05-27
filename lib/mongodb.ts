import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || 'nyarikerja_db';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI belum diset di environment variables');
}

// Optimasi untuk Vercel Serverless:
// - maxPoolSize kecil karena setiap function instance punya pool sendiri
// - maxIdleTimeMS pendek agar connection cepat dilepas
// - serverSelectionTimeoutMS pendek agar timeout cepat terdeteksi
const options = {
  maxPoolSize: 3,
  maxIdleTimeMS: 10000,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 5000,
};

// Gunakan global cache agar connection di-reuse antar request di function yang sama
const globalWithMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
  _mongoDb?: Db;
};

export async function getDb(): Promise<Db> {
  if (globalWithMongo._mongoDb) {
    return globalWithMongo._mongoDb;
  }

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(MONGODB_URI, options);
    await globalWithMongo._mongoClient.connect();
  }

  globalWithMongo._mongoDb = globalWithMongo._mongoClient.db(MONGODB_DB_NAME);
  return globalWithMongo._mongoDb;
}

export async function getCollection(name?: string) {
  const db = await getDb();
  return db.collection(name || process.env.MONGODB_COLLECTION_NAME || 'jobs');
}
