import type { V1beta1CPUPreferenceRequirement } from './V1beta1CPUPreferenceRequirement';
import type { V1beta1MemoryPreferenceRequirement } from './V1beta1MemoryPreferenceRequirement';

export interface V1beta1PreferenceRequirements {
  /** Required Architecture of the VM referencing this preference */
  architecture?: string;
  /** Required CPU related attributes of the instancetype. */
  cpu?: V1beta1CPUPreferenceRequirement;
  /** Required Memory related attributes of the instancetype. */
  memory?: V1beta1MemoryPreferenceRequirement;
}
