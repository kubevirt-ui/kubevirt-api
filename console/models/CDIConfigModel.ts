import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const CDIConfigModel: K8sModel = {
  label: 'CDIConfig',
  labelPlural: 'CDIConfigs',
  apiVersion: 'v1beta1',
  apiGroup: 'cdi.kubevirt.io',
  namespaced: false,
  plural: 'cdiconfigs',
  abbr: 'cdic',
  kind: 'CDIConfig',
  id: 'cdiconfig',
  crd: true,
};

export const CDIConfigModelGroupVersionKind = modelToGroupVersionKind(CDIConfigModel);
export const CDIConfigModelRef = modelToRef(CDIConfigModel);
