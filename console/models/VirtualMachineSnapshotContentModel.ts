import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineSnapshotContentModel: K8sModel = {
  label: 'VirtualMachineSnapshotContent',
  labelPlural: 'VirtualMachineSnapshotContents',
  apiVersion: 'v1alpha1',
  apiGroup: 'snapshot.kubevirt.io',
  plural: 'virtualmachinesnapshotcontents',
  abbr: 'VMSC',
  namespaced: true,
  kind: 'VirtualMachineSnapshotContent',
  id: 'virtualmachinesnapshotcontent',
  crd: true,
};

export const VirtualMachineSnapshotContentModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineSnapshotContentModel,
);
export const VirtualMachineSnapshotContentModelRef = modelToRef(VirtualMachineSnapshotContentModel);

export default VirtualMachineSnapshotContentModel;
