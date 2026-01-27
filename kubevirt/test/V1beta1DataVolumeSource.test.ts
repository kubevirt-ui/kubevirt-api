import { V1beta1DataVolumeSource } from '../models/V1beta1DataVolumeSource';

export const testObject: V1beta1DataVolumeSource = {
  blank: {},
  gcs: {
    url: 'gs://bucket/image.qcow2',
  },
  http: {
    url: 'https://example.com/image.qcow2',
  },
  imageio: {
    diskId: 'disk-123',
    url: 'https://ovirt-engine.example.com/api',
  },
  pvc: {
    name: 'source-pvc',
    namespace: 'source-ns',
  },
  registry: {
    url: 'docker://quay.io/kubevirt/image:latest',
  },
  s3: {
    url: 's3://bucket/image.qcow2',
  },
  snapshot: {
    name: 'source-snapshot',
    namespace: 'source-ns',
  },
  upload: {},
  vddk: {
    url: 'https://vcenter.example.com',
    uuid: 'vm-uuid',
  },
};
