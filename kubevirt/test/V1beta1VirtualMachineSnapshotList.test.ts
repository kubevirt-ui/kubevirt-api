import { V1beta1VirtualMachineSnapshotList } from '../models/V1beta1VirtualMachineSnapshotList';

export const testObject: V1beta1VirtualMachineSnapshotList = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineSnapshotList',
  items: [
    {
      spec: {
        source: {
          apiGroup: 'kubevirt.io',
          kind: 'VirtualMachine',
          name: 'my-vm',
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
