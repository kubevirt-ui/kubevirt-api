import type { IoK8sApiCoreV1NodeSelectorTerm } from './IoK8sApiCoreV1NodeSelectorTerm';

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export interface IoK8sApiCoreV1NodeSelector {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: IoK8sApiCoreV1NodeSelectorTerm[];
}
