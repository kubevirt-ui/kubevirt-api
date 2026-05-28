export interface V1VirtualMachineInstanceMigrationSourceState {
  /** The name of the domain on the source libvirt domain */
  domainName?: string;
  /** Namespace used in the name of the source libvirt domain. Can be used to find and modify paths in the domain */
  domainNamespace?: string;
  /** The Source VirtualMachineInstanceMigration object associated with this migration */
  migrationUID?: string;
  /** The source node that the VMI originated on */
  node?: string;
  /** Node selectors needed by the target to start the receiving pod. */
  nodeSelectors?: Record<string, string>;
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
