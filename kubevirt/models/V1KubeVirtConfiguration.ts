import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { V1ArchConfiguration } from './V1ArchConfiguration';
import type { V1ChangedBlockTrackingSelectors } from './V1ChangedBlockTrackingSelectors';
import type { V1CommonInstancetypesDeployment } from './V1CommonInstancetypesDeployment';
import type { V1ConfidentialComputeConfiguration } from './V1ConfidentialComputeConfiguration';
import type { V1DeveloperConfiguration } from './V1DeveloperConfiguration';
import type { V1HypervisorConfiguration } from './V1HypervisorConfiguration';
import type { V1InstancetypeConfiguration } from './V1InstancetypeConfiguration';
import type { V1KSMConfiguration } from './V1KSMConfiguration';
import type { V1KubeVirtConfigurationImagePullPolicyEnum } from './V1KubeVirtConfigurationImagePullPolicyEnum';
import type { V1LiveUpdateConfiguration } from './V1LiveUpdateConfiguration';
import type { V1MediatedDevicesConfiguration } from './V1MediatedDevicesConfiguration';
import type { V1MigrationConfiguration } from './V1MigrationConfiguration';
import type { V1NetworkConfiguration } from './V1NetworkConfiguration';
import type { V1PermittedHostDevices } from './V1PermittedHostDevices';
import type { V1PersistentReservationConfiguration } from './V1PersistentReservationConfiguration';
import type { V1ReloadableComponentConfiguration } from './V1ReloadableComponentConfiguration';
import type { V1SMBiosConfiguration } from './V1SMBiosConfiguration';
import type { V1SeccompConfiguration } from './V1SeccompConfiguration';
import type { V1SupportContainerResources } from './V1SupportContainerResources';
import type { V1TLSConfiguration } from './V1TLSConfiguration';
import type { V1VirtTemplateDeployment } from './V1VirtTemplateDeployment';
import type { V1VirtualMachineOptions } from './V1VirtualMachineOptions';

/** KubeVirtConfiguration holds all kubevirt configurations */
export interface V1KubeVirtConfiguration {
  /** AdditionalGuestMemoryOverheadRatio can be used to increase the virtualization infrastructure overhead. This is useful, since the calculation of this overhead is not accurate and cannot be entirely known in advance. The ratio that is being set determines by which factor to increase the overhead calculated by Kubevirt. A higher ratio means that the VMs would be less compromised by node pressures, but would mean that fewer VMs could be scheduled to a node. If not set, the default is 1. */
  additionalGuestMemoryOverheadRatio?: string;
  /** ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart. */
  apiConfiguration?: V1ReloadableComponentConfiguration;
  architectureConfiguration?: V1ArchConfiguration;
  /** When set, AutoCPULimitNamespaceLabelSelector will set a CPU limit on virt-launcher for VMIs running inside namespaces that match the label selector. The CPU limit will equal the number of requested vCPUs. This setting does not apply to VMIs with dedicated CPUs. */
  autoCPULimitNamespaceLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** ChangedBlockTrackingLabelSelectors defines label selectors. VMs matching these selectors will have changed block tracking enabled. Enabling changedBlockTracking is mandatory for performing storage-agnostic backups and incremental backups. */
  changedBlockTrackingLabelSelectors?: V1ChangedBlockTrackingSelectors;
  /** CommonInstancetypesDeployment controls the deployment of common-instancetypes resources */
  commonInstancetypesDeployment?: V1CommonInstancetypesDeployment;
  /** QGS configuration for attestation on the Intel TDX Platform */
  confidentialCompute?: V1ConfidentialComputeConfiguration;
  /** ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart. */
  controllerConfiguration?: V1ReloadableComponentConfiguration;
  cpuModel?: string;
  /**
   * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
   *
   * The serialization format is:
   *
   * ``` <quantity>        ::= <signedNumber><suffix>
   *
   * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
   *
   * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
   *
   * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
   *
   * <decimalSI>       ::= m | "" | k | M | G | T | P | E
   *
   * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
   *
   * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
   *
   * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
   *
   * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
   *
   * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
   *
   * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
   *
   * The sign will be omitted unless the number is negative.
   *
   * Examples:
   *
   * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
   *
   * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
   *
   * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
   *
   * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
   */
  cpuRequest?: K8sIoApimachineryPkgApiResourceQuantity;
  defaultRuntimeClass?: string;
  /** DeveloperConfiguration holds developer options */
  developerConfiguration?: V1DeveloperConfiguration;
  /** Deprecated. Use architectureConfiguration instead. */
  emulatedMachines?: string[];
  /** EvictionStrategy defines at the cluster level if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain. If the VirtualMachineInstance specific field is set it overrides the cluster level one. */
  evictionStrategy?: string;
  /** ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart. */
  handlerConfiguration?: V1ReloadableComponentConfiguration;
  /** Hypervisors holds information regarding the hypervisor configurations supported on this cluster. */
  hypervisors?: V1HypervisorConfiguration[];
  /**
   * Possible enum values:
   *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
   *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
   *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
   */
  imagePullPolicy?: V1KubeVirtConfigurationImagePullPolicyEnum;
  /** Instancetype configuration */
  instancetype?: V1InstancetypeConfiguration;
  /** KSMConfiguration holds the information regarding the enabling the KSM in the nodes (if available). */
  ksmConfiguration?: V1KSMConfiguration;
  /** LiveUpdateConfiguration holds defaults for live update features */
  liveUpdateConfiguration?: V1LiveUpdateConfiguration;
  /** Deprecated. Use architectureConfiguration instead. */
  machineType?: string;
  /** MediatedDevicesConfiguration holds information about MDEV types to be defined, if available */
  mediatedDevicesConfiguration?: V1MediatedDevicesConfiguration;
  /** @format int64 */
  memBalloonStatsPeriod?: number;
  /** MigrationConfiguration holds migration options. Can be overridden for specific groups of VMs though migration policies. Visit https://kubevirt.io/user-guide/operations/migration_policies/ for more information. */
  migrations?: V1MigrationConfiguration;
  /** deprecated */
  minCPUModel?: string;
  /** NetworkConfiguration holds network options */
  network?: V1NetworkConfiguration;
  obsoleteCPUModels?: Record<string, boolean>;
  /** Deprecated. Use architectureConfiguration instead. */
  ovmfPath?: string;
  /** PermittedHostDevices holds information about devices allowed for passthrough */
  permittedHostDevices?: V1PermittedHostDevices;
  /** PersistentReservationConfiguration controls the deployment of additional resources required for using SCSI persistent reservation in VMs */
  persistentReservationConfiguration?: V1PersistentReservationConfiguration;
  /** RoleAggregationStrategy controls whether RBAC cluster roles should be aggregated to the default Kubernetes roles (admin, edit, view). When set to "AggregateToDefault" (default) or not specified, the aggregate-to-* labels are added to the cluster roles. When set to "Manual", the labels are not added, and roles will not be aggregated to the default roles. Setting this field to "Manual" requires the OptOutRoleAggregation feature gate to be enabled. This is an Alpha feature and subject to change. */
  roleAggregationStrategy?: string;
  /** SeccompConfiguration holds Seccomp configuration for Kubevirt components */
  seccompConfiguration?: V1SeccompConfiguration;
  selinuxLauncherType?: string;
  smbios?: V1SMBiosConfiguration;
  /** SupportContainerResources specifies the resource requirements for various types of supporting containers such as container disks/virtiofs/sidecars and hotplug attachment pods. If omitted a sensible default will be supplied. */
  supportContainerResources?: V1SupportContainerResources[];
  /** deprecated */
  supportedGuestAgentVersions?: string[];
  /** TLSConfiguration holds TLS options */
  tlsConfiguration?: V1TLSConfiguration;
  /** VirtTemplateDeployment controls the deployment of virt-template components */
  virtTemplateDeployment?: V1VirtTemplateDeployment;
  /** @format int32 */
  virtualMachineInstancesPerNode?: number;
  /** VirtualMachineOptions holds the cluster level information regarding the virtual machine. */
  virtualMachineOptions?: V1VirtualMachineOptions;
  /** VMRolloutStrategy defines how live-updatable fields, like CPU sockets, memory, tolerations, and affinity, are propagated from a VM to its VMI. */
  vmRolloutStrategy?: string;
  /** VMStateStorageClass is the name of the storage class to use for the PVCs created to preserve VM state, like TPM. */
  vmStateStorageClass?: string;
  /** ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart. */
  webhookConfiguration?: V1ReloadableComponentConfiguration;
}
