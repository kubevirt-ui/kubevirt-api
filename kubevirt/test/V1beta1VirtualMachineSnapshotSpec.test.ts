import { V1beta1VirtualMachineSnapshotSpec } from '../models/V1beta1VirtualMachineSnapshotSpec';

export const testObject: V1beta1VirtualMachineSnapshotSpec = {
  deletionPolicy: 'Delete',
  failureDeadline: '5m',
  source: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'my-vm',
  },
};
