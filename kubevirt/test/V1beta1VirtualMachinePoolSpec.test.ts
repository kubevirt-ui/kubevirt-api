import { V1beta1VirtualMachinePoolSpec } from '../models/V1beta1VirtualMachinePoolSpec';

export const testObject: V1beta1VirtualMachinePoolSpec = {
  autohealing: {
    minFailingToStartDuration: '5m',
    startUpFailureThreshold: 3,
  },
  maxUnavailable: '25%',
  nameGeneration: {
    appendIndexToConfigMapRefs: true,
    appendIndexToSecretRefs: true,
  },
  paused: false,
  replicas: 3,
  selector: {
    matchLabels: { 'kubevirt.io/vmpool': 'test-pool' },
  },
  virtualMachineTemplate: {
    metadata: {
      labels: { 'kubevirt.io/vmpool': 'test-pool' },
    },
    spec: {
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
