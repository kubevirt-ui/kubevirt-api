export interface V1TokenBucketRateLimiter {
  /**
   * Maximum burst for throttle. If it's zero, the component default will be used
   * @format int32
   * @default 0
   */
  burst: number;
  /**
   * QPS indicates the maximum QPS to the apiserver from this client. If it's zero, the component default will be used
   * @format float
   * @default 0
   */
  qps: number;
}
