export interface V1beta1VolumeRestoreOverride {
  annotations?: Record<string, string>;
  labels?: Record<string, string>;
  restoreName?: string;
  volumeName?: string;
}
