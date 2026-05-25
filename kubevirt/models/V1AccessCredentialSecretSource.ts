export interface V1AccessCredentialSecretSource {
  /**
   * SecretName represents the name of the secret in the VMI's namespace
   * @default ""
   */
  secretName: string;
}
