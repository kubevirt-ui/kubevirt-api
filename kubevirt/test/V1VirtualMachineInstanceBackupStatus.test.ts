import { V1VirtualMachineInstanceBackupStatus } from '../models/V1VirtualMachineInstanceBackupStatus';

export const testObject: V1VirtualMachineInstanceBackupStatus = {
  backupMsg: 'Backup completed successfully',
  backupName: 'vm-backup-001',
  checkpointName: 'checkpoint-001',
  completed: true,
  endTimestamp: '2024-01-01T00:10:00Z',
  failed: false,
  startTimestamp: '2024-01-01T00:00:00Z',
  volumes: [
    {
      diskTarget: 'vda',
      volumeName: 'rootdisk',
      dataEndpoint: 'https://export.example.com/data',
      mapEndpoint: 'https://export.example.com/map',
    },
  ],
};
