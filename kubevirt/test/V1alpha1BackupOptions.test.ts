import { V1alpha1BackupOptions } from '../models/V1alpha1BackupOptions';

export const testObject: V1alpha1BackupOptions = {
  backupCert: 'base64-encoded-cert',
  backupKey: 'base64-encoded-key',
  backupName: 'vm-backup-001',
  backupStartTime: '2024-01-01T00:00:00Z',
  caCert: 'base64-encoded-ca',
  cmd: 'backup',
  exportServerAddr: '10.0.0.1:443',
  exportServerName: 'export-server',
  incremental: 'checkpoint-000',
  mode: 'full',
  skipQuiesce: false,
  targetPath: '/backups/vm-001',
};
