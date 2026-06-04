import type { V1UserPasswordAccessCredentialPropagationMethod } from './V1UserPasswordAccessCredentialPropagationMethod';
import type { V1UserPasswordAccessCredentialSource } from './V1UserPasswordAccessCredentialSource';

/** UserPasswordAccessCredential represents a source and propagation method for injecting user passwords into a vm guest Only one of its members may be specified. */
export interface V1UserPasswordAccessCredential {
  /**
   * propagationMethod represents how the user passwords are injected into the vm guest.
   * @default {}
   */
  propagationMethod: V1UserPasswordAccessCredentialPropagationMethod;
  /**
   * Source represents where the user passwords are pulled from
   * @default {}
   */
  source: V1UserPasswordAccessCredentialSource;
}
