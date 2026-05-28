import type { V1SSHPublicKeyAccessCredentialPropagationMethod } from './V1SSHPublicKeyAccessCredentialPropagationMethod';
import type { V1SSHPublicKeyAccessCredentialSource } from './V1SSHPublicKeyAccessCredentialSource';

export interface V1SSHPublicKeyAccessCredential {
  /**
   * PropagationMethod represents how the public key is injected into the vm guest.
   * @default {}
   */
  propagationMethod: V1SSHPublicKeyAccessCredentialPropagationMethod;
  /**
   * Source represents where the public keys are pulled from
   * @default {}
   */
  source: V1SSHPublicKeyAccessCredentialSource;
}
