export const V1beta1CDISpecImagePullPolicyEnum = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never',
} as const;

export type V1beta1CDISpecImagePullPolicyEnum =
  typeof V1beta1CDISpecImagePullPolicyEnum[keyof typeof V1beta1CDISpecImagePullPolicyEnum];
