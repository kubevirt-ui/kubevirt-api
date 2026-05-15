import { V1RESTClientConfiguration } from '../models/V1RESTClientConfiguration';

export const testObject: V1RESTClientConfiguration = {
  rateLimiter: {
    tokenBucketRateLimiter: {
      burst: 100,
      qps: 50,
    },
  },
};
