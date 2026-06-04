/** DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source */
export interface V1beta1DataVolumeSourceImageIO {
  /** CertConfigMap provides a reference to the CA cert */
  certConfigMap?: string;
  /**
   * DiskID provides id of a disk to be imported
   * @default ""
   */
  diskId: string;
  /** InsecureSkipVerify is a flag to skip certificate verification */
  insecureSkipVerify?: boolean;
  /** SecretRef provides the secret reference needed to access the ovirt-engine */
  secretRef?: string;
  /**
   * URL is the URL of the ovirt-engine
   * @default ""
   */
  url: string;
}
