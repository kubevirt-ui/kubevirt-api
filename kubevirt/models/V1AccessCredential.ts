import type { V1SSHPublicKeyAccessCredential } from './V1SSHPublicKeyAccessCredential';
import type { V1UserPasswordAccessCredential } from './V1UserPasswordAccessCredential';

export interface V1AccessCredential {
  /** SSHPublicKey represents the source and method of applying a ssh public key into a guest virtual machine. */
  sshPublicKey?: V1SSHPublicKeyAccessCredential;
  /** UserPassword represents the source and method for applying a guest user's password */
  userPassword?: V1UserPasswordAccessCredential;
}
