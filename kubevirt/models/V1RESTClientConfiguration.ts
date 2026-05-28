import type { V1RateLimiter } from './V1RateLimiter';

export interface V1RESTClientConfiguration {
  /** RateLimiter allows selecting and configuring different rate limiters for the k8s client. */
  rateLimiter?: V1RateLimiter;
}
