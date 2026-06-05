import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1DataVolumeTemplateDummyStatus } from './V1DataVolumeTemplateDummyStatus';
import type { V1beta1DataVolumeSpec } from './V1beta1DataVolumeSpec';

export interface V1DataVolumeTemplateSpec {
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
   * DataVolumeSpec contains the DataVolume specification.
   * @default {}
   */
  spec: V1beta1DataVolumeSpec;
  /** DataVolumeTemplateDummyStatus is here simply for backwards compatibility with a previous API. */
  status?: V1DataVolumeTemplateDummyStatus;
}
