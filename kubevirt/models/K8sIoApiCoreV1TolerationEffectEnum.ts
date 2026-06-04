export const K8sIoApiCoreV1TolerationEffectEnum = {
  NoExecute: 'NoExecute',
  NoSchedule: 'NoSchedule',
  PreferNoSchedule: 'PreferNoSchedule',
} as const;

export type K8sIoApiCoreV1TolerationEffectEnum = typeof K8sIoApiCoreV1TolerationEffectEnum[keyof typeof K8sIoApiCoreV1TolerationEffectEnum];
