import { V1EphemeralVolumeSource } from '../models/V1EphemeralVolumeSource';

export const testObject: V1EphemeralVolumeSource = {
  persistentVolumeClaim: {
    claimName: 'my-pvc',
    readOnly: false,
  },
};
