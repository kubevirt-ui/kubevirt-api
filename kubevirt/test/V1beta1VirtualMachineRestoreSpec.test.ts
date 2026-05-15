import { V1beta1VirtualMachineRestoreSpec } from '../models/V1beta1VirtualMachineRestoreSpec';

export const testObject: V1beta1VirtualMachineRestoreSpec = {
  patches: ['{"op": "replace", "path": "/metadata/name", "value": "new-vm"}'],
  target: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'my-vm',
  },
  targetReadinessPolicy: 'WaitForVM',
  virtualMachineSnapshotName: 'my-vm-snapshot',
  volumeRestorePolicy: 'AllVolumes',
};
