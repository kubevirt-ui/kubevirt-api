import { V1beta1VirtualMachineRestore } from '../models/V1beta1VirtualMachineRestore';

export const testObject: V1beta1VirtualMachineRestore = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineRestore',
  metadata: {
    name: 'restore-test',
    namespace: 'default',
  },
  spec: {
    target: {
      apiGroup: 'kubevirt.io',
      kind: 'VirtualMachine',
      name: 'my-vm',
    },
    virtualMachineSnapshotName: 'my-vm-snapshot',
  },
};
