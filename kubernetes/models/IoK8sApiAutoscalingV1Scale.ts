import type { IoK8sApiAutoscalingV1ScaleSpec } from './IoK8sApiAutoscalingV1ScaleSpec';
import type { IoK8sApiAutoscalingV1ScaleStatus } from './IoK8sApiAutoscalingV1ScaleStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAutoscalingV1Scale {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. */
  spec?: IoK8sApiAutoscalingV1ScaleSpec;
  /** status is the current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only. */
  status?: IoK8sApiAutoscalingV1ScaleStatus;
}
