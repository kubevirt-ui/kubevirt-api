/** ContainerPathVolumeSource represents a path from the virt-launcher container to be exposed to the VM via virtiofs. The path must correspond to an existing volumeMount in the virt-launcher pod's compute container. */
export interface V1ContainerPathVolumeSource {
  /**
   * Path is the absolute path within the virt-launcher container to expose to the VM. The path must correspond to an existing volumeMount in the compute container.
   * @default ""
   */
  path: string;
  /** ReadOnly controls whether the volume is exposed as read-only to the VM. Defaults to true. Write access is not currently supported. */
  readOnly?: boolean;
}
