import type { K8sIoApiCoreV1NodeSelectorRequirement } from './K8sIoApiCoreV1NodeSelectorRequirement';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

export interface V1beta1VirtualMachinePoolSelectors {
  /** LabelSelector is a list of label selector for VMs. */
  labelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** NodeSelectorRequirementMatcher is a list of node selector requirement for VMs. */
  nodeSelectorRequirementMatcher?: K8sIoApiCoreV1NodeSelectorRequirement[];
}
