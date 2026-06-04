import { V1beta1StorageSpec } from '../models/V1beta1StorageSpec';

export const testObject: V1beta1StorageSpec = {
  accessModes: ['ReadWriteOnce'],
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
  volumeMode: 'Filesystem',
  volumeName: 'test-volume',
};
