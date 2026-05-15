import { V1alpha1MigrationPolicy } from '../models/V1alpha1MigrationPolicy';

export const testObject: V1alpha1MigrationPolicy = {
  apiVersion: 'migrations.kubevirt.io/v1alpha1',
  kind: 'MigrationPolicy',
  metadata: {
    name: 'test-migration-policy',
    namespace: 'test-namespace',
  },
  spec: {
    allowAutoConverge: true,
    completionTimeoutPerGiB: 800,
    selectors: {
      namespaceSelector: { team: 'test-team' },
    },
  },
  status: {},
};
