import { K8sIoApiCoreV1NodeAffinity } from '../models/K8sIoApiCoreV1NodeAffinity';


export const testObject: K8sIoApiCoreV1NodeAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution: [
    {
      preference: {
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
            operator: 'NotIn',
            values: ['test-excluded-value'],
          },
        ],
      },
    ],
  },
};
