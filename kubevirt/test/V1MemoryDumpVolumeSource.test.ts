import { V1MemoryDumpVolumeSource } from '../models/V1MemoryDumpVolumeSource';

export const testObject: V1MemoryDumpVolumeSource = {
  claimName: 'memory-dump-pvc',
  hotpluggable: true,
  readOnly: false,
};
