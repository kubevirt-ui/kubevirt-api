import {
  V1KernelBootContainer,
  V1KernelBootContainerImagePullPolicyEnum,
} from '../models/V1KernelBootContainer';

export const testObject: V1KernelBootContainer = {
  image: 'quay.io/kubevirt/kernel-boot:latest',
  imagePullPolicy: V1KernelBootContainerImagePullPolicyEnum.Always,
  imagePullSecret: 'registry-secret',
  initrdPath: '/boot/initrd.img',
  kernelPath: '/boot/vmlinuz',
};
