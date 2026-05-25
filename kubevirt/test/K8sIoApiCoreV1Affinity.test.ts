import { K8sIoApiCoreV1Affinity } from '../models/K8sIoApiCoreV1Affinity';


export const testObject: K8sIoApiCoreV1Affinity = {
  nodeAffinity: {
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
  },
  podAffinity: {
    preferredDuringSchedulingIgnoredDuringExecution: [
      {
        podAffinityTerm: {
          topologyKey: 'kubernetes.io/hostname',
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
  },
  podAntiAffinity: {
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
  },
};
