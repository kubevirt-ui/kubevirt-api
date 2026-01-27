import { V1alpha1VirtualMachinePoolList } from '../models/V1alpha1VirtualMachinePoolList';

export const testObject: V1alpha1VirtualMachinePoolList = {
  apiVersion: 'pool.kubevirt.io/v1alpha1',
  items: [
    {
      spec: {
        replicas: 3,
        selector: {
          matchLabels: { app: 'test-vm-pool' },
        },
        virtualMachineTemplate: {
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
    },
  ],
  kind: 'VirtualMachinePoolList',
  metadata: {
    resourceVersion: '12345',
  },
};
