import { V1beta1PersistentVolumeClaim } from '../models/V1beta1PersistentVolumeClaim';


export const testObject: V1beta1PersistentVolumeClaim = {
  metadata: {
    name: 'test-pvc',
    namespace: 'test-namespace',
  },
  spec: {
    accessModes: ['ReadWriteOnce'],
    resources: {
      requests: { storage: '10Gi' },
    },
    storageClassName: 'standard',
  },
};
