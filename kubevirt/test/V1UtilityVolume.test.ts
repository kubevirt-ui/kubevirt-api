import { V1UtilityVolume } from '../models/V1UtilityVolume';

export const testObject: V1UtilityVolume = {
  claimName: 'my-pvc',
  name: 'utility-vol',
  readOnly: false,
  type: 'virtio-fs',
};
