import type { V1CPUTopology } from './V1CPUTopology';
import type { V1ChangedBlockTrackingStatus } from './V1ChangedBlockTrackingStatus';
import type { V1KernelBootStatus } from './V1KernelBootStatus';
import type { V1Machine } from './V1Machine';
import type { V1MemoryStatus } from './V1MemoryStatus';
import type { V1StorageMigratedVolumeInfo } from './V1StorageMigratedVolumeInfo';
import type { V1TopologyHints } from './V1TopologyHints';
import type { V1VirtualMachineInstanceCondition } from './V1VirtualMachineInstanceCondition';
import type { V1VirtualMachineInstanceGuestOSInfo } from './V1VirtualMachineInstanceGuestOSInfo';
import type { V1VirtualMachineInstanceMigrationState } from './V1VirtualMachineInstanceMigrationState';
import type { V1VirtualMachineInstanceNetworkInterface } from './V1VirtualMachineInstanceNetworkInterface';
import type { V1VirtualMachineInstancePhaseTransitionTimestamp } from './V1VirtualMachineInstancePhaseTransitionTimestamp';
import type { V1VolumeStatus } from './V1VolumeStatus';

/** VirtualMachineInstanceStatus represents information about the status of a VirtualMachineInstance. Status may trail the actual state of a system. */
export type V1VirtualMachineInstanceStatus = {
  /**
   * VSOCKCID is used to track the allocated VSOCK CID in the VM.
   * @format int64
   */
  VSOCKCID?: number;
  /** ActivePods is a mapping of pod UID to node name. It is possible for multiple pods to be running for a single VMI during migration. */
  activePods?: Record<string, string>;
  /** ChangedBlockTracking represents the status of the changedBlockTracking */
  changedBlockTracking?: V1ChangedBlockTrackingStatus;
  /** Conditions are specific points in VirtualMachineInstance's pod runtime. */
  conditions?: V1VirtualMachineInstanceCondition[];
  /** CurrentCPUTopology specifies the current CPU topology used by the VM workload. Current topology may differ from the desired topology in the spec while CPU hotplug takes place. */
  currentCPUTopology?: V1CPUTopology;
  /** EvacuationNodeName is used to track the eviction process of a VMI. It stores the name of the node that we want to evacuate. It is meant to be used by KubeVirt core components only and can't be set or modified by users. */
  evacuationNodeName?: string;
  /** FSFreezeStatus indicates whether a freeze operation was requested for the guest filesystem. It will be set to "frozen" if the request was made, or unset otherwise. This does not reflect the actual state of the guest filesystem. */
  fsFreezeStatus?: string;
  /**
   * Guest OS Information
   * @default {}
   */
  guestOSInfo?: V1VirtualMachineInstanceGuestOSInfo;
  /** Interfaces represent the details of available network interfaces. */
  interfaces?: V1VirtualMachineInstanceNetworkInterface[];
  /** KernelBootStatus contains info about the kernelBootContainer */
  kernelBootStatus?: V1KernelBootStatus;
  /** LauncherContainerImageVersion indicates what container image is currently active for the vmi. */
  launcherContainerImageVersion?: string;
  /** Machine shows the final resulting qemu machine type. This can be different than the machine type selected in the spec, due to qemus machine type alias mechanism. */
  machine?: V1Machine;
  /** Memory shows various informations about the VirtualMachine memory. */
  memory?: V1MemoryStatus;
  /** MigratedVolumes lists the source and destination volumes during the volume migration */
  migratedVolumes?: V1StorageMigratedVolumeInfo[];
  /** Represents the method using which the vmi can be migrated: live migration or block migration */
  migrationMethod?: string;
  /** Represents the status of a live migration */
  migrationState?: V1VirtualMachineInstanceMigrationState;
  /** This represents the migration transport */
  migrationTransport?: string;
  /** NodeName is the name where the VirtualMachineInstance is currently running. */
  nodeName?: string;
  /** Phase is the status of the VirtualMachineInstance in kubernetes world. It is not the VirtualMachineInstance status, but partially correlates to it. */
  phase?: string;
  /** PhaseTransitionTimestamp is the timestamp of when the last phase change occurred */
  phaseTransitionTimestamps?: V1VirtualMachineInstancePhaseTransitionTimestamp[];
  /**
   * The Quality of Service (QOS) classification assigned to the virtual machine instance based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
   *
   * Possible enum values:
   *  - `"BestEffort"` is the BestEffort qos class.
   *  - `"Burstable"` is the Burstable qos class.
   *  - `"Guaranteed"` is the Guaranteed qos class.
   */
  qosClass?: "BestEffort" | "Burstable" | "Guaranteed";
  /** A brief CamelCase message indicating details about why the VMI is in this state. e.g. 'NodeUnresponsive' */
  reason?: string;
  /**
   * RuntimeUser is used to determine what user will be used in launcher
   * @format int64
   * @default 0
   */
  runtimeUser?: number;
  /** SELinuxContext is the actual SELinux context of the virt-launcher pod */
  selinuxContext?: string;
  topologyHints?: V1TopologyHints;
  /** VirtualMachineRevisionName is used to get the vm revision of the vmi when doing an online vm snapshot */
  virtualMachineRevisionName?: string;
  /** VolumeStatus contains the statuses of all the volumes */
  volumeStatus?: V1VolumeStatus[];
} | null;
