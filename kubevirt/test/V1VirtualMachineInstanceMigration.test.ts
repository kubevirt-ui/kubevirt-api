import { V1VirtualMachineInstanceMigration } from '../models/V1VirtualMachineInstanceMigration';

export const testObject: V1VirtualMachineInstanceMigration = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceMigration',
  metadata: {
    name: 'my-migration',
    namespace: 'default',
  },
  spec: {
    vmiName: 'my-vmi',
  },
};
