import type { IoK8sApiStorageV1VolumeError } from './IoK8sApiStorageV1VolumeError';

export interface IoK8sApiStorageV1VolumeAttachmentStatus {
  /** attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attachError?: IoK8sApiStorageV1VolumeError;
  /** attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attached: boolean;
  /** attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  attachmentMetadata?: Record<string, string>;
  /** detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher. */
  detachError?: IoK8sApiStorageV1VolumeError;
}
