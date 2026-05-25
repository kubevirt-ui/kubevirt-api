import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';
import type { V1CertConfig } from './V1CertConfig';

export interface V1KubeVirtSelfSignConfiguration {
  /** CA configuration CA certs are kept in the CA bundle as long as they are valid */
  ca?: V1CertConfig;
  /** Deprecated. Use CA.Duration and CA.RenewBefore instead */
  caOverlapInterval?: K8sIoApimachineryPkgApisMetaV1Duration;
  /** Deprecated. Use CA.Duration instead */
  caRotateInterval?: K8sIoApimachineryPkgApisMetaV1Duration;
  /** Deprecated. Use Server.Duration instead */
  certRotateInterval?: K8sIoApimachineryPkgApisMetaV1Duration;
  /** Server configuration Certs are rotated and discarded */
  server?: V1CertConfig;
}
