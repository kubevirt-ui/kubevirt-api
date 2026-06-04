export const K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum = {
  DoesNotExist: 'DoesNotExist',
  Exists: 'Exists',
  Gt: 'Gt',
  In: 'In',
  Lt: 'Lt',
  NotIn: 'NotIn',
} as const;

export type K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum =
  typeof K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum[keyof typeof K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum];
