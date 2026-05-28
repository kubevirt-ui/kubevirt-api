import type { V1SEVAttestation } from './V1SEVAttestation';
import type { V1SEVPolicy } from './V1SEVPolicy';

export interface V1SEV {
  /** If specified, run the attestation process for a vmi. */
  attestation?: V1SEVAttestation;
  /** Base64 encoded guest owner's Diffie-Hellman key. */
  dhCert?: string;
  /** Guest policy flags as defined in AMD SEV API specification. Note: due to security reasons it is not allowed to enable guest debugging. Therefore NoDebug flag is not exposed to users and is always true. */
  policy?: V1SEVPolicy;
  /** Base64 encoded session blob. */
  session?: string;
}
