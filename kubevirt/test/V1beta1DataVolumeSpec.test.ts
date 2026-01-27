import { V1beta1DataVolumeSpec } from '../models/V1beta1DataVolumeSpec';
import { K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum } from '../models/K8sIoApiCoreV1PersistentVolumeClaimSpec';
import { V1beta1StorageSpecAccessModesEnum } from '../models/V1beta1StorageSpec';

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
    accessModes: [K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum.ReadWriteOnce],
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
    accessModes: [V1beta1StorageSpecAccessModesEnum.ReadWriteOnce],
    resources: {
      requests: { storage: '10Gi' },
    },
  },
};
