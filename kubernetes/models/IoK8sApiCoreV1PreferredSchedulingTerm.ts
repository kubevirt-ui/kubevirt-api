import type { IoK8sApiCoreV1NodeSelectorTerm } from './IoK8sApiCoreV1NodeSelectorTerm';

export interface IoK8sApiCoreV1PreferredSchedulingTerm {
  /** A node selector term, associated with the corresponding weight. */
  preference: IoK8sApiCoreV1NodeSelectorTerm;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   * @format int32
   */
  weight: number;
}
