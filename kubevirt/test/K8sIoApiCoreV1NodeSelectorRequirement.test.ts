import { K8sIoApiCoreV1NodeSelectorRequirement } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';

export const testObject: K8sIoApiCoreV1NodeSelectorRequirement = {
  key: 'test-key',
  operator: 'In',
  values: ['test-value-1', 'test-value-2'],
};
