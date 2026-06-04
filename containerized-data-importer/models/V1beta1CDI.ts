import type { V1ObjectMeta } from './V1ObjectMeta';
import type { V1beta1CDISpec } from './V1beta1CDISpec';
import type { V1beta1CDIStatus } from './V1beta1CDIStatus';

/** CDI is the CDI Operator CRD */
export interface V1beta1CDI {
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
   * CDISpec defines our specification for the CDI installation
   * @default {}
   */
  spec: V1beta1CDISpec;
  /**
   * CDIStatus defines the status of the installation
   * @default {}
   */
  status?: V1beta1CDIStatus;
}
