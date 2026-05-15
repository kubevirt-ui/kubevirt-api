import { K8sIoApiCoreV1PodAntiAffinity } from '../models/K8sIoApiCoreV1PodAntiAffinity';

export const testObject: K8sIoApiCoreV1PodAntiAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution: [
    {
      podAffinityTerm: {
        topologyKey: 'kubernetes.io/hostname',
        labelSelector: {
          matchLabels: { app: 'test-app' },
        },
      },
      weight: 75,
    },
  ],
  requiredDuringSchedulingIgnoredDuringExecution: [
    {
      topologyKey: 'topology.kubernetes.io/zone',
      labelSelector: {
        matchLabels: { app: 'test-app' },
      },
    },
  ],
};
