import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineInstanceSpec } from './V1VirtualMachineInstanceSpec';
import type { V1VirtualMachineInstanceStatus } from './V1VirtualMachineInstanceStatus';

/** VirtualMachineInstance is *the* VirtualMachineInstance Definition. It represents a virtual machine in the runtime environment of kubernetes. */
export interface V1VirtualMachineInstance {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /** VirtualMachineInstance Spec contains the VirtualMachineInstance specification. */
  spec: V1VirtualMachineInstanceSpec;
  /**
   * Status is the high level overview of how the VirtualMachineInstance is doing. It contains information available to controllers and users.
   * @default {}
   */
  status?: V1VirtualMachineInstanceStatus;
}
