import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';
import type { V1Hugepages } from './V1Hugepages';
import type { V1ReservedOverhead } from './V1ReservedOverhead';

export interface V1Memory {
  /** Guest allows to specifying the amount of memory which is visible inside the Guest OS. The Guest must lie between Requests and Limits from the resources section. Defaults to the requested memory in the resources section if not specified. */
  guest?: K8sIoApimachineryPkgApiResourceQuantity;
  /** Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory. */
  hugepages?: V1Hugepages;
  /** MaxGuest allows to specify the maximum amount of memory which is visible inside the Guest OS. The delta between MaxGuest and Guest is the amount of memory that can be hot(un)plugged. */
  maxGuest?: K8sIoApimachineryPkgApiResourceQuantity;
  /** ReservedOverhead configures the memory overhead applied to a VM and its characteristics. */
  reservedOverhead?: V1ReservedOverhead;
}
