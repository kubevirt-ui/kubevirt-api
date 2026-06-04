import { K8sIoApiCoreV1PreferredSchedulingTerm } from '../models/K8sIoApiCoreV1PreferredSchedulingTerm';

export const testObject: K8sIoApiCoreV1PreferredSchedulingTerm = {
  preference: {
    matchExpressions: [
      {
        key: 'test-key',
        operator: 'In',
        values: ['test-value'],
      },
    ],
  },
  weight: 100,
};
