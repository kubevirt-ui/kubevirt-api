import type { V1NodeSelectorTerm } from './V1NodeSelectorTerm';

export interface V1PreferredSchedulingTerm {
  /**
   * A node selector term, associated with the corresponding weight.
   * @default {}
   */
  preference: V1NodeSelectorTerm;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   * @format int32
   * @default 0
   */
  weight: number;
}
