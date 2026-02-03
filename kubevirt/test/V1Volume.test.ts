import { V1Volume } from '../models/V1Volume';

export const testObject: V1Volume = {
  cloudInitNoCloud: {
    userData: '#cloud-config',
  },
  configMap: {
    name: 'my-configmap',
  },
  containerDisk: {
    image: 'quay.io/kubevirt/fedora-container-disk:latest',
  },
  dataVolume: {
    name: 'my-datavolume',
  },
  downwardAPI: {
    fields: [
      {
        path: 'labels',
        fieldRef: {
          fieldPath: 'metadata.labels',
        },
      },
    ],
  },
  downwardMetrics: {},
  emptyDisk: {
    capacity: '10Gi',
  },
  ephemeral: {
    persistentVolumeClaim: {
      claimName: 'my-pvc',
    },
  },
  hostDisk: {
    path: '/data/disk.img',
    type: 'Disk',
  },
  name: 'my-volume',
  persistentVolumeClaim: {
    claimName: 'my-pvc',
  },
  secret: {
    secretName: 'my-secret',
  },
  serviceAccount: {
    serviceAccountName: 'my-sa',
  },
  sysprep: {
    configMap: {
      name: 'sysprep-config',
    },
  },
};
