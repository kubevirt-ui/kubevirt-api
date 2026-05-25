import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { V1VirtualMachineInstanceTemplateSpec } from './V1VirtualMachineInstanceTemplateSpec';

export interface V1VirtualMachineInstanceReplicaSetSpec {
  /** Indicates that the replica set is paused. */
  paused?: boolean;
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @format int32
   */
  replicas?: number;
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. */
  selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** Template describes the pods that will be created. */
  template: V1VirtualMachineInstanceTemplateSpec;
}
