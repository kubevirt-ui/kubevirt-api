import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const ConsoleQuickStartModel: K8sModel = {
  kind: 'ConsoleQuickStart',
  label: 'ConsoleQuickStart',
  labelPlural: 'ConsoleQuickStarts',
  apiGroup: 'console.openshift.io',
  apiVersion: 'v1',
  abbr: 'CQS',
  namespaced: false,
  crd: true,
  plural: 'consolequickstarts',
  propagationPolicy: 'Background',
};

export const ConsoleQuickStartModelGroupVersionKind = modelToGroupVersionKind(ConsoleQuickStartModel);
export const ConsoleQuickStartModelRef = modelToRef(ConsoleQuickStartModel);

export default ConsoleQuickStartModel;