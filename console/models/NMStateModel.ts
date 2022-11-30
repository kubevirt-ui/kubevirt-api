import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const NMStateModel: K8sModel = {
  label: 'NMState',
  labelPlural: 'NMStates',
  apiVersion: 'v1',
  apiGroup: 'nmstate.io',
  plural: 'nmstates',
  abbr: 'NMS',
  namespaced: false,
  kind: 'NMState',
  id: 'NMState',
  crd: true,
};

export const NMStateModelGroupVersionKind = modelToGroupVersionKind(NMStateModel);
export const NMStateModelRef = modelToRef(NMStateModel);

export default NMStateModel;
