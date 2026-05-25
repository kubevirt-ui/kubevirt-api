import type { IoK8sApiCertificatesV1beta1ClusterTrustBundleSpec } from './IoK8sApiCertificatesV1beta1ClusterTrustBundleSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCertificatesV1beta1ClusterTrustBundle {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** metadata contains the object metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec contains the signer (if any) and trust anchors. */
  spec: IoK8sApiCertificatesV1beta1ClusterTrustBundleSpec;
}
