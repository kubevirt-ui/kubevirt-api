import type { V1InterfaceBindingMigration } from './V1InterfaceBindingMigration';
import type { V1ResourceRequirementsWithoutClaims } from './V1ResourceRequirementsWithoutClaims';

export interface V1InterfaceBindingPlugin {
  /** ComputeResourceOverhead specifies the resource overhead that should be added to the compute container when using the binding. version: v1alphav1 */
  computeResourceOverhead?: V1ResourceRequirementsWithoutClaims;
  /** DomainAttachmentType is a standard domain network attachment method kubevirt supports. Supported values: "tap", "managedTap" (since v1.4). The standard domain attachment can be used instead or in addition to the sidecarImage. version: 1alphav1 */
  domainAttachmentType?: string;
  /** DownwardAPI specifies what kind of data should be exposed to the binding plugin sidecar. Supported values: "device-info" version: v1alphav1 */
  downwardAPI?: string;
  /** Migration means the VM using the plugin can be safely migrated version: 1alphav1 */
  migration?: V1InterfaceBindingMigration;
  /** NetworkAttachmentDefinition references to a NetworkAttachmentDefinition CR object. Format: <name>, <namespace>/<name>. If namespace is not specified, VMI namespace is assumed. version: 1alphav1 */
  networkAttachmentDefinition?: string;
  /** SidecarImage references a container image that runs in the virt-launcher pod. The sidecar handles (libvirt) domain configuration and optional services. version: 1alphav1 */
  sidecarImage?: string;
}
