import { K8sModel } from "@openshift-console/dynamic-plugin-sdk/lib/api/common-types";

import { modelToGroupVersionKind, modelToRef } from "../modelUtils";

const VirtualMachineSnapshotModel: K8sModel = {
  label: "VirtualMachineSnapshot",
  labelPlural: "VirtualMachineSnapshots",
  apiVersion: "v1alpha1",
  apiGroup: "snapshot.kubevirt.io",
  plural: "virtualmachinesnapshots",
  abbr: "VMS",
  namespaced: true,
  kind: "VirtualMachineSnapshot",
  id: "virtualmachinesnapshot",
  crd: true,
};

export const VirtualMachineSnapshotModelGroupVersionKind =
  modelToGroupVersionKind(VirtualMachineSnapshotModel);
export const VirtualMachineSnapshotModelRef = modelToRef(
  VirtualMachineSnapshotModel
);

export default VirtualMachineSnapshotModel;
