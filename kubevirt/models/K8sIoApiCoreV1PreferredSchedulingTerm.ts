import type { K8sIoApiCoreV1NodeSelectorTerm } from './K8sIoApiCoreV1NodeSelectorTerm';

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
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
