import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

export interface V1ObjectGraphOptions {
  /** IncludeOptionalNodes indicates whether to include optional nodes in the graph. True by default. */
  includeOptionalNodes?: boolean;
  /** LabelSelector is used to filter nodes in the graph based on their labels. */
  labelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}
