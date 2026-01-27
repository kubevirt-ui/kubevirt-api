import { V1beta1VirtualMachinePreferenceSpec } from '../models/V1beta1VirtualMachinePreferenceSpec';

export const testObject: V1beta1VirtualMachinePreferenceSpec = {
  annotations: { 'kubevirt.io/preference': 'test' },
  clock: {
    preferredClockOffset: {
      timezone: 'UTC',
    },
  },
  cpu: {
    preferredCPUTopology: 'preferSockets',
  },
  devices: {
    preferredDiskBus: 'virtio',
    preferredInterfaceModel: 'virtio',
  },
  features: {
    preferredAcpi: {
      enabled: true,
    },
  },
  firmware: {
    preferredUseBios: false,
    preferredUseEfi: true,
    preferredUseSecureBoot: true,
  },
  machine: {
    preferredMachineType: 'q35',
  },
  preferSpreadSocketToCoreRatio: 2,
  preferredSubdomain: 'test-subdomain',
  preferredTerminationGracePeriodSeconds: 30,
  requirements: {
    cpu: {
      guest: 2,
    },
    memory: {
      guest: '4Gi',
    },
  },
  volumes: {
    preferredStorageClassName: 'fast-ssd',
  },
};
