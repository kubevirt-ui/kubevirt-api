import {
  V1beta1StorageSpec,
  V1beta1StorageSpecAccessModesEnum,
  V1beta1StorageSpecVolumeModeEnum,
} from '../models/V1beta1StorageSpec';

export const testObject: V1beta1StorageSpec = {
  accessModes: [V1beta1StorageSpecAccessModesEnum.ReadWriteOnce],
  dataSource: {
    apiGroup: 'snapshot.storage.k8s.io',
    kind: 'VolumeSnapshot',
    name: 'test-snapshot',
  },
  dataSourceRef: {
    apiGroup: 'snapshot.storage.k8s.io',
    kind: 'VolumeSnapshot',
    name: 'test-snapshot-ref',
    namespace: 'test-namespace',
  },
  resources: {
    limits: { storage: '10Gi' },
    requests: { storage: '5Gi' },
  },
  selector: {
    matchLabels: { app: 'test-app' },
  },
  storageClassName: 'standard',
  volumeMode: V1beta1StorageSpecVolumeModeEnum.Filesystem,
  volumeName: 'test-volume',
};
