import { K8sIoApiCoreV1NodeSelector } from '../models/K8sIoApiCoreV1NodeSelector';

export const testObject: K8sIoApiCoreV1NodeSelector = {
  nodeSelectorTerms: [
    {
      matchExpressions: [
        {
          key: 'test-key',
          operator: 'In',
          values: ['test-value'],
        },
      ],
    },
  ],
};
