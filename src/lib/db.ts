import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set in environment variables");
}

let isConnected = 0 as 0 | 1;

export async function connectToDatabase(): Promise<typeof mongoose> {
    if (isConnected && mongoose.connection.readyState === 1) {
        return mongoose;
    }

    const conn = await mongoose.connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB_NAME || undefined,
    });
    isConnected = 1;
    return conn;
}


