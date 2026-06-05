/** Describe a container image */
export interface IoK8sApiCoreV1ContainerImage {
  /** Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"] */
  names?: string[];
  /**
   * The size of the image in bytes.
   * @format int64
   */
  sizeBytes?: number;
}
