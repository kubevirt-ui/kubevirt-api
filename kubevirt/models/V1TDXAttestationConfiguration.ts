export interface V1TDXAttestationConfiguration {
  /** Indicates whether TDX VM should enforce the existence of QGS (required for attestation) to be scheduled */
  enforced?: boolean;
  /** Socket path pointing to the Quote Generation Service */
  qgsSocketPath?: string;
}
