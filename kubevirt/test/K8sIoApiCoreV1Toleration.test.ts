import { K8sIoApiCoreV1Toleration } from '../models/K8sIoApiCoreV1Toleration';

export const testObject: K8sIoApiCoreV1Toleration = {
  effect: 'NoSchedule',
  key: 'test-key',
  operator: 'Equal',
  tolerationSeconds: 3600,
  value: 'test-value',
};
