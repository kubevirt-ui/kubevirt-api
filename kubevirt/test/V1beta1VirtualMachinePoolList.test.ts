import { V1beta1VirtualMachinePoolList } from '../models/V1beta1VirtualMachinePoolList';

export const testObject: V1beta1VirtualMachinePoolList = {
  apiVersion: 'pool.kubevirt.io/v1beta1',
  items: [
    {
      spec: {
        replicas: 1,
        selector: {
          matchLabels: { 'kubevirt.io/vmpool': 'test-pool' },
        },
        virtualMachineTemplate: {
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
    },
  ],
  kind: 'VirtualMachinePoolList',
  metadata: {},
};
