import type { V1Affinity } from './V1Affinity';
import type { V1Toleration } from './V1Toleration';

export interface V1beta1ComponentConfig {
  /** affinity enables pod affinity/anti-affinity placement expanding the types of constraints that can be expressed with nodeSelector. affinity is going to be applied to the relevant kind of pods in parallel with nodeSelector See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity */
  affinity?: V1Affinity;
  /**
   * ApiserverReplicas set Replicas for cdi-apiserver
   * @format int32
   */
  apiServerReplicas?: number;
  /**
   * DeploymentReplicas set Replicas for cdi-deployment
   * @format int32
   */
  deploymentReplicas?: number;
  /** nodeSelector is the node selector applied to the relevant kind of pods It specifies a map of key-value pairs: for the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well). See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector */
  nodeSelector?: Record<string, string>;
  /** tolerations is a list of tolerations applied to the relevant kind of pods See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info. These are additional tolerations other than default ones. */
  tolerations?: V1Toleration[];
  /**
   * UploadproxyReplicas set Replicas for cdi-uploadproxy
   * @format int32
   */
  uploadProxyReplicas?: number;
}
