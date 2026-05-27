import { V1alpha1VirtualMachineBackupStatus } from '../models/V1alpha1VirtualMachineBackupStatus';

export const testObject: V1alpha1VirtualMachineBackupStatus = {
  checkpointName: 'checkpoint-001',
  conditions: [
    {
      lastTransitionTime: '2025-01-16T12:00:00Z',
      message: 'Backup completed successfully',
      reason: 'BackupComplete',
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
