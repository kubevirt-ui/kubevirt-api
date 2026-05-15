import {
  K8sIoApiCoreV1Toleration,
  K8sIoApiCoreV1TolerationEffectEnum,
  K8sIoApiCoreV1TolerationOperatorEnum,
} from '../models/K8sIoApiCoreV1Toleration';

export const testObject: K8sIoApiCoreV1Toleration = {
  effect: K8sIoApiCoreV1TolerationEffectEnum.NoSchedule,
  key: 'test-key',
  operator: K8sIoApiCoreV1TolerationOperatorEnum.Equal,
  tolerationSeconds: 3600,
  value: 'test-value',
};
