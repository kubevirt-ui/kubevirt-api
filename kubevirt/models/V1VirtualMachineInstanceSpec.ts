import type { K8sIoApiCoreV1Affinity } from './K8sIoApiCoreV1Affinity';
import type { K8sIoApiCoreV1PodDNSConfig } from './K8sIoApiCoreV1PodDNSConfig';
import type { K8sIoApiCoreV1PodResourceClaim } from './K8sIoApiCoreV1PodResourceClaim';
import type { K8sIoApiCoreV1Toleration } from './K8sIoApiCoreV1Toleration';
import type { K8sIoApiCoreV1TopologySpreadConstraint } from './K8sIoApiCoreV1TopologySpreadConstraint';
import type { V1AccessCredential } from './V1AccessCredential';
import type { V1DomainSpec } from './V1DomainSpec';
import type { V1Network } from './V1Network';
import type { V1Probe } from './V1Probe';
import type { V1UtilityVolume } from './V1UtilityVolume';
import type { V1Volume } from './V1Volume';

export interface V1VirtualMachineInstanceSpec {
  /** Specifies a set of public keys to inject into the vm guest */
  accessCredentials?: V1AccessCredential[];
  /** If affinity is specifies, obey all the affinity rules */
  affinity?: K8sIoApiCoreV1Affinity;
  /** Specifies the architecture of the vm guest you are attempting to run. Defaults to the compiled architecture of the KubeVirt components */
  architecture?: string;
  /** Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy. */
  dnsConfig?: K8sIoApiCoreV1PodDNSConfig;
  /**
   * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
   *
   * Possible enum values:
   *  - `"ClusterFirst"` indicates that the pod should use cluster DNS first unless hostNetwork is true, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
   *  - `"ClusterFirstWithHostNet"` indicates that the pod should use cluster DNS first, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
   *  - `"Default"` indicates that the pod should use the default (as determined by kubelet) DNS settings.
   *  - `"None"` indicates that the pod should use empty DNS settings. DNS parameters such as nameservers and search paths should be defined via DNSConfig.
   */
  dnsPolicy?: "ClusterFirst" | "ClusterFirstWithHostNet" | "Default" | "None";
  /**
   * Specification of the desired behavior of the VirtualMachineInstance on the host.
   * @default {}
   */
  domain: V1DomainSpec;
  /** EvictionStrategy describes the strategy to follow when a node drain occurs. The possible options are: - "None": No action will be taken, according to the specified 'RunStrategy' the VirtualMachine will be restarted or shutdown. - "LiveMigrate": the VirtualMachineInstance will be migrated instead of being shutdown. - "LiveMigrateIfPossible": the same as "LiveMigrate" but only if the VirtualMachine is Live-Migratable, otherwise it will behave as "None". - "External": the VirtualMachineInstance will be protected and `vmi.Status.EvacuationNodeName` will be set on eviction. This is mainly useful for cluster-api-provider-kubevirt (capk) which needs a way for VMI's to be blocked from eviction, yet signal capk that eviction has been called on the VMI so the capk controller can handle tearing the VMI down. Details can be found in the commit description https://github.com/kubevirt/kubevirt/commit/c1d77face705c8b126696bac9a3ee3825f27f1fa. */
  evictionStrategy?: string;
  /** Specifies the hostname of the vmi If not specified, the hostname will be set to the name of the vmi, if dhcp or cloud-init is configured properly. */
  hostname?: string;
  /** Periodic probe of VirtualMachineInstance liveness. VirtualmachineInstances will be stopped if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  livenessProbe?: V1Probe;
  /** List of networks that can be attached to a vm's virtual interface. */
  networks?: V1Network[];
  /** NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector?: Record<string, string>;
  /** If specified, indicates the pod's priority. If not specified, the pod priority will be default or zero if there is no default. */
  priorityClassName?: string;
  /** Periodic probe of VirtualMachineInstance service readiness. VirtualmachineInstances will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  readinessProbe?: V1Probe;
  /**
   * ResourceClaims define which ResourceClaims must be allocated and reserved before the VMI, hence virt-launcher pod is allowed to start. The resources will be made available to the domain which consumes them by name.
   *
   * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate in kubernetes
   *  https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/
   * This field should only be configured if one of the feature-gates GPUsWithDRA or HostDevicesWithDRA is enabled. This feature is in alpha.
   */
  resourceClaims?: K8sIoApiCoreV1PodResourceClaim[];
  /** If specified, the VMI will be dispatched by specified scheduler. If not specified, the VMI will be dispatched by default scheduler. */
  schedulerName?: string;
  /** StartStrategy can be set to "Paused" if Virtual Machine should be started in paused state. */
  startStrategy?: string;
  /** If specified, the fully qualified vmi hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the vmi will not have a domainname at all. The DNS entry will resolve to the vmi, no matter if the vmi itself can pick up a hostname. */
  subdomain?: string;
  /**
   * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
   * @format int64
   */
  terminationGracePeriodSeconds?: number;
  /** If toleration is specified, obey all the toleration rules. */
  tolerations?: K8sIoApiCoreV1Toleration[];
  /** TopologySpreadConstraints describes how a group of VMIs will be spread across a given topology domains. K8s scheduler will schedule VMI pods in a way which abides by the constraints. */
  topologySpreadConstraints?: K8sIoApiCoreV1TopologySpreadConstraint[];
  /** List of utility volumes that can be mounted to the vmi virt-launcher pod without having a matching disk in the domain. Used to collect data for various operational workflows. */
  utilityVolumes?: V1UtilityVolume[];
  /** List of volumes that can be mounted by disks belonging to the vmi. */
  volumes?: V1Volume[];
}
