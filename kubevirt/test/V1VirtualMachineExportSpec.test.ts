import { V1VirtualMachineExportSpec } from '../models/V1VirtualMachineExportSpec';

export const testObject: V1VirtualMachineExportSpec = {
  source: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'my-vm',
  },
  tokenSecretRef: 'export-token-secret',
  ttlDuration: '1h',
};
