import type { IoK8sApiCoreV1NodeSelectorTerm } from './IoK8sApiCoreV1NodeSelectorTerm';

export interface IoK8sApiCoreV1NodeSelector {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: IoK8sApiCoreV1NodeSelectorTerm[];
}
