import {RateLimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from "dotenv";
dotenv.config();

// create a ratelimiter that allows 10 requests per 20 seconds
const ratelimit = new RateLimit({
    redis: Redis.fromEnv(),
    limiter: RateLimit.slidingWindow(5,"5 s")
})

export default ratelimit