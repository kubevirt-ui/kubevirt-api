import { V1beta1VirtualMachineExportSpec } from '../models/V1beta1VirtualMachineExportSpec';

export const testObject: V1beta1VirtualMachineExportSpec = {
  source: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'my-vm',
  },
  tokenSecretRef: 'export-token-secret',
  ttlDuration: '1h',
};
