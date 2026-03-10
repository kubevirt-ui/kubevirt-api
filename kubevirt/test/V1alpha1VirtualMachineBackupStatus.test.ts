import { V1alpha1VirtualMachineBackupStatus } from '../models/V1alpha1VirtualMachineBackupStatus';

export const testObject: V1alpha1VirtualMachineBackupStatus = {
  checkpointName: 'checkpoint-001',
  conditions: [
    {
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
