import type { V1NodePlacement } from './V1NodePlacement';

export interface V1ComponentConfig {
  /** nodePlacement describes scheduling configuration for specific KubeVirt components */
  nodePlacement?: V1NodePlacement;
  /**
   * replicas indicates how many replicas should be created for each KubeVirt infrastructure component (like virt-api or virt-controller). Defaults to 2. WARNING: this is an advanced feature that prevents auto-scaling for core kubevirt components. Please use with caution!
   * @format byte
   */
  replicas?: number;
}
