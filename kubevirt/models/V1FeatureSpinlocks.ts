export interface V1FeatureSpinlocks {
  /** Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
  /**
   * Retries indicates the number of retries. Must be a value greater or equal 4096. Defaults to 4096.
   * @format int64
   */
  spinlocks?: number;
}
