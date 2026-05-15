import { V1beta1VirtualMachineInstancetype } from '../models/V1beta1VirtualMachineInstancetype';

export const testObject: V1beta1VirtualMachineInstancetype = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineInstancetype',
  metadata: {
    name: 'u1.medium',
    namespace: 'default',
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
