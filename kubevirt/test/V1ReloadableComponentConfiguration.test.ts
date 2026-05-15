import { V1ReloadableComponentConfiguration } from '../models/V1ReloadableComponentConfiguration';

export const testObject: V1ReloadableComponentConfiguration = {
  restClient: {
    rateLimiter: {
      tokenBucketRateLimiter: {
        burst: 100,
        qps: 50,
      },
    },
  },
};
