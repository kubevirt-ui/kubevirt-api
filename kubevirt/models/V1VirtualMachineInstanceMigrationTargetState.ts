import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

export interface V1VirtualMachineInstanceMigrationTargetState {
  /** The UID of the target attachment pod for hotplug volumes */
  attachmentPodUID?: string;
  /** If the VMI requires dedicated CPUs, this field will hold the dedicated CPU set on the target node */
  cpuSet?: number[];
  /** The list of ports opened for live migration on the destination node */
  directMigrationNodePorts?: Record<string, number>;
  /** The Target Node has seen the Domain Start Event */
  domainDetected?: boolean;
  /** The name of the domain on the source libvirt domain */
  domainName?: string;
  /** Namespace used in the name of the source libvirt domain. Can be used to find and modify paths in the domain */
  domainNamespace?: string;
  /** The timestamp at which the target node detects the domain is active */
  domainReadyTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** The Source VirtualMachineInstanceMigration object associated with this migration */
  migrationUID?: string;
  /** The source node that the VMI originated on */
  node?: string;
  /** The address of the target node to use for the migration */
  nodeAddress?: string;
  /** If the VMI requires dedicated CPUs, this field will hold the numa topology on the target node */
  nodeTopology?: string;
  /** If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here */
  persistentStatePVCName?: string;
  /** The source pod that the VMI is originated on */
  pod?: string;
  /** SELinuxContext is the actual SELinux context of the pod */
  selinuxContext?: string;
  /** The ip address/fqdn:port combination to use to synchronize the VMI with the target. */
  syncAddress?: string;
  /** VirtualMachineInstanceUID is the UID of the target virtual machine instance */
  virtualMachineInstanceUID?: string;
}
