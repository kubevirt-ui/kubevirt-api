import { V1alpha1BackupVolumeInfo } from '../models/V1alpha1BackupVolumeInfo';

export const testObject: V1alpha1BackupVolumeInfo = {
  dataEndpoint: 'https://export.example.com/data',
  diskTarget: 'vda',
  mapEndpoint: 'https://export.example.com/map',
  volumeName: 'rootdisk',
};
