export const V1TolerationOperatorEnum = {
  Equal: 'Equal',
  Exists: 'Exists',
} as const;

export type V1TolerationOperatorEnum =
  typeof V1TolerationOperatorEnum[keyof typeof V1TolerationOperatorEnum];
