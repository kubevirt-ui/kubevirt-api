import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1beta1VirtualMachineSnapshotSpec } from './V1beta1VirtualMachineSnapshotSpec';
import type { V1beta1VirtualMachineSnapshotStatus } from './V1beta1VirtualMachineSnapshotStatus';

/** VirtualMachineSnapshot defines the operation of snapshotting a VM */
export interface V1beta1VirtualMachineSnapshot {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * VirtualMachineSnapshotSpec is the spec for a VirtualMachineSnapshot resource
   * @default {}
   */
  spec: V1beta1VirtualMachineSnapshotSpec;
  /** VirtualMachineSnapshotStatus is the status for a VirtualMachineSnapshot resource */
  status?: V1beta1VirtualMachineSnapshotStatus;
}
