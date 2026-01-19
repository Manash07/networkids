import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const rateLimit = new Ratelimit({ // Create a new rate limiter, limiting to 5 requests per 10 seconds
    redis: Redis.fromEnv(), // Initialize Redis client using environment variables
    limiter: Ratelimit.slidingWindow(5, '10 s'), // 5 requests per 10 seconds
})

export default rateLimit;