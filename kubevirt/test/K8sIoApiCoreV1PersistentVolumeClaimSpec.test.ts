import {
  K8sIoApiCoreV1PersistentVolumeClaimSpec,
  K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum,
  K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum,
} from '../models/K8sIoApiCoreV1PersistentVolumeClaimSpec';

export const testObject: K8sIoApiCoreV1PersistentVolumeClaimSpec = {
  accessModes: [
    K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum.ReadWriteOnce,
    K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum.ReadOnlyMany,
  ],
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
    matchExpressions: [
      {
        key: 'environment',
        operator: 'In',
        values: ['production'],
      },
    ],
  },
  storageClassName: 'test-storage-class',
  volumeAttributesClassName: 'test-volume-attributes-class',
  volumeMode: K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum.Filesystem,
  volumeName: 'test-volume',
};
