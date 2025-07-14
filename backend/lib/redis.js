import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {}, // Enables secure connection required by Upstash
  maxRetriesPerRequest: 3,
  connectTimeout: 10000 // Gives the server time to respond before timing out
});