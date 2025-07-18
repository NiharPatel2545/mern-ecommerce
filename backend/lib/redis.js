import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {}, // 👈 Enables TLS
  maxRetriesPerRequest: null, // 👈 Prevents retry limit crash
  retryStrategy: times => Math.min(times * 50, 2000), // Optional: reconnect strategy
});