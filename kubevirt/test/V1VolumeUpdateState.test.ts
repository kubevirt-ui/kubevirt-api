import { V1VolumeUpdateState } from '../models/V1VolumeUpdateState';

export const testObject: V1VolumeUpdateState = {
  volumeMigrationState: {
    migratedVolumes: [
      {
        volumeName: 'rootdisk',
      },
    ],
  },
};
