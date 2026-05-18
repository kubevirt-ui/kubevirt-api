import { V1beta1VirtualMachineExport } from '../models/V1beta1VirtualMachineExport';

export const testObject: V1beta1VirtualMachineExport = {
  apiVersion: 'export.kubevirt.io/v1beta1',
  kind: 'VirtualMachineExport',
  metadata: {
    name: 'export-test',
    namespace: 'default',
  },
  spec: {
    source: {
      apiGroup: 'kubevirt.io',
      kind: 'VirtualMachine',
      name: 'my-vm',
    },
  },
};
