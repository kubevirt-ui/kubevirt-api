import { V1VirtualMachineInstanceReplicaSetSpec } from '../models/V1VirtualMachineInstanceReplicaSetSpec';

export const testObject: V1VirtualMachineInstanceReplicaSetSpec = {
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
  paused: false,
};
