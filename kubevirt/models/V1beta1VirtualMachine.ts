import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineSpec } from './V1VirtualMachineSpec';
import type { V1VirtualMachineStatus } from './V1VirtualMachineStatus';

export interface V1beta1VirtualMachine {
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * VirtualMachineSpec contains the VirtualMachine specification.
   * @default {}
   */
  spec?: V1VirtualMachineSpec;
  /**
   * Status holds the current state of the controller and brief information about its associated VirtualMachineInstance
   * @default {}
   */
  status?: V1VirtualMachineStatus;
}
