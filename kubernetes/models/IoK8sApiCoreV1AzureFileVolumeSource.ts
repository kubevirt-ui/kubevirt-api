export interface IoK8sApiCoreV1AzureFileVolumeSource {
  /** readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: boolean;
  /** secretName is the  name of secret that contains Azure Storage Account Name and Key */
  secretName: string;
  /** shareName is the azure share Name */
  shareName: string;
}
