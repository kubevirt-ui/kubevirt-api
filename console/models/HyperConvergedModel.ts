import { K8sModel } from "@openshift-console/dynamic-plugin-sdk/lib/api/common-types";

import { modelToGroupVersionKind, modelToRef } from "../modelUtils";

const HyperConvergedModel = {
  kind: "HyperConverged",
  label: "HyperConverged",
  labelPlural: "HyperConvergeds",
  apiGroup: "hco.kubevirt.io",
  apiVersion: "v1beta1",
  abbr: "HC",
  namespaced: true,
  crd: true,
  plural: "hyperconvergeds",
};

export const HyperConvergedModelGroupVersionKind =
  modelToGroupVersionKind(HyperConvergedModel);
export const HyperConvergedModelRef = modelToRef(HyperConvergedModel);

export default HyperConvergedModel;
