import type { IoK8sApiCoreV1KeyToPath } from './IoK8sApiCoreV1KeyToPath';

export interface IoK8sApiCoreV1ConfigMapProjection {
  /** items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: IoK8sApiCoreV1KeyToPath[];
  /** Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: string;
  /** optional specify whether the ConfigMap or its keys must be defined */
  optional?: boolean;
}
