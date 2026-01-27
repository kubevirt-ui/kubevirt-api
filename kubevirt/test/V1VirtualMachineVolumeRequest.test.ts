import { V1VirtualMachineVolumeRequest } from '../models/V1VirtualMachineVolumeRequest';

export const testObject: V1VirtualMachineVolumeRequest = {
  addVolumeOptions: {
    disk: { name: 'new-disk', disk: { bus: 'virtio' } },
    name: 'new-volume',
    volumeSource: {
      persistentVolumeClaim: { claimName: 'my-pvc' },
    },
  },
  removeVolumeOptions: {
    name: 'old-volume',
  },
};
