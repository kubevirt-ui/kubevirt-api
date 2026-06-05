import type { V1AccessCredentialSecretSource } from './V1AccessCredentialSecretSource';

/** SSHPublicKeyAccessCredentialSource represents where to retrieve the ssh key credentials Only one of its members may be specified. */
export interface V1SSHPublicKeyAccessCredentialSource {
  /** Secret means that the access credential is pulled from a kubernetes secret */
  secret?: V1AccessCredentialSecretSource;
}
