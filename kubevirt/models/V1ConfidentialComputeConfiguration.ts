import type { V1TDXConfiguration } from './V1TDXConfiguration';

export interface V1ConfidentialComputeConfiguration {
  /** TDX configuration for attestation on the Intel TDX Platform */
  tdx?: V1TDXConfiguration;
}
