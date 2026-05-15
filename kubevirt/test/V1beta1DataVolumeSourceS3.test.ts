import { V1beta1DataVolumeSourceS3 } from '../models/V1beta1DataVolumeSourceS3';

export const testObject: V1beta1DataVolumeSourceS3 = {
  certConfigMap: 's3-ca-cert',
  secretRef: 's3-secret',
  url: 's3://bucket/path/to/image.qcow2',
};
