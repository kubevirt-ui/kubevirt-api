/** CustomTLSProfile is a user-defined TLS security profile. Be extremely careful using a custom TLS profile as invalid configurations can be catastrophic. */
export interface V1beta1CustomTLSProfile {
  /**
   * ciphers is used to specify the cipher algorithms that are negotiated during the TLS handshake.  Operators may remove entries their operands do not support.  For example, to use DES-CBC3-SHA  (yaml):
   *
   *   ciphers:
   *     - DES-CBC3-SHA
   */
  ciphers: string[];
  /**
   * minTLSVersion is used to specify the minimal version of the TLS protocol that is negotiated during the TLS handshake. For example, to use TLS versions 1.1, 1.2 and 1.3 (yaml):
   *
   *   minTLSVersion: VersionTLS11
   *
   * NOTE: currently the highest minTLSVersion allowed is VersionTLS12
   * @default ""
   */
  minTLSVersion: string;
}
