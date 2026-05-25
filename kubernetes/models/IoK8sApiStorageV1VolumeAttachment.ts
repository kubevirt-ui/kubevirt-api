import type { IoK8sApiStorageV1VolumeAttachmentSpec } from './IoK8sApiStorageV1VolumeAttachmentSpec';
import type { IoK8sApiStorageV1VolumeAttachmentStatus } from './IoK8sApiStorageV1VolumeAttachmentStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1VolumeAttachment {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system. */
  spec: IoK8sApiStorageV1VolumeAttachmentSpec;
  /** status represents status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher. */
  status?: IoK8sApiStorageV1VolumeAttachmentStatus;
}
