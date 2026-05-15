import { V1VirtualMachineStartFailure } from '../models/V1VirtualMachineStartFailure';

export const testObject: V1VirtualMachineStartFailure = {
  consecutiveFailCount: 3,
  lastFailedVMIUID: 'abcd1234-5678-90ef-ghij-klmnopqrstuv',
  retryAfterTimestamp: '2025-01-15T12:00:00Z',
};
