import { V1beta1DataVolumeSourceHTTP } from '../models/V1beta1DataVolumeSourceHTTP';

export const testObject: V1beta1DataVolumeSourceHTTP = {
  certConfigMap: 'ca-cert-configmap',
  extraHeaders: ['X-Custom-Header: value'],
  secretExtraHeaders: ['auth-secret'],
  secretRef: 'http-secret',
  url: 'https://example.com/image.qcow2',
};
