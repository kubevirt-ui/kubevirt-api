export const V1KubeVirtConfigurationImagePullPolicyEnum = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never',
} as const;

export type V1KubeVirtConfigurationImagePullPolicyEnum =
  typeof V1KubeVirtConfigurationImagePullPolicyEnum[keyof typeof V1KubeVirtConfigurationImagePullPolicyEnum];
