import { V1VolumeStatus } from '../models/V1VolumeStatus';
import {
  V1PersistentVolumeClaimInfoAccessModesEnum,
  V1PersistentVolumeClaimInfoVolumeModeEnum,
} from '../models/V1PersistentVolumeClaimInfo';

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
    accessModes: [V1PersistentVolumeClaimInfoAccessModesEnum.ReadWriteOnce],
    capacity: { storage: '10Gi' },
    volumeMode: V1PersistentVolumeClaimInfoVolumeModeEnum.Filesystem,
  },
  phase: 'Ready',
  reason: 'VolumeReady',
  size: 10737418240,
  target: 'vda',
};
