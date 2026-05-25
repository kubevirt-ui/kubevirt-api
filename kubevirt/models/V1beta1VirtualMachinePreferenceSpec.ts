import type { V1beta1CPUPreferences } from './V1beta1CPUPreferences';
import type { V1beta1ClockPreferences } from './V1beta1ClockPreferences';
import type { V1beta1DevicePreferences } from './V1beta1DevicePreferences';
import type { V1beta1FeaturePreferences } from './V1beta1FeaturePreferences';
import type { V1beta1FirmwarePreferences } from './V1beta1FirmwarePreferences';
import type { V1beta1MachinePreferences } from './V1beta1MachinePreferences';
import type { V1beta1PreferenceRequirements } from './V1beta1PreferenceRequirements';
import type { V1beta1VolumePreferences } from './V1beta1VolumePreferences';

export interface V1beta1VirtualMachinePreferenceSpec {
  /** Optionally defines preferred Annotations to be applied to the VirtualMachineInstance */
  annotations?: Record<string, string>;
  /** Clock optionally defines preferences associated with the Clock attribute of a VirtualMachineInstance DomainSpec */
  clock?: V1beta1ClockPreferences;
  /** CPU optionally defines preferences associated with the CPU attribute of a VirtualMachineInstance DomainSpec */
  cpu?: V1beta1CPUPreferences;
  /** Devices optionally defines preferences associated with the Devices attribute of a VirtualMachineInstance DomainSpec */
  devices?: V1beta1DevicePreferences;
  /** Features optionally defines preferences associated with the Features attribute of a VirtualMachineInstance DomainSpec */
  features?: V1beta1FeaturePreferences;
  /** Firmware optionally defines preferences associated with the Firmware attribute of a VirtualMachineInstance DomainSpec */
  firmware?: V1beta1FirmwarePreferences;
  /** Machine optionally defines preferences associated with the Machine attribute of a VirtualMachineInstance DomainSpec */
  machine?: V1beta1MachinePreferences;
  /**
   * PreferSpreadSocketToCoreRatio defines the ratio to spread vCPUs between cores and sockets, it defaults to 2.
   * @format int64
   */
  preferSpreadSocketToCoreRatio?: number;
  /** PreferredArchitecture defines a prefeerred architecture for the VirtualMachine */
  preferredArchitecture?: string;
  /** Subdomain of the VirtualMachineInstance */
  preferredSubdomain?: string;
  /**
   * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
   * @format int64
   */
  preferredTerminationGracePeriodSeconds?: number;
  /** Requirements defines the minium amount of instance type defined resources required by a set of preferences */
  requirements?: V1beta1PreferenceRequirements;
  /** Volumes optionally defines preferences associated with the Volumes attribute of a VirtualMachineInstace DomainSpec */
  volumes?: V1beta1VolumePreferences;
}
