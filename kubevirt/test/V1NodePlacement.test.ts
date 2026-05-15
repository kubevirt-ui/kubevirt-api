import { V1NodePlacement } from '../models/V1NodePlacement';
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';
import {
  K8sIoApiCoreV1TolerationEffectEnum,
  K8sIoApiCoreV1TolerationOperatorEnum,
} from '../models/K8sIoApiCoreV1Toleration';

export const testObject: V1NodePlacement = {
  affinity: {
    nodeAffinity: {
      requiredDuringSchedulingIgnoredDuringExecution: {
        nodeSelectorTerms: [
          {
            matchExpressions: [
              {
                key: 'kubernetes.io/arch',
                operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.In,
                values: ['amd64'],
              },
            ],
          },
        ],
      },
    },
  },
  nodeSelector: {
    'node-type': 'worker',
  },
  tolerations: [
    {
      key: 'dedicated',
      operator: K8sIoApiCoreV1TolerationOperatorEnum.Equal,
      value: 'kubevirt',
      effect: K8sIoApiCoreV1TolerationEffectEnum.NoSchedule,
    },
  ],
};
