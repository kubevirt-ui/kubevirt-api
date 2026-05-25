export interface V1SEVSecretOptions {
  /** Base64 encoded header needed to decrypt the secret. */
  header?: string;
  /** Base64 encoded encrypted launch secret. */
  secret?: string;
}
