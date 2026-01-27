import { V1beta1VirtualMachineSnapshot } from '../models/V1beta1VirtualMachineSnapshot';

export const testObject: V1beta1VirtualMachineSnapshot = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineSnapshot',
  metadata: {
    name: 'snapshot-test',
    namespace: 'default',
  },
  spec: {
    source: {
      apiGroup: 'kubevirt.io',
      kind: 'VirtualMachine',
      name: 'my-vm',
    },
  },
};
