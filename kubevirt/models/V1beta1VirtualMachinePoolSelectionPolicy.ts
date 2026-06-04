import type { V1beta1VirtualMachinePoolSelectors } from './V1beta1VirtualMachinePoolSelectors';

/** VirtualMachinePoolSelectionPolicy defines the priority in which VM instances are selected for proactive scale-in or update */
export interface V1beta1VirtualMachinePoolSelectionPolicy {
  /** Selectors is a list of selection policies. */
  selectors?: V1beta1VirtualMachinePoolSelectors;
  /** SortPolicy is a catch-all policy [AscendingOrder|DescendingOrder|Newest|Oldest|Random] */
  sortPolicy?: string;
}
