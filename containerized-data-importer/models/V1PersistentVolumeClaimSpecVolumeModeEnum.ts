export const V1PersistentVolumeClaimSpecVolumeModeEnum = {
  Block: 'Block',
  Filesystem: 'Filesystem',
  FromStorageProfile: 'FromStorageProfile',
} as const;

export type V1PersistentVolumeClaimSpecVolumeModeEnum = typeof V1PersistentVolumeClaimSpecVolumeModeEnum[keyof typeof V1PersistentVolumeClaimSpecVolumeModeEnum];
