import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const DataImportCronModel: K8sModel = {
  label: 'DataImportCron',
  labelPlural: 'DataImportCrons',
  apiVersion: 'v1beta1',
  apiGroup: 'cdi.kubevirt.io',
  plural: 'dataimportcrons',
  abbr: 'dataimportcrons',
  namespaced: true,
  kind: 'DataImportCron',
  id: 'dataimportcron',
  crd: true,
};

export const DataImportCronModelGroupVersionKind = modelToGroupVersionKind(DataImportCronModel);
export const DataImportCronModelRef = modelToRef(DataImportCronModel);

export default DataImportCronModel;
