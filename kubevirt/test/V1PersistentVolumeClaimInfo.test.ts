import { V1PersistentVolumeClaimInfo } from '../models/V1PersistentVolumeClaimInfo';

export const testObject: V1PersistentVolumeClaimInfo = {
  accessModes: ['ReadWriteOnce'],
  capacity: { storage: '10Gi' },
  claimName: 'my-pvc',
  filesystemOverhead: '0.055',
  preallocated: false,
  requests: { storage: '10Gi' },
  volumeMode: 'Filesystem',
};
