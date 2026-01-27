import { V1KernelBoot } from '../models/V1KernelBoot';
import { V1KernelBootContainerImagePullPolicyEnum } from '../models/V1KernelBootContainer';

export const testObject: V1KernelBoot = {
  container: {
    image: 'quay.io/kubevirt/kernel-boot:latest',
    imagePullPolicy: V1KernelBootContainerImagePullPolicyEnum.Always,
    imagePullSecret: 'registry-secret',
    initrdPath: '/boot/initrd.img',
    kernelPath: '/boot/vmlinuz',
  },
  kernelArgs: 'console=ttyS0 root=/dev/vda1',
};
