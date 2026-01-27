import { V1alpha1VirtualMachinePoolSpec } from '../models/V1alpha1VirtualMachinePoolSpec';

export const testObject: V1alpha1VirtualMachinePoolSpec = {
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
        basePolicy: 'Random',
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
