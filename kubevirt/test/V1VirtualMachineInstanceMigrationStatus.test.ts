import { V1VirtualMachineInstanceMigrationStatus } from '../models/V1VirtualMachineInstanceMigrationStatus';

export const testObject: V1VirtualMachineInstanceMigrationStatus = {
  phase: 'Succeeded',
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
};
