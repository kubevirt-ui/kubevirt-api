import { V1VirtualMachineInstanceMigrationSpec } from '../models/V1VirtualMachineInstanceMigrationSpec';

export const testObject: V1VirtualMachineInstanceMigrationSpec = {
  vmiName: 'my-vmi',
  addedNodeSelector: { 'topology.kubernetes.io/zone': 'us-east-1a' },
};
