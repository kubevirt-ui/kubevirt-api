import { V1alpha1VirtualMachineBackupSpec } from '../models/V1alpha1VirtualMachineBackupSpec';

export const testObject: V1alpha1VirtualMachineBackupSpec = {
  forceFullBackup: false,
  mode: 'full',
  pvcName: 'backup-pvc',
  skipQuiesce: false,
  source: {
    kind: 'VirtualMachine',
    name: 'test-vm',
  },
  tokenSecretRef: 'backup-token-secret',
  ttlDuration: '24h',
};
