import { V1VirtualMachineInstanceMigrationTargetState } from '../models/V1VirtualMachineInstanceMigrationTargetState';

export const testObject: V1VirtualMachineInstanceMigrationTargetState = {
  domainName: 'default_my-vmi',
  domainNamespace: 'default',
  node: 'node2',
  nodeAddress: '192.168.1.2',
  pod: 'virt-launcher-my-vmi-67890',
  domainDetected: true,
};
