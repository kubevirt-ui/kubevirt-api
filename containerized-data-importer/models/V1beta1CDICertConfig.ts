import type { V1beta1CertConfig } from './V1beta1CertConfig';

/** CDICertConfig has the CertConfigs for CDI */
export interface V1beta1CDICertConfig {
  /** CA configuration CA certs are kept in the CA bundle as long as they are valid */
  ca?: V1beta1CertConfig;
  /** Client configuration Certs are rotated and discarded */
  client?: V1beta1CertConfig;
  /** Server configuration Certs are rotated and discarded */
  server?: V1beta1CertConfig;
}
