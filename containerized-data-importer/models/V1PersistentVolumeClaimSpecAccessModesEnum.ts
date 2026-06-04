export const V1PersistentVolumeClaimSpecAccessModesEnum = {
  ReadOnlyMany: 'ReadOnlyMany',
  ReadWriteMany: 'ReadWriteMany',
  ReadWriteOnce: 'ReadWriteOnce',
  ReadWriteOncePod: 'ReadWriteOncePod',
} as const;

export type V1PersistentVolumeClaimSpecAccessModesEnum = typeof V1PersistentVolumeClaimSpecAccessModesEnum[keyof typeof V1PersistentVolumeClaimSpecAccessModesEnum];
