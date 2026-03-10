import { V1ChangedBlockTrackingStatus } from '../models/V1ChangedBlockTrackingStatus';

export const testObject: V1ChangedBlockTrackingStatus = {
  backupStatus: {
    backupName: 'test-backup',
    completed: true,
    startTimestamp: '2024-01-01T00:00:00Z',
    endTimestamp: '2024-01-01T00:10:00Z',
  },
  state: 'enabled',
};
