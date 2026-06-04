import type { V1AccessCredentialSecretSource } from './V1AccessCredentialSecretSource';

/** UserPasswordAccessCredentialSource represents where to retrieve the user password credentials Only one of its members may be specified. */
export interface V1UserPasswordAccessCredentialSource {
  /** Secret means that the access credential is pulled from a kubernetes secret */
  secret?: V1AccessCredentialSecretSource;
}
