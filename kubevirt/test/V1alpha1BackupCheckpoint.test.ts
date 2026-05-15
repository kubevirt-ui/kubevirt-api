import { V1alpha1BackupCheckpoint } from '../models/V1alpha1BackupCheckpoint';

export const testObject: V1alpha1BackupCheckpoint = {
  creationTime: '2024-01-01T00:00:00Z',
  name: 'checkpoint-001',
  volumes: [
    {
      diskTarget: 'vda',
      volumeName: 'rootdisk',
      dataEndpoint: 'https://export.example.com/data',
      mapEndpoint: 'https://export.example.com/map',
    },
  ],
};
