import type { IoK8sApiApiserverinternalV1alpha1ServerStorageVersion } from './IoK8sApiApiserverinternalV1alpha1ServerStorageVersion';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionCondition } from './IoK8sApiApiserverinternalV1alpha1StorageVersionCondition';

export interface IoK8sApiApiserverinternalV1alpha1StorageVersionStatus {
  /** If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality. */
  commonEncodingVersion?: string;
  /** The latest available observations of the storageVersion's state. */
  conditions?: IoK8sApiApiserverinternalV1alpha1StorageVersionCondition[];
  /** The reported versions per API server instance. */
  storageVersions?: IoK8sApiApiserverinternalV1alpha1ServerStorageVersion[];
}
