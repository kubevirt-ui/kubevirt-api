import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const KubeDeschedulerModel = {
  kind: 'KubeDescheduler',
  label: 'KubeDescheduler',
  labelPlural: 'KubeDeschedulers',
  apiGroup: 'operator.openshift.io',
  apiVersion: 'v1',
  abbr: 'KD',
  namespaced: false,
  crd: true,
  plural: 'kubedeschedulers',
};

export const KubeDeschedulerModelGroupVersionKind = modelToGroupVersionKind(KubeDeschedulerModel);
export const KubeDeschedulerModelRef = modelToRef(KubeDeschedulerModel);

export default KubeDeschedulerModel;
