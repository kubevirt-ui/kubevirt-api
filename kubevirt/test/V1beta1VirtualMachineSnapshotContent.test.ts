import { V1beta1VirtualMachineSnapshotContent } from '../models/V1beta1VirtualMachineSnapshotContent';

export const testObject: V1beta1VirtualMachineSnapshotContent = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineSnapshotContent',
  metadata: {
    name: 'snapshot-content-test',
    namespace: 'default',
  },
  spec: {
    source: {
      virtualMachine: {
        metadata: { name: 'my-vm' },
      },
    },
    virtualMachineSnapshotName: 'my-vm-snapshot',
  },
};
