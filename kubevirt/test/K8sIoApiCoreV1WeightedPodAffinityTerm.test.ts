import { K8sIoApiCoreV1WeightedPodAffinityTerm } from '../models/K8sIoApiCoreV1WeightedPodAffinityTerm';

export const testObject: K8sIoApiCoreV1WeightedPodAffinityTerm = {
  podAffinityTerm: {
    topologyKey: 'kubernetes.io/hostname',
    labelSelector: {
      matchLabels: { app: 'test-app' },
    },
  },
  weight: 100,
};
