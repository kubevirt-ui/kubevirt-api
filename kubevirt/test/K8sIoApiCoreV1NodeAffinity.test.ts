import { K8sIoApiCoreV1NodeAffinity } from '../models/K8sIoApiCoreV1NodeAffinity';
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1NodeAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution: [
    {
      preference: {
        matchExpressions: [
          {
            key: 'test-key',
            operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.In,
            values: ['test-value'],
          },
        ],
        matchFields: [
          {
            key: 'test-field-key',
            operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.Exists,
          },
        ],
      },
      weight: 100,
    },
  ],
  requiredDuringSchedulingIgnoredDuringExecution: {
    nodeSelectorTerms: [
      {
        matchExpressions: [
          {
            key: 'test-required-key',
            operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.NotIn,
            values: ['test-excluded-value'],
          },
        ],
      },
    ],
  },
};
