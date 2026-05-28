import type { V1TDXAttestationConfiguration } from './V1TDXAttestationConfiguration';

export interface V1TDXConfiguration {
  /** QGSConfiguration holds QGS configuration */
  attestation?: V1TDXAttestationConfiguration;
}
