export const V1KernelBootContainerImagePullPolicyEnum = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never',
} as const;

export type V1KernelBootContainerImagePullPolicyEnum =
  typeof V1KernelBootContainerImagePullPolicyEnum[keyof typeof V1KernelBootContainerImagePullPolicyEnum];
