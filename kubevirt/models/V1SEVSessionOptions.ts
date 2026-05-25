export interface V1SEVSessionOptions {
  /** Base64 encoded guest owner's Diffie-Hellman key. */
  dhCert?: string;
  /** Base64 encoded session blob. */
  session?: string;
}
