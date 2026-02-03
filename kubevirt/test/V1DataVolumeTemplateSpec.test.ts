import { V1DataVolumeTemplateSpec } from '../models/V1DataVolumeTemplateSpec';

export const testObject: V1DataVolumeTemplateSpec = {
  apiVersion: 'cdi.kubevirt.io/v1beta1',
  kind: 'DataVolume',
  metadata: {
    name: 'my-datavolume',
    namespace: 'default',
  },
  spec: {
    source: {
      http: { url: 'https://example.com/image.qcow2' },
    },
    storage: {
      resources: { requests: { storage: '10Gi' } },
    },
  },
  status: {},
};
