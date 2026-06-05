import { V1VirtualMachineInstanceReplicaSet } from '../models/V1VirtualMachineInstanceReplicaSet';

export const testObject: V1VirtualMachineInstanceReplicaSet = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceReplicaSet',
  metadata: {
    name: 'my-rs',
    namespace: 'default',
  },
  spec: {
    replicas: 3,
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
};
