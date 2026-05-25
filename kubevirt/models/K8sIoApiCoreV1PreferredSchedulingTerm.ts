import type { K8sIoApiCoreV1NodeSelectorTerm } from './K8sIoApiCoreV1NodeSelectorTerm';

export interface K8sIoApiCoreV1PreferredSchedulingTerm {
  /**
   * A node selector term, associated with the corresponding weight.
   * @default {}
   */
  preference: K8sIoApiCoreV1NodeSelectorTerm;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   * @format int32
   * @default 0
   */
  weight: number;
}
