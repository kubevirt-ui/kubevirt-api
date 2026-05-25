import type { V1NodeSelectorRequirement } from './V1NodeSelectorRequirement';

export interface V1NodeSelectorTerm {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: V1NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  matchFields?: V1NodeSelectorRequirement[];
}
