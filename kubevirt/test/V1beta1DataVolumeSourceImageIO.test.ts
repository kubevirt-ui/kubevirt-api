import { V1beta1DataVolumeSourceImageIO } from '../models/V1beta1DataVolumeSourceImageIO';

export const testObject: V1beta1DataVolumeSourceImageIO = {
  certConfigMap: 'imageio-ca-cert',
  diskId: 'disk-123',
  secretRef: 'imageio-secret',
  url: 'https://ovirt-engine.example.com/ovirt-engine/api',
};
