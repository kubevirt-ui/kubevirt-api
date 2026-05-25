import type { IoK8sApiCertificatesV1CertificateSigningRequestSpec } from './IoK8sApiCertificatesV1CertificateSigningRequestSpec';
import type { IoK8sApiCertificatesV1CertificateSigningRequestStatus } from './IoK8sApiCertificatesV1CertificateSigningRequestStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCertificatesV1CertificateSigningRequest {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec contains the certificate request, and is immutable after creation. Only the request, signerName, expirationSeconds, and usages fields can be set on creation. Other fields are derived by Kubernetes and cannot be modified by users. */
  spec: IoK8sApiCertificatesV1CertificateSigningRequestSpec;
  /** status contains information about whether the request is approved or denied, and the certificate issued by the signer, or the failure condition indicating signer failure. */
  status?: IoK8sApiCertificatesV1CertificateSigningRequestStatus;
}
