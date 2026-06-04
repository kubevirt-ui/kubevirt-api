/** VolumeRestoreOverride specifies how a volume should be restored from a VirtualMachineSnapshot */
export interface V1beta1VolumeRestoreOverride {
  annotations?: Record<string, string>;
  labels?: Record<string, string>;
  restoreName?: string;
  volumeName?: string;
}
