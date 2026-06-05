import { V1ContainerDiskSource } from '../models/V1ContainerDiskSource';

export const testObject: V1ContainerDiskSource = {
  image: 'quay.io/kubevirt/fedora-container-disk:latest',
  imagePullPolicy: 'Always',
  imagePullSecret: 'registry-secret',
  path: '/disk/fedora.qcow2',
};
