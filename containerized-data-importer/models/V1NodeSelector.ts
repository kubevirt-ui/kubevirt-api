import type { V1NodeSelectorTerm } from './V1NodeSelectorTerm';

export interface V1NodeSelector {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: V1NodeSelectorTerm[];
}
