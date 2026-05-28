import type { K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement } from './K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement';

export interface K8sIoApimachineryPkgApisMetaV1LabelSelector {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement[];
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: Record<string, string>;
}
