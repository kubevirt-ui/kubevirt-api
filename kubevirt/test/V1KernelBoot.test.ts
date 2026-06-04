import { V1KernelBoot } from '../models/V1KernelBoot';

export const testObject: V1KernelBoot = {
  container: {
    image: 'quay.io/kubevirt/kernel-boot:latest',
    imagePullPolicy: 'Always',
    imagePullSecret: 'registry-secret',
    initrdPath: '/boot/initrd.img',
    kernelPath: '/boot/vmlinuz',
  },
  kernelArgs: 'console=ttyS0 root=/dev/vda1',
};
