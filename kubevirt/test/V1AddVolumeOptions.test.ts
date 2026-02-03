import { V1AddVolumeOptions } from '../models/V1AddVolumeOptions';

export const testObject: V1AddVolumeOptions = {
  disk: {
    name: 'hotplug-disk',
    disk: { bus: 'virtio' },
    bootOrder: 2,
  },
  dryRun: ['All'],
  name: 'hotplug-volume',
  volumeSource: {
    dataVolume: { name: 'my-datavolume', hotpluggable: true },
    persistentVolumeClaim: { claimName: 'my-pvc', hotpluggable: true },
  },
};
