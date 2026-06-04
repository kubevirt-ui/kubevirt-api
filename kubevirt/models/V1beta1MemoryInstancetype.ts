import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';
import type { V1Hugepages } from './V1Hugepages';

/**
 * MemoryInstancetype contains the Memory related configuration of a given VirtualMachineInstancetypeSpec.
 *
 * Guest is a required attribute and defines the amount of RAM to be exposed to the guest by the instancetype.
 */
export interface V1beta1MemoryInstancetype {
  /** Required amount of memory which is visible inside the guest OS. */
  guest: K8sIoApimachineryPkgApiResourceQuantity;
  /** Optionally enables the use of hugepages for the VirtualMachineInstance instead of regular memory. */
  hugepages?: V1Hugepages;
  /** MaxGuest allows to specify the maximum amount of memory which is visible inside the Guest OS. The delta between MaxGuest and Guest is the amount of memory that can be hot(un)plugged. */
  maxGuest?: K8sIoApimachineryPkgApiResourceQuantity;
  /**
   * OvercommitPercent is the percentage of the guest memory which will be overcommitted. This means that the VMIs parent pod (virt-launcher) will request less physical memory by a factor specified by the OvercommitPercent. Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully. Defaults to 0
   * @format int32
   */
  overcommitPercent?: number;
}
