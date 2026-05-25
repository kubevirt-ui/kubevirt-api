import type { V1CustomProfile } from './V1CustomProfile';

export interface V1VirtualMachineInstanceProfile {
  /** CustomProfile allows to request arbitrary profile for virt-launcher */
  customProfile?: V1CustomProfile;
}
