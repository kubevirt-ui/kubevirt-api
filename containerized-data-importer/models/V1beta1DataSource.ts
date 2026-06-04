import type { V1ObjectMeta } from './V1ObjectMeta';
import type { V1beta1DataSourceSpec } from './V1beta1DataSourceSpec';
import type { V1beta1DataSourceStatus } from './V1beta1DataSourceStatus';

/** DataSource references an import/clone source for a DataVolume */
export interface V1beta1DataSource {
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
   * DataSourceSpec defines specification for DataSource
   * @default {}
   */
  spec: V1beta1DataSourceSpec;
  /**
   * DataSourceStatus provides the most recently observed status of the DataSource
   * @default {}
   */
  status?: V1beta1DataSourceStatus;
}
