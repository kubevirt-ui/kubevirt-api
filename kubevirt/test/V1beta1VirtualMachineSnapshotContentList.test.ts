import { V1beta1VirtualMachineSnapshotContentList } from '../models/V1beta1VirtualMachineSnapshotContentList';

export const testObject: V1beta1VirtualMachineSnapshotContentList = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineSnapshotContentList',
  items: [
    {
      spec: {
        source: {
          virtualMachine: { metadata: { name: 'my-vm' } },
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
