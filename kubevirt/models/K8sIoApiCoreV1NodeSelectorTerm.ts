import type { K8sIoApiCoreV1NodeSelectorRequirement } from './K8sIoApiCoreV1NodeSelectorRequirement';

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export interface K8sIoApiCoreV1NodeSelectorTerm {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: K8sIoApiCoreV1NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  matchFields?: K8sIoApiCoreV1NodeSelectorRequirement[];
}
