export interface V1beta1DataVolumeSourceHTTP {
  /** CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate */
  certConfigMap?: string;
  /** Checksum is the expected checksum of the file. Format: "algorithm:hash", e.g., "sha256:1234abcd..." or "md5:5678efgh..." Supported algorithms: md5, sha1, sha256, sha512 If specified, the importer will verify the downloaded content matches this checksum */
  checksum?: string;
  /** ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests */
  extraHeaders?: string[];
  /** SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information */
  secretExtraHeaders?: string[];
  /** SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded */
  secretRef?: string;
  /**
   * URL is the URL of the http(s) endpoint
   * @default ""
   */
  url: string;
}
