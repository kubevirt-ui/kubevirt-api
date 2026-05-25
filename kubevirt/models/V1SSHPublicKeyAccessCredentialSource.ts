import type { V1AccessCredentialSecretSource } from './V1AccessCredentialSecretSource';

export interface V1SSHPublicKeyAccessCredentialSource {
  /** Secret means that the access credential is pulled from a kubernetes secret */
  secret?: V1AccessCredentialSecretSource;
}
