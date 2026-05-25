export interface V1ConfigMapVolumeSource {
  /**
   * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @default ""
   */
  name?: string;
  /** Specify whether the ConfigMap or it's keys must be defined */
  optional?: boolean;
  /** The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart). */
  volumeLabel?: string;
}
