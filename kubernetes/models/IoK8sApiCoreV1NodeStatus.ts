import type { IoK8sApiCoreV1AttachedVolume } from './IoK8sApiCoreV1AttachedVolume';
import type { IoK8sApiCoreV1ContainerImage } from './IoK8sApiCoreV1ContainerImage';
import type { IoK8sApiCoreV1NodeAddress } from './IoK8sApiCoreV1NodeAddress';
import type { IoK8sApiCoreV1NodeCondition } from './IoK8sApiCoreV1NodeCondition';
import type { IoK8sApiCoreV1NodeConfigStatus } from './IoK8sApiCoreV1NodeConfigStatus';
import type { IoK8sApiCoreV1NodeDaemonEndpoints } from './IoK8sApiCoreV1NodeDaemonEndpoints';
import type { IoK8sApiCoreV1NodeFeatures } from './IoK8sApiCoreV1NodeFeatures';
import type { IoK8sApiCoreV1NodeRuntimeHandler } from './IoK8sApiCoreV1NodeRuntimeHandler';
import type { IoK8sApiCoreV1NodeSystemInfo } from './IoK8sApiCoreV1NodeSystemInfo';
import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

export interface IoK8sApiCoreV1NodeStatus {
  /** List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/reference/node/node-status/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP). */
  addresses?: IoK8sApiCoreV1NodeAddress[];
  /** Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. */
  allocatable?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/reference/node/node-status/#capacity */
  capacity?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/reference/node/node-status/#condition */
  conditions?: IoK8sApiCoreV1NodeCondition[];
  /** Status of the config assigned to the node via the dynamic Kubelet config feature. */
  config?: IoK8sApiCoreV1NodeConfigStatus;
  /** Endpoints of daemons running on the Node. */
  daemonEndpoints?: IoK8sApiCoreV1NodeDaemonEndpoints;
  /** Features describes the set of features implemented by the CRI implementation. */
  features?: IoK8sApiCoreV1NodeFeatures;
  /** List of container images on this node */
  images?: IoK8sApiCoreV1ContainerImage[];
  /** Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/reference/node/node-status/#info */
  nodeInfo?: IoK8sApiCoreV1NodeSystemInfo;
  /** NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated. */
  phase?: string;
  /** The available runtime handlers. */
  runtimeHandlers?: IoK8sApiCoreV1NodeRuntimeHandler[];
  /** List of volumes that are attached to the node. */
  volumesAttached?: IoK8sApiCoreV1AttachedVolume[];
  /** List of attachable volumes in use (mounted) by the node. */
  volumesInUse?: string[];
}
