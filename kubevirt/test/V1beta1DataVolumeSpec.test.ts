import { V1beta1DataVolumeSpec } from '../models/V1beta1DataVolumeSpec';

export const testObject: V1beta1DataVolumeSpec = {
  checkpoints: [
    {
      current: 'checkpoint-2',
      previous: 'checkpoint-1',
    },
  ],
  contentType: 'kubevirt',
  finalCheckpoint: true,
  preallocation: true,
  priorityClassName: 'high-priority',
  pvc: {
    accessModes: ['ReadWriteOnce'],
    resources: {
      requests: { storage: '10Gi' },
    },
    storageClassName: 'standard',
  },
  source: {
    http: {
      url: 'https://example.com/image.qcow2',
    },
  },
  sourceRef: {
    kind: 'DataSource',
    name: 'my-datasource',
  },
  storage: {
    accessModes: ['ReadWriteOnce'],
    resources: {
      requests: { storage: '10Gi' },
    },
  },
};
