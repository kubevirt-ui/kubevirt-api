import { K8sIoApiCoreV1NodeSelectorTerm } from '../models/K8sIoApiCoreV1NodeSelectorTerm';

export const testObject: K8sIoApiCoreV1NodeSelectorTerm = {
  matchExpressions: [
    {
      key: 'test-key',
      operator: 'In',
      values: ['test-value'],
    },
  ],
  matchFields: [
    {
      key: 'test-field-key',
      operator: 'Exists',
    },
  ],
};
