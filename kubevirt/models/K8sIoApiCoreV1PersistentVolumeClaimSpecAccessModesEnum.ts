export const K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum = {
  ReadOnlyMany: 'ReadOnlyMany',
  ReadWriteMany: 'ReadWriteMany',
  ReadWriteOnce: 'ReadWriteOnce',
  ReadWriteOncePod: 'ReadWriteOncePod',
} as const;

export type K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum =
  typeof K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum[keyof typeof K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum];
