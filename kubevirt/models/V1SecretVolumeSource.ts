/** SecretVolumeSource adapts a Secret into a volume. */
export interface V1SecretVolumeSource {
  /** Specify whether the Secret or it's keys must be defined */
  optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secretName?: string;
  /** The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart). */
  volumeLabel?: string;
}
