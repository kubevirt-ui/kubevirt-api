import type { V1TokenBucketRateLimiter } from './V1TokenBucketRateLimiter';

export interface V1RateLimiter {
  tokenBucketRateLimiter?: V1TokenBucketRateLimiter;
}
