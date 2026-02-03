import { V1ConfigMapVolumeSource } from '../models/V1ConfigMapVolumeSource';

export const testObject: V1ConfigMapVolumeSource = {
  name: 'my-configmap',
  optional: false,
  volumeLabel: 'cidata',
};
