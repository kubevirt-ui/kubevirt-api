import { K8sIoApiCoreV1PodAffinityTerm } from '../models/K8sIoApiCoreV1PodAffinityTerm';

export const testObject: K8sIoApiCoreV1PodAffinityTerm = {
  labelSelector: {
    matchLabels: { app: 'test-app' },
    matchExpressions: [
      {
        key: 'environment',
        operator: 'In',
        values: ['production'],
      },
    ],
  },
  matchLabelKeys: ['pod-template-hash'],
  mismatchLabelKeys: ['version'],
  namespaceSelector: {
    matchLabels: { team: 'test-team' },
  },
  namespaces: ['test-namespace'],
  topologyKey: 'kubernetes.io/hostname',
};
