import type { V1NUMAGuestMappingPassthrough } from './V1NUMAGuestMappingPassthrough';

export interface V1NUMA {
  /** GuestMappingPassthrough will create an efficient guest topology based on host CPUs exclusively assigned to a pod. The created topology ensures that memory and CPUs on the virtual numa nodes never cross boundaries of host numa nodes. */
  guestMappingPassthrough?: V1NUMAGuestMappingPassthrough;
}
