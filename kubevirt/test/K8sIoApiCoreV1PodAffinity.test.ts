import { K8sIoApiCoreV1PodAffinity } from '../models/K8sIoApiCoreV1PodAffinity';

export const testObject: K8sIoApiCoreV1PodAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution: [
    {
      podAffinityTerm: {
        topologyKey: 'kubernetes.io/hostname',
        labelSelector: {
          matchLabels: { app: 'test-app' },
        },
      },
      weight: 50,
    },
  ],
  requiredDuringSchedulingIgnoredDuringExecution: [
    {
      topologyKey: 'topology.kubernetes.io/zone',
      labelSelector: {
        matchLabels: { service: 'test-service' },
      },
    },
  ],
};
