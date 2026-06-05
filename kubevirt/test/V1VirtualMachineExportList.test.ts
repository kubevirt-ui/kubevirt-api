import { V1VirtualMachineExportList } from '../models/V1VirtualMachineExportList';

export const testObject: V1VirtualMachineExportList = {
  apiVersion: 'export.kubevirt.io/v1beta1',
  kind: 'VirtualMachineExportList',
  items: [
    {
      spec: {
        source: {
          apiGroup: 'kubevirt.io',
          kind: 'VirtualMachine',
          name: 'my-vm',
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
