import type { K8sIoApiCoreV1NodeSelectorRequirement } from './K8sIoApiCoreV1NodeSelectorRequirement';

export interface K8sIoApiCoreV1NodeSelectorTerm {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: K8sIoApiCoreV1NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  matchFields?: K8sIoApiCoreV1NodeSelectorRequirement[];
}
