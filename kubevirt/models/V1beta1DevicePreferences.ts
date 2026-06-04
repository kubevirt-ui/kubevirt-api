import type { V1BlockSize } from './V1BlockSize';
import type { V1InterfaceMasquerade } from './V1InterfaceMasquerade';
import type { V1Rng } from './V1Rng';
import type { V1TPMDevice } from './V1TPMDevice';
import type { V1VGPUOptions } from './V1VGPUOptions';

/** DevicePreferences contains various optional Device preferences. */
export interface V1beta1DevicePreferences {
  /** PreferredAutoattachGraphicsDevice optionally defines the preferred value of AutoattachGraphicsDevice */
  preferredAutoattachGraphicsDevice?: boolean;
  /** PreferredAutoattachInputDevice optionally defines the preferred value of AutoattachInputDevice */
  preferredAutoattachInputDevice?: boolean;
  /** PreferredAutoattachMemBalloon optionally defines the preferred value of AutoattachMemBalloon */
  preferredAutoattachMemBalloon?: boolean;
  /** PreferredAutoattachPodInterface optionally defines the preferred value of AutoattachPodInterface */
  preferredAutoattachPodInterface?: boolean;
  /** PreferredAutoattachSerialConsole optionally defines the preferred value of AutoattachSerialConsole */
  preferredAutoattachSerialConsole?: boolean;
  /** PreferredBlockMultiQueue optionally enables the vhost multiqueue feature for virtio disks. */
  preferredBlockMultiQueue?: boolean;
  /** PreferredCdromBus optionally defines the preferred bus for Cdrom Disk devices. */
  preferredCdromBus?: string;
  /** PreferredDisableHotplug optionally defines the preferred value of DisableHotplug */
  preferredDisableHotplug?: boolean;
  /** PreferredBlockSize optionally defines the block size of Disk devices. */
  preferredDiskBlockSize?: V1BlockSize;
  /** PreferredDiskBus optionally defines the preferred bus for Disk Disk devices. */
  preferredDiskBus?: string;
  /** PreferredCache optionally defines the DriverCache to be used by Disk devices. */
  preferredDiskCache?: string;
  /** PreferredDedicatedIoThread optionally enables dedicated IO threads for Disk devices using the virtio bus. */
  preferredDiskDedicatedIoThread?: boolean;
  /** PreferredIo optionally defines the QEMU disk IO mode to be used by Disk devices. */
  preferredDiskIO?: string;
  /** PreferredInputBus optionally defines the preferred bus for Input devices. */
  preferredInputBus?: string;
  /** PreferredInputType optionally defines the preferred type for Input devices. */
  preferredInputType?: string;
  /** PreferredInterfaceMasquerade optionally defines the preferred masquerade configuration to use with each network interface. */
  preferredInterfaceMasquerade?: V1InterfaceMasquerade;
  /** PreferredInterfaceModel optionally defines the preferred model to be used by Interface devices. */
  preferredInterfaceModel?: string;
  /** PreferredLunBus optionally defines the preferred bus for Lun Disk devices. */
  preferredLunBus?: string;
  /** PreferredNetworkInterfaceMultiQueue optionally enables the vhost multiqueue feature for virtio interfaces. */
  preferredNetworkInterfaceMultiQueue?: boolean;
  /** PreferredPanicDeviceModel optionally defines the preferred panic device model to use with panic devices. */
  preferredPanicDeviceModel?: string;
  /** PreferredRng optionally defines the preferred rng device to be used. */
  preferredRng?: V1Rng;
  /** PreferredSoundModel optionally defines the preferred model for Sound devices. */
  preferredSoundModel?: string;
  /** PreferredTPM optionally defines the preferred TPM device to be used. */
  preferredTPM?: V1TPMDevice;
  /** PreferredUseVirtioTransitional optionally defines the preferred value of UseVirtioTransitional */
  preferredUseVirtioTransitional?: boolean;
  /** PreferredVideoType optionally defines the preferred type for Video devices. */
  preferredVideoType?: string;
  /** PreferredVirtualGPUOptions optionally defines the preferred value of VirtualGPUOptions */
  preferredVirtualGPUOptions?: V1VGPUOptions;
}
