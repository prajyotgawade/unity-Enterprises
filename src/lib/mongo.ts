import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options: MongoClientOptions = {};

let clientPromise: Promise<MongoClient>;

if (!uri) {
  // During development/build, we might not have the URI yet.
  console.warn("MONGODB_URI is not set in environment variables");
  clientPromise = Promise.reject(new Error("MONGODB_URI is not set in environment variables"));
} else {
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      try {
        const client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
      } catch (e) {
        globalWithMongo._mongoClientPromise = Promise.reject(e);
      }
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    try {
      const client = new MongoClient(uri, options);
      clientPromise = client.connect();
    } catch (e) {
      clientPromise = Promise.reject(e);
    }
  }
}

export default clientPromise;


