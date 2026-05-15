import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const DataSourceModel: K8sModel = {
  label: 'DataSource',
  labelPlural: 'DataSources',
  apiVersion: 'v1beta1',
  apiGroup: 'cdi.kubevirt.io',
  plural: 'datasources',
  abbr: 'datasources',
  namespaced: true,
  kind: 'DataSource',
  id: 'datasource',
  crd: true,
};

export const DataSourceModelGroupVersionKind = modelToGroupVersionKind(DataSourceModel);
export const DataSourceModelRef = modelToRef(DataSourceModel);
