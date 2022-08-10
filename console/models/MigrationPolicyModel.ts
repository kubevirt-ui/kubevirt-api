import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const MigrationPolicyModel: K8sModel = {
  label: 'MigrationPolicy',
  labelKey: 'MigrationPolicy',
  labelPlural: 'MigrationPolicies',
  labelPluralKey: 'MigrationPolicies',
  apiVersion: 'v1alpha1',
  apiGroup: 'migrations.kubevirt.io',
  plural: 'migrationpolicies',
  abbr: 'MP',
  namespaced: false,
  kind: 'MigrationPolicy',
  id: 'migrationpolicy',
  crd: true,
};

export const MigrationPolicyModelGroupVersionKind = modelToGroupVersionKind(MigrationPolicyModel);
export const MigrationPolicyModelRef = modelToRef(MigrationPolicyModel);

export default MigrationPolicyModel;
