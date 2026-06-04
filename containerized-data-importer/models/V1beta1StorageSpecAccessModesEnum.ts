export const V1beta1StorageSpecAccessModesEnum = {
  ReadOnlyMany: 'ReadOnlyMany',
  ReadWriteMany: 'ReadWriteMany',
  ReadWriteOnce: 'ReadWriteOnce',
  ReadWriteOncePod: 'ReadWriteOncePod',
} as const;

export type V1beta1StorageSpecAccessModesEnum =
  typeof V1beta1StorageSpecAccessModesEnum[keyof typeof V1beta1StorageSpecAccessModesEnum];
