import { K8sIoApiCoreV1NodeSelectorTerm } from '../models/K8sIoApiCoreV1NodeSelectorTerm';
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1NodeSelectorTerm = {
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
};
