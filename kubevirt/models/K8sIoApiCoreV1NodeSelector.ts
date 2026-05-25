import type { K8sIoApiCoreV1NodeSelectorTerm } from './K8sIoApiCoreV1NodeSelectorTerm';

export interface K8sIoApiCoreV1NodeSelector {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: K8sIoApiCoreV1NodeSelectorTerm[];
}
