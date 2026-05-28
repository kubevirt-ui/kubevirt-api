import type { IoK8sApiCoreV1NodeSelectorRequirement } from './IoK8sApiCoreV1NodeSelectorRequirement';

export interface IoK8sApiCoreV1NodeSelectorTerm {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: IoK8sApiCoreV1NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  matchFields?: IoK8sApiCoreV1NodeSelectorRequirement[];
}
