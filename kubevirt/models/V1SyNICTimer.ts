import type { V1FeatureState } from './V1FeatureState';

export interface V1SyNICTimer {
  /** Represents if a feature is enabled or disabled. */
  direct?: V1FeatureState;
  /** Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
}
