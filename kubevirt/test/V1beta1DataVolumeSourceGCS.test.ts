import { V1beta1DataVolumeSourceGCS } from '../models/V1beta1DataVolumeSourceGCS';

export const testObject: V1beta1DataVolumeSourceGCS = {
  secretRef: 'gcs-secret',
  url: 'gs://bucket/path/to/image.qcow2',
};
