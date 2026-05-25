import { V1NodePlacement } from '../models/V1NodePlacement';



export const testObject: V1NodePlacement = {
  affinity: {
    nodeAffinity: {
      requiredDuringSchedulingIgnoredDuringExecution: {
        nodeSelectorTerms: [
          {
            matchExpressions: [
              {
                key: 'kubernetes.io/arch',
                operator: 'In',
                values: ['amd64'],
              },
            ],
          },
        ],
      },
    },
  },
  nodeSelector: {
    'node-type': 'worker',
  },
  tolerations: [
    {
      key: 'dedicated',
      operator: 'Equal',
      value: 'kubevirt',
      effect: 'NoSchedule',
    },
  ],
};
