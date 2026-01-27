import { V1RateLimiter } from '../models/V1RateLimiter';

export const testObject: V1RateLimiter = {
  tokenBucketRateLimiter: {
    burst: 100,
    qps: 50,
  },
};
