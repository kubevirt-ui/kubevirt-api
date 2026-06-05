import type { IoK8sApiCoreV1NodeSelectorTerm } from './IoK8sApiCoreV1NodeSelectorTerm';

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export interface IoK8sApiCoreV1PreferredSchedulingTerm {
  /** A node selector term, associated with the corresponding weight. */
  preference: IoK8sApiCoreV1NodeSelectorTerm;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   * @format int32
   */
  weight: number;
}
