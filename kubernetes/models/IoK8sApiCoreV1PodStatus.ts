import type { IoK8sApiCoreV1ContainerStatus } from './IoK8sApiCoreV1ContainerStatus';
import type { IoK8sApiCoreV1HostIP } from './IoK8sApiCoreV1HostIP';
import type { IoK8sApiCoreV1PodCondition } from './IoK8sApiCoreV1PodCondition';
import type { IoK8sApiCoreV1PodIP } from './IoK8sApiCoreV1PodIP';
import type { IoK8sApiCoreV1PodResourceClaimStatus } from './IoK8sApiCoreV1PodResourceClaimStatus';
import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiCoreV1PodStatus {
  /** Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  conditions?: IoK8sApiCoreV1PodCondition[];
  /** Statuses of containers in this pod. Each container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
  containerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  /** Statuses for any ephemeral containers that have run in this pod. Each ephemeral container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
  ephemeralContainerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  /** hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod */
  hostIP?: string;
  /** hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod. */
  hostIPs?: IoK8sApiCoreV1HostIP[];
  /** Statuses of init containers in this pod. The most recent successful non-restartable init container will have ready = true, the most recently started container will have startTime set. Each init container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status */
  initContainerStatuses?: IoK8sApiCoreV1ContainerStatus[];
  /** A human readable message indicating details about why the pod is in this condition. */
  message?: string;
  /** nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled. */
  nominatedNodeName?: string;
  /**
   * If set, this represents the .metadata.generation that the pod status was set based upon. This is an alpha field. Enable PodObservedGenerationTracking to be able to use this field.
   * @format int64
   */
  observedGeneration?: number;
  /**
   * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:
   *
   * Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.
   *
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
   */
  phase?: string;
  /** podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated. */
  podIP?: string;
  /** podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet. */
  podIPs?: IoK8sApiCoreV1PodIP[];
  /** The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes */
  qosClass?: string;
  /** A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted' */
  reason?: string;
  /** Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed" Deprecated: Resize status is moved to two pod conditions PodResizePending and PodResizeInProgress. PodResizePending will track states where the spec has been resized, but the Kubelet has not yet allocated the resources. PodResizeInProgress will track in-progress resizes, and should be present whenever allocated resources != acknowledged resources. */
  resize?: string;
  /** Status of resource claims. */
  resourceClaimStatuses?: IoK8sApiCoreV1PodResourceClaimStatus[];
  /** RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod. */
  startTime?: IoK8sApimachineryPkgApisMetaV1Time;
}
