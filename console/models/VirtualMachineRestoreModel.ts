import { K8sModel } from "@openshift-console/dynamic-plugin-sdk/lib/api/common-types";

import { modelToGroupVersionKind, modelToRef } from "../modelUtils";

const VirtualMachineRestoreModel: K8sModel = {
  label: "VirtualMachineRestore",
  labelPlural: "VirtualMachineRestores",
  apiVersion: "v1alpha1",
  apiGroup: "snapshot.kubevirt.io",
  plural: "virtualmachinerestores",
  abbr: "VMR",
  namespaced: true,
  kind: "VirtualMachineRestore",
  id: "virtualmachinerestore",
  crd: true,
};

export const VirtualMachineRestoreModelGroupVersionKind =
  modelToGroupVersionKind(VirtualMachineRestoreModel);
export const VirtualMachineRestoreModelRef = modelToRef(
  VirtualMachineRestoreModel
);

export default VirtualMachineRestoreModel;
