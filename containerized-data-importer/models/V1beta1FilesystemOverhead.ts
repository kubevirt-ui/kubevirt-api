/** FilesystemOverhead defines the reserved size for PVCs with VolumeMode: Filesystem */
export interface V1beta1FilesystemOverhead {
  /** Global is how much space of a Filesystem volume should be reserved for overhead. This value is used unless overridden by a more specific value (per storageClass) */
  global?: string;
  /** StorageClass specifies how much space of a Filesystem volume should be reserved for safety. The keys are the storageClass and the values are the overhead. This value overrides the global value */
  storageClass?: Record<string, string>;
}
