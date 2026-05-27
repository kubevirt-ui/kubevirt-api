import { V1VirtualMachineExportBackup } from '../models/V1VirtualMachineExportBackup';

export const testObject: V1VirtualMachineExportBackup = {
  endpoints: [
    {
      endpoint: 'data',
      url: 'https://export.example.com/backups/vm-001/data',
    },
  ],
  name: 'vm-backup-export',
};
