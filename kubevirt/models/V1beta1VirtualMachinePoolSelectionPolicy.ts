import type { V1beta1VirtualMachinePoolSelectors } from './V1beta1VirtualMachinePoolSelectors';

export interface V1beta1VirtualMachinePoolSelectionPolicy {
  /** Selectors is a list of selection policies. */
  selectors?: V1beta1VirtualMachinePoolSelectors;
  /** SortPolicy is a catch-all policy [AscendingOrder|DescendingOrder|Newest|Oldest|Random] */
  sortPolicy?: string;
}
