import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

export interface V1ChangedBlockTrackingSelectors {
  /** NamespaceSelector will enable changedBlockTracking on all VMs running inside namespaces that match the label selector. */
  namespaceLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** VirtualMachineSelector will enable changedBlockTracking on all VMs that match the label selector. */
  virtualMachineLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}
