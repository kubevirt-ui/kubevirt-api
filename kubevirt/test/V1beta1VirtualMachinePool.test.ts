import { V1beta1VirtualMachinePool } from '../models/V1beta1VirtualMachinePool';

export const testObject: V1beta1VirtualMachinePool = {
  apiVersion: 'pool.kubevirt.io/v1beta1',
  kind: 'VirtualMachinePool',
  metadata: {
    name: 'test-pool',
    namespace: 'default',
  },
  spec: {
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
  },
  status: {
    replicas: 3,
    readyReplicas: 3,
  },
};
