import { V1alpha1MigrationPolicySpec } from '../models/V1alpha1MigrationPolicySpec';

export const testObject: V1alpha1MigrationPolicySpec = {
  allowAutoConverge: true,
  allowPostCopy: false,
  allowWorkloadDisruption: true,
  bandwidthPerMigration: '64Mi',
  completionTimeoutPerGiB: 800,
  selectors: {
    namespaceSelector: { team: 'test-team' },
    virtualMachineInstanceSelector: { app: 'test-vm' },
  },
};
