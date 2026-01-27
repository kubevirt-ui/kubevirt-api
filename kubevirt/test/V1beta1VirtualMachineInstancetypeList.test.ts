import { V1beta1VirtualMachineInstancetypeList } from '../models/V1beta1VirtualMachineInstancetypeList';

export const testObject: V1beta1VirtualMachineInstancetypeList = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineInstancetypeList',
  items: [
    {
      spec: {
        cpu: { guest: 2 },
        memory: { guest: '4Gi' },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
