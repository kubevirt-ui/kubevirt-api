import type { K8sIoApiCoreV1Affinity } from './K8sIoApiCoreV1Affinity';
import type { K8sIoApiCoreV1Toleration } from './K8sIoApiCoreV1Toleration';

export interface V1NodePlacement {
  /** affinity enables pod affinity/anti-affinity placement expanding the types of constraints that can be expressed with nodeSelector. affinity is going to be applied to the relevant kind of pods in parallel with nodeSelector See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity */
  affinity?: K8sIoApiCoreV1Affinity;
  /** nodeSelector is the node selector applied to the relevant kind of pods It specifies a map of key-value pairs: for the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well). See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector */
  nodeSelector?: Record<string, string>;
  /** tolerations is a list of tolerations applied to the relevant kind of pods See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info. These are additional tolerations other than default ones. */
  tolerations?: K8sIoApiCoreV1Toleration[];
}
