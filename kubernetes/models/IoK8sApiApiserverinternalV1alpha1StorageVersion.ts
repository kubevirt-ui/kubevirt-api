import type { IoK8sApiApiserverinternalV1alpha1StorageVersionSpec } from './IoK8sApiApiserverinternalV1alpha1StorageVersionSpec';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionStatus } from './IoK8sApiApiserverinternalV1alpha1StorageVersionStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiApiserverinternalV1alpha1StorageVersion {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** The name is <group>.<resource>. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec is an empty spec. It is here to comply with Kubernetes API style. */
  spec: IoK8sApiApiserverinternalV1alpha1StorageVersionSpec;
  /** API server instances report the version they can decode and the version they encode objects to when persisting objects in the backend. */
  status: IoK8sApiApiserverinternalV1alpha1StorageVersionStatus;
}
