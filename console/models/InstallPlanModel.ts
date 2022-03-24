import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const InstallPlanModel: K8sModel = {
  kind: 'InstallPlan',
  label: 'InstallPlan',
  labelKey: 'InstallPlan',
  labelPlural: 'InstallPlans',
  labelPluralKey: 'InstallPlans',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  abbr: 'IP',
  namespaced: true,
  crd: true,
  plural: 'installplans',
  legacyPluralURL: true,
};

export const InstallPlanModelGroupVersionKind = modelToGroupVersionKind(InstallPlanModel);
export const InstallPlanModelRef = modelToRef(InstallPlanModel);

export default InstallPlanModel;
