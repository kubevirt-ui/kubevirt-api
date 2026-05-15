import { V1PersistentVolumeClaimVolumeSource } from '../models/V1PersistentVolumeClaimVolumeSource';

export const testObject: V1PersistentVolumeClaimVolumeSource = {
  claimName: 'my-pvc',
  hotpluggable: true,
  readOnly: false,
};
