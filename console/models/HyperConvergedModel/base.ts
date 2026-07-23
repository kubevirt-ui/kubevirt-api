import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const hyperConvergedBaseModel: Omit<K8sModel, 'apiVersion'> = {
  kind: 'HyperConverged',
  label: 'HyperConverged',
  labelPlural: 'HyperConvergeds',
  apiGroup: 'hco.kubevirt.io',
  abbr: 'HC',
  namespaced: true,
  crd: true,
  plural: 'hyperconvergeds',
};
