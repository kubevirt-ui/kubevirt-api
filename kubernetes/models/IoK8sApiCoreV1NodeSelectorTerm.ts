import type { IoK8sApiCoreV1NodeSelectorRequirement } from './IoK8sApiCoreV1NodeSelectorRequirement';

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export interface IoK8sApiCoreV1NodeSelectorTerm {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: IoK8sApiCoreV1NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  matchFields?: IoK8sApiCoreV1NodeSelectorRequirement[];
}
