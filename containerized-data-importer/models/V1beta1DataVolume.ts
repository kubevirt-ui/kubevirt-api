import type { V1ObjectMeta } from './V1ObjectMeta';
import type { V1beta1DataVolumeSpec } from './V1beta1DataVolumeSpec';
import type { V1beta1DataVolumeStatus } from './V1beta1DataVolumeStatus';

/** DataVolume is an abstraction on top of PersistentVolumeClaims to allow easy population of those PersistentVolumeClaims with relation to VirtualMachines */
export interface V1beta1DataVolume {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: V1ObjectMeta;
  /**
   * DataVolumeSpec defines the DataVolume type specification
   * @default {}
   */
  spec: V1beta1DataVolumeSpec;
  /**
   * DataVolumeStatus contains the current status of the DataVolume
   * @default {}
   */
  status?: V1beta1DataVolumeStatus;
}
