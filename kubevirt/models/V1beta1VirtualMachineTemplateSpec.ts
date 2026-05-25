import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineSpec } from './V1VirtualMachineSpec';

export interface V1beta1VirtualMachineTemplateSpec {
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
}
