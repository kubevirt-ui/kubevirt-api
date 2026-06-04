export const V1NodeSelectorRequirementOperatorEnum = {
  DoesNotExist: 'DoesNotExist',
  Exists: 'Exists',
  Gt: 'Gt',
  In: 'In',
  Lt: 'Lt',
  NotIn: 'NotIn',
} as const;

export type V1NodeSelectorRequirementOperatorEnum = typeof V1NodeSelectorRequirementOperatorEnum[keyof typeof V1NodeSelectorRequirementOperatorEnum];
