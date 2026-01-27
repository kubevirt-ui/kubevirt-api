import { V1beta1DataVolumeSourceRegistry } from '../models/V1beta1DataVolumeSourceRegistry';

export const testObject: V1beta1DataVolumeSourceRegistry = {
  certConfigMap: 'registry-ca-cert',
  imageStream: 'my-imagestream',
  pullMethod: 'pod',
  secretRef: 'registry-secret',
  url: 'docker://quay.io/kubevirt/fedora-container-disk:latest',
};
