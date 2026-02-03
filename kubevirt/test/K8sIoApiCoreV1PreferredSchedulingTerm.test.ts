import { K8sIoApiCoreV1PreferredSchedulingTerm } from '../models/K8sIoApiCoreV1PreferredSchedulingTerm';
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1PreferredSchedulingTerm = {
  preference: {
    matchExpressions: [
      {
        key: 'test-key',
        operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.In,
        values: ['test-value'],
      },
    ],
  },
  weight: 100,
};
