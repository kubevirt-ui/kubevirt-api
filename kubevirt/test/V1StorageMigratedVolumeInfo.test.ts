import { V1StorageMigratedVolumeInfo } from '../models/V1StorageMigratedVolumeInfo';

export const testObject: V1StorageMigratedVolumeInfo = {
  volumeName: 'rootdisk',
  sourcePVCInfo: {
    capacity: { storage: '10Gi' },
  },
  destinationPVCInfo: {
    capacity: { storage: '10Gi' },
  },
};
