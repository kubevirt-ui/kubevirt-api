import { V1beta1DevicePreferences } from '../models/V1beta1DevicePreferences';

export const testObject: V1beta1DevicePreferences = {
  preferredAutoattachGraphicsDevice: true,
  preferredAutoattachInputDevice: true,
  preferredAutoattachMemBalloon: true,
  preferredAutoattachPodInterface: true,
  preferredAutoattachSerialConsole: true,
  preferredBlockMultiQueue: true,
  preferredCdromBus: 'sata',
  preferredDisableHotplug: false,
  preferredDiskBlockSize: {
    custom: {
      logical: 512,
      physical: 4096,
    },
  },
  preferredDiskBus: 'virtio',
  preferredDiskCache: 'none',
  preferredDiskDedicatedIoThread: true,
  preferredDiskIO: 'native',
  preferredInputBus: 'virtio',
  preferredInputType: 'tablet',
  preferredInterfaceMasquerade: {},
  preferredInterfaceModel: 'virtio',
  preferredLunBus: 'scsi',
  preferredNetworkInterfaceMultiQueue: true,
  preferredPanicDeviceModel: 'isa',
  preferredRng: {},
  preferredSoundModel: 'ich9',
  preferredTPM: {
    persistent: true,
  },
  preferredUseVirtioTransitional: false,
  preferredVirtualGPUOptions: {
    display: {
      enabled: true,
    },
  },
};
