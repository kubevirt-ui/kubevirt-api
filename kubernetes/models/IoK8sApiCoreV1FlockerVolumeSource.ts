export interface IoK8sApiCoreV1FlockerVolumeSource {
  /** datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  datasetName?: string;
  /** datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
  datasetUUID?: string;
}
