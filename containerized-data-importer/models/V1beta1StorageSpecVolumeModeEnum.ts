export const V1beta1StorageSpecVolumeModeEnum = {
  Block: 'Block',
  Filesystem: 'Filesystem',
  FromStorageProfile: 'FromStorageProfile',
} as const;

export type V1beta1StorageSpecVolumeModeEnum =
  typeof V1beta1StorageSpecVolumeModeEnum[keyof typeof V1beta1StorageSpecVolumeModeEnum];
