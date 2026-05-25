import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

export interface V1KSMConfiguration {
  /** NodeLabelSelector is a selector that filters in which nodes the KSM will be enabled. Empty NodeLabelSelector will enable ksm for every node. */
  nodeLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}
