import type { IoK8sApiAppsV1Deployment } from './IoK8sApiAppsV1Deployment';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** DeploymentList is a list of Deployments. */
export interface IoK8sApiAppsV1DeploymentList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Items is the list of Deployments. */
  items: IoK8sApiAppsV1Deployment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
