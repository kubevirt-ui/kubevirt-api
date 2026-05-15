import { V1VirtualMachineInstanceMigrationList } from '../models/V1VirtualMachineInstanceMigrationList';

export const testObject: V1VirtualMachineInstanceMigrationList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceMigrationList',
  items: [
    {
      spec: {
        vmiName: 'my-vmi',
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
