import type { V1beta1DataImportCronSpec } from './V1beta1DataImportCronSpec';
import type { V1beta1DataImportCronStatus } from './V1beta1DataImportCronStatus';
import type { V1ObjectMeta } from './V1ObjectMeta';

export interface V1beta1DataImportCron {
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
   * DataImportCronSpec defines specification for DataImportCron
   * @default {}
   */
  spec: V1beta1DataImportCronSpec;
  /**
   * DataImportCronStatus provides the most recently observed status of the DataImportCron
   * @default {}
   */
  status?: V1beta1DataImportCronStatus;
}
