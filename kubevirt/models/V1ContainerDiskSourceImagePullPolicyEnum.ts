export const V1ContainerDiskSourceImagePullPolicyEnum = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never',
} as const;

export type V1ContainerDiskSourceImagePullPolicyEnum = typeof V1ContainerDiskSourceImagePullPolicyEnum[keyof typeof V1ContainerDiskSourceImagePullPolicyEnum];
