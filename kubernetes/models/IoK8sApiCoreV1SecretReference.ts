export interface IoK8sApiCoreV1SecretReference {
  /** name is unique within a namespace to reference a secret resource. */
  name?: string;
  /** namespace defines the space within which the secret name must be unique. */
  namespace?: string;
}
