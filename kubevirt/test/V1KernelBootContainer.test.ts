import { V1KernelBootContainer } from '../models/V1KernelBootContainer';

export const testObject: V1KernelBootContainer = {
  image: 'quay.io/kubevirt/kernel-boot:latest',
  imagePullPolicy: 'Always',
  imagePullSecret: 'registry-secret',
  initrdPath: '/boot/initrd.img',
  kernelPath: '/boot/vmlinuz',
};
