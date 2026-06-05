export interface V1beta1CPUPreferenceRequirement {
  /**
   * Minimal number of vCPUs required by the preference.
   * @format int64
   * @default 0
   */
  guest: number;
}
