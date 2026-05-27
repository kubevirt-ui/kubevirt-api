import { V1VirtualMachineExportStatus } from '../models/V1VirtualMachineExportStatus';

export const testObject: V1VirtualMachineExportStatus = {
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  links: {
    external: {
      cert: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0t',
    },
  },
  phase: 'Ready',
  serviceName: 'export-service',
  tokenSecretRef: 'export-token',
  ttlExpirationTime: '2025-01-16T12:00:00Z',
  virtualMachineName: 'my-vm',
};
