import type { IoK8sApiAutoscalingV1HorizontalPodAutoscaler } from './IoK8sApiAutoscalingV1HorizontalPodAutoscaler';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items is the list of horizontal pod autoscaler objects. */
  items: IoK8sApiAutoscalingV1HorizontalPodAutoscaler[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
