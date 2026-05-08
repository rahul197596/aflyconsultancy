import mongoose, { Connection } from 'mongoose';

let cached: Connection | null = null;

export async function connectDB(): Promise<Connection> {
  if (cached) {
    return cached;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || '', {
      bufferCommands: false,
    });

    cached = conn.connection;
    return cached;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
