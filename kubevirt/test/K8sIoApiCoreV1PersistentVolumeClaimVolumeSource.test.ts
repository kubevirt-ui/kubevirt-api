import { K8sIoApiCoreV1PersistentVolumeClaimVolumeSource } from '../models/K8sIoApiCoreV1PersistentVolumeClaimVolumeSource';

export const testObject: K8sIoApiCoreV1PersistentVolumeClaimVolumeSource = {
  claimName: 'test-pvc',
  readOnly: false,
};
