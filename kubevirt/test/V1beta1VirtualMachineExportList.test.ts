import { V1beta1VirtualMachineExportList } from '../models/V1beta1VirtualMachineExportList';

export const testObject: V1beta1VirtualMachineExportList = {
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
