import { V1VolumeStatus } from '../models/V1VolumeStatus';


export const testObject: V1VolumeStatus = {
  containerDiskVolume: {
    checksum: 123456789,
  },
  hotplugVolume: {
    attachPodName: 'hotplug-pod',
    attachPodUID: 'pod-uid-123',
  },
  memoryDumpVolume: {
    claimName: 'memory-dump-pvc',
    targetFileName: 'memory.dump',
  },
  message: 'Volume attached successfully',
  name: 'rootdisk',
  persistentVolumeClaimInfo: {
    accessModes: ['ReadWriteOnce'],
    capacity: { storage: '10Gi' },
    volumeMode: 'Filesystem',
  },
  phase: 'Ready',
  reason: 'VolumeReady',
  size: 10737418240,
  target: 'vda',
};
