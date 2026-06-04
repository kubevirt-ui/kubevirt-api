export const V1PersistentVolumeClaimInfoVolumeModeEnum = {
  Block: 'Block',
  Filesystem: 'Filesystem',
  FromStorageProfile: 'FromStorageProfile',
} as const;

export type V1PersistentVolumeClaimInfoVolumeModeEnum = typeof V1PersistentVolumeClaimInfoVolumeModeEnum[keyof typeof V1PersistentVolumeClaimInfoVolumeModeEnum];
