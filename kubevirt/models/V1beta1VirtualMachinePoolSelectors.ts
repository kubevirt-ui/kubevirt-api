import type { K8sIoApiCoreV1NodeSelectorRequirement } from './K8sIoApiCoreV1NodeSelectorRequirement';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

/** VirtualMachinePoolSelectors specifies filtering criteria for VM selection. If both are specified, both must match for a VM to be selected. If only one is specified, only that one must match for a VM to be selected. */
export interface V1beta1VirtualMachinePoolSelectors {
  /** LabelSelector is a list of label selector for VMs. */
  labelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** NodeSelectorRequirementMatcher is a list of node selector requirement for VMs. */
  nodeSelectorRequirementMatcher?: K8sIoApiCoreV1NodeSelectorRequirement[];
}
