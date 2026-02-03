import { V1VirtualMachineMemoryDumpRequest } from '../models/V1VirtualMachineMemoryDumpRequest';

export const testObject: V1VirtualMachineMemoryDumpRequest = {
  claimName: 'memory-dump-pvc',
  endTimestamp: '2025-01-15T12:30:00Z',
  fileName: 'memory-dump.raw',
  message: 'Memory dump completed successfully',
  phase: 'Completed',
  remove: false,
  startTimestamp: '2025-01-15T12:00:00Z',
};
