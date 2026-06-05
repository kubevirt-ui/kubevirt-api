export interface V1FeatureAPIC {
  /** Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
  /** EndOfInterrupt enables the end of interrupt notification in the guest. Defaults to false. */
  endOfInterrupt?: boolean;
}
