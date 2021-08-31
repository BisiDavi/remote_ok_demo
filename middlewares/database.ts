import mongoose from "mongoose";

const { NEXT_MONGODB_URI, NEXT_MONGODB } = process.env;

if (!NEXT_MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!NEXT_MONGODB) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: false,
    };

    cached.promise = await mongoose.connect(NEXT_MONGODB_URI, options);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
