import { K8sIoApiCoreV1NodeSelector } from '../models/K8sIoApiCoreV1NodeSelector';
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1NodeSelector = {
  nodeSelectorTerms: [
    {
      matchExpressions: [
        {
          key: 'test-key',
          operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.In,
          values: ['test-value'],
        },
      ],
    },
  ],
};
