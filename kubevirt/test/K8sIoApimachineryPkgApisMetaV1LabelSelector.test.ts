import { K8sIoApimachineryPkgApisMetaV1LabelSelector } from '../models/K8sIoApimachineryPkgApisMetaV1LabelSelector';

export const testObject: K8sIoApimachineryPkgApisMetaV1LabelSelector = {
  matchExpressions: [
    {
      key: 'environment',
      operator: 'In',
      values: ['production', 'staging'],
    },
  ],
  matchLabels: { app: 'test-app', team: 'test-team' },
};
