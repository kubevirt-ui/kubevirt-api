import {
  K8sIoApiCoreV1NodeSelectorRequirement,
  K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum,
} from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1NodeSelectorRequirement = {
  key: 'test-key',
  operator: K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.In,
  values: ['test-value-1', 'test-value-2'],
};
