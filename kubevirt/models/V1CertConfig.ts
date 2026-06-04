import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

/** CertConfig contains the tunables for TLS certificates */
export interface V1CertConfig {
  /** The requested 'duration' (i.e. lifetime) of the Certificate. */
  duration?: K8sIoApimachineryPkgApisMetaV1Duration;
  /** The amount of time before the currently issued certificate's "notAfter" time that we will begin to attempt to renew the certificate. */
  renewBefore?: K8sIoApimachineryPkgApisMetaV1Duration;
}
