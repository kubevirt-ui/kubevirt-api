import { V1beta1VolumeSnapshotStatus } from '../models/V1beta1VolumeSnapshotStatus';

export const testObject: V1beta1VolumeSnapshotStatus = {
  creationTime: '2026-01-27T00:00:00Z',
  error: {
    message: 'Snapshot in progress',
    time: '2026-01-27T00:00:01Z',
  },
  readyToUse: true,
  volumeSnapshotName: 'snapshot-123',
};
