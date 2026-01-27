import {
  V1PersistentVolumeClaimInfo,
  V1PersistentVolumeClaimInfoAccessModesEnum,
  V1PersistentVolumeClaimInfoVolumeModeEnum,
} from '../models/V1PersistentVolumeClaimInfo';

export const testObject: V1PersistentVolumeClaimInfo = {
  accessModes: [V1PersistentVolumeClaimInfoAccessModesEnum.ReadWriteOnce],
  capacity: { storage: '10Gi' },
  claimName: 'my-pvc',
  filesystemOverhead: '0.055',
  preallocated: false,
  requests: { storage: '10Gi' },
  volumeMode: V1PersistentVolumeClaimInfoVolumeModeEnum.Filesystem,
};
