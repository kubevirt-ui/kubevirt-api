export interface IoK8sApiCoreV1ConfigMapEnvSource {
  /** Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: string;
  /** Specify whether the ConfigMap must be defined */
  optional?: boolean;
}
