export const V1TolerationEffectEnum = {
  NoExecute: 'NoExecute',
  NoSchedule: 'NoSchedule',
  PreferNoSchedule: 'PreferNoSchedule',
} as const;

export type V1TolerationEffectEnum =
  typeof V1TolerationEffectEnum[keyof typeof V1TolerationEffectEnum];
