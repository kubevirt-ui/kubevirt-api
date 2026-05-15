import { V1ArchConfiguration } from '../models/V1ArchConfiguration';

export const testObject: V1ArchConfiguration = {
  amd64: {
    emulatedMachines: ['q35'],
    machineType: 'q35',
    ovmfPath: '/usr/share/OVMF',
  },
  arm64: {
    emulatedMachines: ['virt'],
    machineType: 'virt',
    ovmfPath: '/usr/share/AAVMF',
  },
  defaultArchitecture: 'amd64',
  ppc64le: {
    emulatedMachines: ['pseries'],
    machineType: 'pseries',
  },
  s390x: {
    emulatedMachines: ['s390-ccw-virtio'],
    machineType: 's390-ccw-virtio',
  },
};
