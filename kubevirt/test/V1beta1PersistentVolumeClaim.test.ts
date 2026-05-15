import { V1beta1PersistentVolumeClaim } from '../models/V1beta1PersistentVolumeClaim';
import { K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum } from '../models/K8sIoApiCoreV1PersistentVolumeClaimSpec';

export const testObject: V1beta1PersistentVolumeClaim = {
  metadata: {
    name: 'test-pvc',
    namespace: 'test-namespace',
  },
  spec: {
    accessModes: [K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum.ReadWriteOnce],
    resources: {
      requests: { storage: '10Gi' },
    },
    storageClassName: 'standard',
  },
};
