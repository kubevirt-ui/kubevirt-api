import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineInstanceMigrationModel: K8sModel = {
  label: 'VirtualMachineInstanceMigration',
  labelPlural: 'VirtualMachineInstanceMigrations',
  apiVersion: 'v1',
  apiGroup: 'kubevirt.io',
  plural: 'virtualmachineinstancemigrations',
  abbr: 'VMIM',
  namespaced: true,
  kind: 'VirtualMachineInstanceMigration',
  id: 'virtualmachineinstancemigration',
  crd: true,
};

export const VirtualMachineInstanceMigrationModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineInstanceMigrationModel,
);
export const VirtualMachineInstanceMigrationModelRef = modelToRef(
  VirtualMachineInstanceMigrationModel,
);

export default VirtualMachineInstanceMigrationModel;
