import { V1ContainerPathVolumeSource } from '../models/V1ContainerPathVolumeSource';

export const testObject: V1ContainerPathVolumeSource = {
  path: '/var/run/shared-data',
  readOnly: true,
};
