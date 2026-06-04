import type { V1ContainerDiskInfo } from './V1ContainerDiskInfo';
import type { V1DomainMemoryDumpInfo } from './V1DomainMemoryDumpInfo';
import type { V1HotplugVolumeStatus } from './V1HotplugVolumeStatus';
import type { V1PersistentVolumeClaimInfo } from './V1PersistentVolumeClaimInfo';

/** VolumeStatus represents information about the status of volumes attached to the VirtualMachineInstance. */
export interface V1VolumeStatus {
  /** ContainerDiskVolume shows info about the containerdisk, if the volume is a containerdisk */
  containerDiskVolume?: V1ContainerDiskInfo;
  /** If the volume is hotplug, this will contain the hotplug status. */
  hotplugVolume?: V1HotplugVolumeStatus;
  /** If the volume is memorydump volume, this will contain the memorydump info. */
  memoryDumpVolume?: V1DomainMemoryDumpInfo;
  /** Message is a detailed message about the current hotplug volume phase */
  message?: string;
  /**
   * Name is the name of the volume
   * @default ""
   */
  name: string;
  /** PersistentVolumeClaimInfo is information about the PVC that handler requires during start flow */
  persistentVolumeClaimInfo?: V1PersistentVolumeClaimInfo;
  /** Phase is the phase */
  phase?: string;
  /** Reason is a brief description of why we are in the current hotplug volume phase */
  reason?: string;
  /**
   * Represents the size of the volume
   * @format int64
   */
  size?: number;
  /**
   * Target is the target name used when adding the volume to the VM, eg: vda
   * @default ""
   */
  target: string;
}
