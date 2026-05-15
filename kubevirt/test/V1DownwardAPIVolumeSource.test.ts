import { V1DownwardAPIVolumeSource } from '../models/V1DownwardAPIVolumeSource';

export const testObject: V1DownwardAPIVolumeSource = {
  fields: [
    {
      fieldRef: {
        apiVersion: 'v1',
        fieldPath: 'metadata.name',
      },
      path: 'labels',
    },
  ],
  volumeLabel: 'cidata',
};
