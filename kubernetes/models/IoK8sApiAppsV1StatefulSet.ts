import type { IoK8sApiAppsV1StatefulSetSpec } from './IoK8sApiAppsV1StatefulSetSpec';
import type { IoK8sApiAppsV1StatefulSetStatus } from './IoK8sApiAppsV1StatefulSetStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAppsV1StatefulSet {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec defines the desired identities of pods in this set. */
  spec?: IoK8sApiAppsV1StatefulSetSpec;
  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  status?: IoK8sApiAppsV1StatefulSetStatus;
}
