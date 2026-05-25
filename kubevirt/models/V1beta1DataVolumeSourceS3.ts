export interface V1beta1DataVolumeSourceS3 {
  /** CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate */
  certConfigMap?: string;
  /** SecretRef provides the secret reference needed to access the S3 source */
  secretRef?: string;
  /**
   * URL is the url of the S3 source
   * @default ""
   */
  url: string;
}
