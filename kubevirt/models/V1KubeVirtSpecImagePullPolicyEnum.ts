export const V1KubeVirtSpecImagePullPolicyEnum = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never',
} as const;

export type V1KubeVirtSpecImagePullPolicyEnum = typeof V1KubeVirtSpecImagePullPolicyEnum[keyof typeof V1KubeVirtSpecImagePullPolicyEnum];
