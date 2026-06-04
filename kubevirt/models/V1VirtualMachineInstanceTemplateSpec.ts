import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineInstanceSpec } from './V1VirtualMachineInstanceSpec';

export interface V1VirtualMachineInstanceTemplateSpec {
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /** VirtualMachineInstance Spec contains the VirtualMachineInstance specification. */
  spec?: V1VirtualMachineInstanceSpec;
}
