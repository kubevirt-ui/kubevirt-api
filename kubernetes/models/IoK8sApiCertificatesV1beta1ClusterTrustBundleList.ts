import type { IoK8sApiCertificatesV1beta1ClusterTrustBundle } from './IoK8sApiCertificatesV1beta1ClusterTrustBundle';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCertificatesV1beta1ClusterTrustBundleList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items is a collection of ClusterTrustBundle objects */
  items: IoK8sApiCertificatesV1beta1ClusterTrustBundle[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** metadata contains the list metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
