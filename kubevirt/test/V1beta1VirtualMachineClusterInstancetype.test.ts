import { V1beta1VirtualMachineClusterInstancetype } from '../models/V1beta1VirtualMachineClusterInstancetype';

export const testObject: V1beta1VirtualMachineClusterInstancetype = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineClusterInstancetype',
  metadata: {
    name: 'u1.medium',
  },
  spec: {
    cpu: {
      guest: 2,
    },
    memory: {
      guest: '4Gi',
    },
  },
};
