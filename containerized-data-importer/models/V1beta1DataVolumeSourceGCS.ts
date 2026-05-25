export interface V1beta1DataVolumeSourceGCS {
  /** SecretRef provides the secret reference needed to access the GCS source */
  secretRef?: string;
  /**
   * URL is the url of the GCS source
   * @default ""
   */
  url: string;
}
