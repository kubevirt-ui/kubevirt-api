export const K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum = {
  Block: 'Block',
  Filesystem: 'Filesystem',
  FromStorageProfile: 'FromStorageProfile',
} as const;

export type K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum =
  typeof K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum[keyof typeof K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum];
