export const V1PersistentVolumeClaimInfoAccessModesEnum = {
  ReadOnlyMany: 'ReadOnlyMany',
  ReadWriteMany: 'ReadWriteMany',
  ReadWriteOnce: 'ReadWriteOnce',
  ReadWriteOncePod: 'ReadWriteOncePod',
} as const;

export type V1PersistentVolumeClaimInfoAccessModesEnum =
  typeof V1PersistentVolumeClaimInfoAccessModesEnum[keyof typeof V1PersistentVolumeClaimInfoAccessModesEnum];
