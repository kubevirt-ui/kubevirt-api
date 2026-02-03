import {
  V1ContainerDiskSource,
  V1ContainerDiskSourceImagePullPolicyEnum,
} from '../models/V1ContainerDiskSource';

export const testObject: V1ContainerDiskSource = {
  image: 'quay.io/kubevirt/fedora-container-disk:latest',
  imagePullPolicy: V1ContainerDiskSourceImagePullPolicyEnum.Always,
  imagePullSecret: 'registry-secret',
  path: '/disk/fedora.qcow2',
};
