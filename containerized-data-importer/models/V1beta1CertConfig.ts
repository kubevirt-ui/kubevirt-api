import type { V1Duration } from './V1Duration';

/** CertConfig contains the tunables for TLS certificates */
export interface V1beta1CertConfig {
  /** The requested 'duration' (i.e. lifetime) of the Certificate. */
  duration?: V1Duration;
  /** The amount of time before the currently issued certificate's `notAfter` time that we will begin to attempt to renew the certificate. */
  renewBefore?: V1Duration;
}
