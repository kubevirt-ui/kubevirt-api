import type { V1FeatureState } from './V1FeatureState';

export interface V1TLBFlush {
  /** Direct allows sending the TLB flush command directly to the hypervisor. It can be useful to optimize performance in nested virtualization cases, such as Windows VBS. */
  direct?: V1FeatureState;
  /** Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
  /** Extended allows the guest to execute partial TLB flushes. It can be helpful for general purpose workloads. */
  extended?: V1FeatureState;
}
