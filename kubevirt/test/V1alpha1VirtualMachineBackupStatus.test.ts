import { V1alpha1VirtualMachineBackupStatus } from '../models/V1alpha1VirtualMachineBackupStatus';

export const testObject: V1alpha1VirtualMachineBackupStatus = {
  checkpointName: 'checkpoint-001',
  conditions: [
    {
      message: 'Backup is ready',
      reason: 'Ready',
      status: 'True',
      type: 'Ready',
    },
  ],
  endpointCert: 'base64-encoded-cert',
  includedVolumes: [
    {
      diskTarget: 'vda',
      volumeName: 'rootdisk',
    },
  ],
  type: 'full',
};
