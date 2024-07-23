/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  IoK8sApiCoreV1Affinity,
  IoK8sApiCoreV1AffinityFromJSON,
  IoK8sApiCoreV1AffinityToJSON,
  IoK8sApiCoreV1Container,
  IoK8sApiCoreV1ContainerFromJSON,
  IoK8sApiCoreV1ContainerToJSON,
  IoK8sApiCoreV1EphemeralContainer,
  IoK8sApiCoreV1EphemeralContainerFromJSON,
  IoK8sApiCoreV1EphemeralContainerToJSON,
  IoK8sApiCoreV1HostAlias,
  IoK8sApiCoreV1HostAliasFromJSON,
  IoK8sApiCoreV1HostAliasToJSON,
  IoK8sApiCoreV1LocalObjectReference,
  IoK8sApiCoreV1LocalObjectReferenceFromJSON,
  IoK8sApiCoreV1LocalObjectReferenceToJSON,
  IoK8sApiCoreV1PodDNSConfig,
  IoK8sApiCoreV1PodDNSConfigFromJSON,
  IoK8sApiCoreV1PodDNSConfigToJSON,
  IoK8sApiCoreV1PodOS,
  IoK8sApiCoreV1PodOSFromJSON,
  IoK8sApiCoreV1PodOSToJSON,
  IoK8sApiCoreV1PodReadinessGate,
  IoK8sApiCoreV1PodReadinessGateFromJSON,
  IoK8sApiCoreV1PodReadinessGateToJSON,
  IoK8sApiCoreV1PodResourceClaim,
  IoK8sApiCoreV1PodResourceClaimFromJSON,
  IoK8sApiCoreV1PodResourceClaimToJSON,
  IoK8sApiCoreV1PodSchedulingGate,
  IoK8sApiCoreV1PodSchedulingGateFromJSON,
  IoK8sApiCoreV1PodSchedulingGateToJSON,
  IoK8sApiCoreV1PodSecurityContext,
  IoK8sApiCoreV1PodSecurityContextFromJSON,
  IoK8sApiCoreV1PodSecurityContextToJSON,
  IoK8sApiCoreV1Toleration,
  IoK8sApiCoreV1TolerationFromJSON,
  IoK8sApiCoreV1TolerationToJSON,
  IoK8sApiCoreV1TopologySpreadConstraint,
  IoK8sApiCoreV1TopologySpreadConstraintFromJSON,
  IoK8sApiCoreV1TopologySpreadConstraintToJSON,
  IoK8sApiCoreV1Volume,
  IoK8sApiCoreV1VolumeFromJSON,
  IoK8sApiCoreV1VolumeToJSON,
} from './';

/**
 * PodSpec is a description of a pod.
 * @export
 * @interface IoK8sApiCoreV1PodSpec
 */
export interface IoK8sApiCoreV1PodSpec {
  /**
   * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
   * @type {number}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  activeDeadlineSeconds?: number;
  /**
   *
   * @type {IoK8sApiCoreV1Affinity}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  affinity?: IoK8sApiCoreV1Affinity;
  /**
   * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  automountServiceAccountToken?: boolean;
  /**
   * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
   * @type {Array<IoK8sApiCoreV1Container>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  containers: Array<IoK8sApiCoreV1Container>;
  /**
   *
   * @type {IoK8sApiCoreV1PodDNSConfig}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  dnsConfig?: IoK8sApiCoreV1PodDNSConfig;
  /**
   * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  dnsPolicy?: string;
  /**
   * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  enableServiceLinks?: boolean;
  /**
   * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.
   * @type {Array<IoK8sApiCoreV1EphemeralContainer>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  ephemeralContainers?: Array<IoK8sApiCoreV1EphemeralContainer>;
  /**
   * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified.
   * @type {Array<IoK8sApiCoreV1HostAlias>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostAliases?: Array<IoK8sApiCoreV1HostAlias>;
  /**
   * Use the host's ipc namespace. Optional: Default to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostIPC?: boolean;
  /**
   * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostNetwork?: boolean;
  /**
   * Use the host's pid namespace. Optional: Default to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostPID?: boolean;
  /**
   * Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostUsers?: boolean;
  /**
   * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  hostname?: string;
  /**
   * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
   * @type {Array<IoK8sApiCoreV1LocalObjectReference>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  imagePullSecrets?: Array<IoK8sApiCoreV1LocalObjectReference>;
  /**
   * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
   * @type {Array<IoK8sApiCoreV1Container>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  initContainers?: Array<IoK8sApiCoreV1Container>;
  /**
   * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  nodeName?: string;
  /**
   * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  nodeSelector?: { [key: string]: string };
  /**
   *
   * @type {IoK8sApiCoreV1PodOS}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  os?: IoK8sApiCoreV1PodOS;
  /**
   * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  overhead?: { [key: string]: string };
  /**
   * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  preemptionPolicy?: string;
  /**
   * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
   * @type {number}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  priority?: number;
  /**
   * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  priorityClassName?: string;
  /**
   * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
   * @type {Array<IoK8sApiCoreV1PodReadinessGate>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  readinessGates?: Array<IoK8sApiCoreV1PodReadinessGate>;
  /**
   * ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.
   *
   * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
   *
   * This field is immutable.
   * @type {Array<IoK8sApiCoreV1PodResourceClaim>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  resourceClaims?: Array<IoK8sApiCoreV1PodResourceClaim>;
  /**
   * Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  restartPolicy?: string;
  /**
   * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  runtimeClassName?: string;
  /**
   * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  schedulerName?: string;
  /**
   * SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.
   *
   * SchedulingGates can only be set at pod creation time, and be removed only afterwards.
   * @type {Array<IoK8sApiCoreV1PodSchedulingGate>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  schedulingGates?: Array<IoK8sApiCoreV1PodSchedulingGate>;
  /**
   *
   * @type {IoK8sApiCoreV1PodSecurityContext}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  securityContext?: IoK8sApiCoreV1PodSecurityContext;
  /**
   * DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  serviceAccount?: string;
  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  serviceAccountName?: string;
  /**
   * If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  setHostnameAsFQDN?: boolean;
  /**
   * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  shareProcessNamespace?: boolean;
  /**
   * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  subdomain?: string;
  /**
   * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
   * @type {number}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  terminationGracePeriodSeconds?: number;
  /**
   * If specified, the pod's tolerations.
   * @type {Array<IoK8sApiCoreV1Toleration>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  tolerations?: Array<IoK8sApiCoreV1Toleration>;
  /**
   * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
   * @type {Array<IoK8sApiCoreV1TopologySpreadConstraint>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  topologySpreadConstraints?: Array<IoK8sApiCoreV1TopologySpreadConstraint>;
  /**
   * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
   * @type {Array<IoK8sApiCoreV1Volume>}
   * @memberof IoK8sApiCoreV1PodSpec
   */
  volumes?: Array<IoK8sApiCoreV1Volume>;
}

export function IoK8sApiCoreV1PodSpecFromJSON(json: any): IoK8sApiCoreV1PodSpec {
  return IoK8sApiCoreV1PodSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PodSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    activeDeadlineSeconds: !exists(json, 'activeDeadlineSeconds')
      ? undefined
      : json['activeDeadlineSeconds'],
    affinity: !exists(json, 'affinity')
      ? undefined
      : IoK8sApiCoreV1AffinityFromJSON(json['affinity']),
    automountServiceAccountToken: !exists(json, 'automountServiceAccountToken')
      ? undefined
      : json['automountServiceAccountToken'],
    containers: (json['containers'] as Array<any>).map(IoK8sApiCoreV1ContainerFromJSON),
    dnsConfig: !exists(json, 'dnsConfig')
      ? undefined
      : IoK8sApiCoreV1PodDNSConfigFromJSON(json['dnsConfig']),
    dnsPolicy: !exists(json, 'dnsPolicy') ? undefined : json['dnsPolicy'],
    enableServiceLinks: !exists(json, 'enableServiceLinks')
      ? undefined
      : json['enableServiceLinks'],
    ephemeralContainers: !exists(json, 'ephemeralContainers')
      ? undefined
      : (json['ephemeralContainers'] as Array<any>).map(IoK8sApiCoreV1EphemeralContainerFromJSON),
    hostAliases: !exists(json, 'hostAliases')
      ? undefined
      : (json['hostAliases'] as Array<any>).map(IoK8sApiCoreV1HostAliasFromJSON),
    hostIPC: !exists(json, 'hostIPC') ? undefined : json['hostIPC'],
    hostNetwork: !exists(json, 'hostNetwork') ? undefined : json['hostNetwork'],
    hostPID: !exists(json, 'hostPID') ? undefined : json['hostPID'],
    hostUsers: !exists(json, 'hostUsers') ? undefined : json['hostUsers'],
    hostname: !exists(json, 'hostname') ? undefined : json['hostname'],
    imagePullSecrets: !exists(json, 'imagePullSecrets')
      ? undefined
      : (json['imagePullSecrets'] as Array<any>).map(IoK8sApiCoreV1LocalObjectReferenceFromJSON),
    initContainers: !exists(json, 'initContainers')
      ? undefined
      : (json['initContainers'] as Array<any>).map(IoK8sApiCoreV1ContainerFromJSON),
    nodeName: !exists(json, 'nodeName') ? undefined : json['nodeName'],
    nodeSelector: !exists(json, 'nodeSelector') ? undefined : json['nodeSelector'],
    os: !exists(json, 'os') ? undefined : IoK8sApiCoreV1PodOSFromJSON(json['os']),
    overhead: !exists(json, 'overhead') ? undefined : json['overhead'],
    preemptionPolicy: !exists(json, 'preemptionPolicy') ? undefined : json['preemptionPolicy'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    priorityClassName: !exists(json, 'priorityClassName') ? undefined : json['priorityClassName'],
    readinessGates: !exists(json, 'readinessGates')
      ? undefined
      : (json['readinessGates'] as Array<any>).map(IoK8sApiCoreV1PodReadinessGateFromJSON),
    resourceClaims: !exists(json, 'resourceClaims')
      ? undefined
      : (json['resourceClaims'] as Array<any>).map(IoK8sApiCoreV1PodResourceClaimFromJSON),
    restartPolicy: !exists(json, 'restartPolicy') ? undefined : json['restartPolicy'],
    runtimeClassName: !exists(json, 'runtimeClassName') ? undefined : json['runtimeClassName'],
    schedulerName: !exists(json, 'schedulerName') ? undefined : json['schedulerName'],
    schedulingGates: !exists(json, 'schedulingGates')
      ? undefined
      : (json['schedulingGates'] as Array<any>).map(IoK8sApiCoreV1PodSchedulingGateFromJSON),
    securityContext: !exists(json, 'securityContext')
      ? undefined
      : IoK8sApiCoreV1PodSecurityContextFromJSON(json['securityContext']),
    serviceAccount: !exists(json, 'serviceAccount') ? undefined : json['serviceAccount'],
    serviceAccountName: !exists(json, 'serviceAccountName')
      ? undefined
      : json['serviceAccountName'],
    setHostnameAsFQDN: !exists(json, 'setHostnameAsFQDN') ? undefined : json['setHostnameAsFQDN'],
    shareProcessNamespace: !exists(json, 'shareProcessNamespace')
      ? undefined
      : json['shareProcessNamespace'],
    subdomain: !exists(json, 'subdomain') ? undefined : json['subdomain'],
    terminationGracePeriodSeconds: !exists(json, 'terminationGracePeriodSeconds')
      ? undefined
      : json['terminationGracePeriodSeconds'],
    tolerations: !exists(json, 'tolerations')
      ? undefined
      : (json['tolerations'] as Array<any>).map(IoK8sApiCoreV1TolerationFromJSON),
    topologySpreadConstraints: !exists(json, 'topologySpreadConstraints')
      ? undefined
      : (json['topologySpreadConstraints'] as Array<any>).map(
          IoK8sApiCoreV1TopologySpreadConstraintFromJSON,
        ),
    volumes: !exists(json, 'volumes')
      ? undefined
      : (json['volumes'] as Array<any>).map(IoK8sApiCoreV1VolumeFromJSON),
  };
}

export function IoK8sApiCoreV1PodSpecToJSON(value?: IoK8sApiCoreV1PodSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    activeDeadlineSeconds: value.activeDeadlineSeconds,
    affinity: IoK8sApiCoreV1AffinityToJSON(value.affinity),
    automountServiceAccountToken: value.automountServiceAccountToken,
    containers: (value.containers as Array<any>).map(IoK8sApiCoreV1ContainerToJSON),
    dnsConfig: IoK8sApiCoreV1PodDNSConfigToJSON(value.dnsConfig),
    dnsPolicy: value.dnsPolicy,
    enableServiceLinks: value.enableServiceLinks,
    ephemeralContainers:
      value.ephemeralContainers === undefined
        ? undefined
        : (value.ephemeralContainers as Array<any>).map(IoK8sApiCoreV1EphemeralContainerToJSON),
    hostAliases:
      value.hostAliases === undefined
        ? undefined
        : (value.hostAliases as Array<any>).map(IoK8sApiCoreV1HostAliasToJSON),
    hostIPC: value.hostIPC,
    hostNetwork: value.hostNetwork,
    hostPID: value.hostPID,
    hostUsers: value.hostUsers,
    hostname: value.hostname,
    imagePullSecrets:
      value.imagePullSecrets === undefined
        ? undefined
        : (value.imagePullSecrets as Array<any>).map(IoK8sApiCoreV1LocalObjectReferenceToJSON),
    initContainers:
      value.initContainers === undefined
        ? undefined
        : (value.initContainers as Array<any>).map(IoK8sApiCoreV1ContainerToJSON),
    nodeName: value.nodeName,
    nodeSelector: value.nodeSelector,
    os: IoK8sApiCoreV1PodOSToJSON(value.os),
    overhead: value.overhead,
    preemptionPolicy: value.preemptionPolicy,
    priority: value.priority,
    priorityClassName: value.priorityClassName,
    readinessGates:
      value.readinessGates === undefined
        ? undefined
        : (value.readinessGates as Array<any>).map(IoK8sApiCoreV1PodReadinessGateToJSON),
    resourceClaims:
      value.resourceClaims === undefined
        ? undefined
        : (value.resourceClaims as Array<any>).map(IoK8sApiCoreV1PodResourceClaimToJSON),
    restartPolicy: value.restartPolicy,
    runtimeClassName: value.runtimeClassName,
    schedulerName: value.schedulerName,
    schedulingGates:
      value.schedulingGates === undefined
        ? undefined
        : (value.schedulingGates as Array<any>).map(IoK8sApiCoreV1PodSchedulingGateToJSON),
    securityContext: IoK8sApiCoreV1PodSecurityContextToJSON(value.securityContext),
    serviceAccount: value.serviceAccount,
    serviceAccountName: value.serviceAccountName,
    setHostnameAsFQDN: value.setHostnameAsFQDN,
    shareProcessNamespace: value.shareProcessNamespace,
    subdomain: value.subdomain,
    terminationGracePeriodSeconds: value.terminationGracePeriodSeconds,
    tolerations:
      value.tolerations === undefined
        ? undefined
        : (value.tolerations as Array<any>).map(IoK8sApiCoreV1TolerationToJSON),
    topologySpreadConstraints:
      value.topologySpreadConstraints === undefined
        ? undefined
        : (value.topologySpreadConstraints as Array<any>).map(
            IoK8sApiCoreV1TopologySpreadConstraintToJSON,
          ),
    volumes:
      value.volumes === undefined
        ? undefined
        : (value.volumes as Array<any>).map(IoK8sApiCoreV1VolumeToJSON),
  };
}
