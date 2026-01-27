import { V1alpha1VirtualMachinePool } from '../models/V1alpha1VirtualMachinePool';

export const testObject: V1alpha1VirtualMachinePool = {
  apiVersion: 'pool.kubevirt.io/v1alpha1',
  kind: 'VirtualMachinePool',
  metadata: {
    name: 'test-vm-pool',
    namespace: 'test-namespace',
  },
  spec: {
    replicas: 3,
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
  },
  status: {
    replicas: 3,
    readyReplicas: 3,
  },
};
