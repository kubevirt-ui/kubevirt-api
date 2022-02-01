import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const NetworkAddonsConfigModel: K8sModel = {
  label: 'NetworkAddonsConfig',
  labelPlural: 'NetworkAddonsConfigs',
  apiVersion: 'v1',
  apiGroup: 'networkaddonsoperator.network.kubevirt.io',
  plural: 'networkaddonsconfigs',
  abbr: 'NAC',
  namespaced: true,
  kind: 'NetworkAddonsConfig',
  id: 'networkaddonsconfig',
  crd: true,
};

export const NetworkAddonsConfigModelGroupVersionKind =
  modelToGroupVersionKind(NetworkAddonsConfigModel);
export const NetworkAddonsConfigModelRef = modelToRef(NetworkAddonsConfigModel);

export default NetworkAddonsConfigModel;
