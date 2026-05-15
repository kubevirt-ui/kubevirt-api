import { V1beta1VirtualMachineCloneSpec } from '../models/V1beta1VirtualMachineCloneSpec';

export const testObject: V1beta1VirtualMachineCloneSpec = {
  annotationFilters: ['!kubevirt.io/*'],
  labelFilters: ['!app.kubernetes.io/name'],
  newMacAddresses: { default: '52:54:00:12:34:56' },
  newSMBiosSerial: 'new-serial-123',
  source: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'source-vm',
  },
  target: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'target-vm',
  },
};
