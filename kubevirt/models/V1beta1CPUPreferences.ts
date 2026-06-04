import type { V1CPUFeature } from './V1CPUFeature';
import type { V1beta1SpreadOptions } from './V1beta1SpreadOptions';

/** CPUPreferences contains various optional CPU preferences. */
export interface V1beta1CPUPreferences {
  /** PreferredCPUFeatures optionally defines a slice of preferred CPU features. */
  preferredCPUFeatures?: V1CPUFeature[];
  /** PreferredCPUTopology optionally defines the preferred guest visible CPU topology, defaults to PreferSockets. */
  preferredCPUTopology?: string;
  spreadOptions?: V1beta1SpreadOptions;
}
