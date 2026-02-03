import { V1VirtualMachineInstanceReplicaSetList } from '../models/V1VirtualMachineInstanceReplicaSetList';

export const testObject: V1VirtualMachineInstanceReplicaSetList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceReplicaSetList',
  items: [
    {
      spec: {
        selector: {
          matchLabels: { app: 'my-vmi' },
        },
        template: {
          spec: {
            domain: {
              devices: {},
            },
          },
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
