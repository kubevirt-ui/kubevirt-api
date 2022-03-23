import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const CatalogSourceModel: K8sModel = {
  kind: 'CatalogSource',
  label: 'CatalogSource',
  labelKey: 'CatalogSource',
  labelPlural: 'CatalogSources',
  labelPluralKey: 'CatalogSources',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  abbr: 'CS',
  namespaced: true,
  crd: true,
  plural: 'catalogsources',
};

export const CatalogSourceModelGroupVersionKind = modelToGroupVersionKind(CatalogSourceModel);
export const CatalogSourceModelRef = modelToRef(CatalogSourceModel);

export default CatalogSourceModel;
