import { V1SecretVolumeSource } from '../models/V1SecretVolumeSource';

export const testObject: V1SecretVolumeSource = {
  optional: false,
  secretName: 'my-secret',
  volumeLabel: 'cidata',
};
