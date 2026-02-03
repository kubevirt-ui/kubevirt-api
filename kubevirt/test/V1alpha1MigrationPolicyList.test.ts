import { V1alpha1MigrationPolicyList } from '../models/V1alpha1MigrationPolicyList';

export const testObject: V1alpha1MigrationPolicyList = {
  apiVersion: 'migrations.kubevirt.io/v1alpha1',
  items: [
    {
      apiVersion: 'migrations.kubevirt.io/v1alpha1',
      kind: 'MigrationPolicy',
      spec: {
        selectors: {
          namespaceSelector: { team: 'test-team' },
        },
      },
    },
  ],
  kind: 'MigrationPolicyList',
  metadata: {
    resourceVersion: '12345',
  },
};
