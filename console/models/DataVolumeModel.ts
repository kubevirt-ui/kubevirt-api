import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const DataVolumeModel: K8sModel = {
  label: 'DataVolume',
  labelPlural: 'DataVolumes',
  apiVersion: 'v1beta1',
  apiGroup: 'cdi.kubevirt.io',
  plural: 'datavolumes',
  abbr: 'DV',
  namespaced: true,
  kind: 'DataVolume',
  id: 'datavolume',
  crd: true,
};

export const DataVolumeModelGroupVersionKind = modelToGroupVersionKind(DataVolumeModel);
export const DataVolumeModelRef = modelToRef(DataVolumeModel);

export default DataVolumeModel;
