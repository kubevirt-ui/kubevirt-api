import type { V1VirtualMachineInstanceProfile } from './V1VirtualMachineInstanceProfile';

export interface V1SeccompConfiguration {
  /** VirtualMachineInstanceProfile defines what profile should be used with virt-launcher. Defaults to none */
  virtualMachineInstanceProfile?: V1VirtualMachineInstanceProfile;
}
