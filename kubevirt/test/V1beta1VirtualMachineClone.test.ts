import { V1beta1VirtualMachineClone } from '../models/V1beta1VirtualMachineClone';

export const testObject: V1beta1VirtualMachineClone = {
  apiVersion: 'clone.kubevirt.io/v1beta1',
  kind: 'VirtualMachineClone',
  metadata: {
    name: 'clone-test',
    namespace: 'default',
  },
  spec: {
    source: {
      apiGroup: 'kubevirt.io',
      kind: 'VirtualMachine',
      name: 'source-vm',
    },
  },
};
