import type { IoK8sApiCoreV1TopologySelectorLabelRequirement } from './IoK8sApiCoreV1TopologySelectorLabelRequirement';

export interface IoK8sApiCoreV1TopologySelectorTerm {
  /** A list of topology selector requirements by labels. */
  matchLabelExpressions?: IoK8sApiCoreV1TopologySelectorLabelRequirement[];
}
