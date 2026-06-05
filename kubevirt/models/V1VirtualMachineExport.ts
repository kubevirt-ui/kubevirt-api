import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineExportSpec } from './V1VirtualMachineExportSpec';
import type { V1VirtualMachineExportStatus } from './V1VirtualMachineExportStatus';

/** VirtualMachineExport defines the operation of exporting a VM source */
export interface V1VirtualMachineExport {
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
   * VirtualMachineExportSpec is the spec for a VirtualMachineExport resource
   * @default {}
   */
  spec: V1VirtualMachineExportSpec;
  /** VirtualMachineExportStatus is the status for a VirtualMachineExport resource */
  status?: V1VirtualMachineExportStatus;
}
