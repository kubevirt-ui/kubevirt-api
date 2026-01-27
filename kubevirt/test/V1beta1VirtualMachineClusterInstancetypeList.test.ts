import { V1beta1VirtualMachineClusterInstancetypeList } from '../models/V1beta1VirtualMachineClusterInstancetypeList';

export const testObject: V1beta1VirtualMachineClusterInstancetypeList = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineClusterInstancetypeList',
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
