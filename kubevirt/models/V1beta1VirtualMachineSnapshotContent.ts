import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1beta1VirtualMachineSnapshotContentSpec } from './V1beta1VirtualMachineSnapshotContentSpec';
import type { V1beta1VirtualMachineSnapshotContentStatus } from './V1beta1VirtualMachineSnapshotContentStatus';

export interface V1beta1VirtualMachineSnapshotContent {
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
   * VirtualMachineSnapshotContentSpec is the spec for a VirtualMachineSnapshotContent resource
   * @default {}
   */
  spec: V1beta1VirtualMachineSnapshotContentSpec;
  /** VirtualMachineSnapshotContentStatus is the status for a VirtualMachineSnapshotStatus resource */
  status?: V1beta1VirtualMachineSnapshotContentStatus;
}
