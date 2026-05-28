import { V1beta1VirtualMachinePoolSpec } from '../models/V1beta1VirtualMachinePoolSpec';

export const testObject: V1beta1VirtualMachinePoolSpec = {
  maxUnavailable: '25%',
  nameGeneration: {
    appendIndexToConfigMapRefs: true,
    appendIndexToSecretRefs: true,
  },
  paused: false,
  replicas: 3,
  scaleInStrategy: {
    proactive: {
      selectionPolicy: {
        sortPolicy: 'Random',
      },
    },
  },
  selector: {
    matchLabels: { app: 'test-vm-pool' },
  },
  virtualMachineTemplate: {
    metadata: {
      labels: { app: 'test-vm-pool' },
    },
    spec: {
      running: true,
      template: {
        spec: {
          domain: {
            devices: {},
          },
        },
      },
    },
  },
};
