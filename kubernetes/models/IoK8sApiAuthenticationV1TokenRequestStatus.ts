import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** TokenRequestStatus is the result of a token request. */
export interface IoK8sApiAuthenticationV1TokenRequestStatus {
  /** ExpirationTimestamp is the time of expiration of the returned token. */
  expirationTimestamp: IoK8sApimachineryPkgApisMetaV1Time;
  /** Token is the opaque bearer token. */
  token: string;
}
