import type { K8sIoApiCoreV1TypedLocalObjectReference } from './K8sIoApiCoreV1TypedLocalObjectReference';
import type { V1beta1VirtualMachineCloneTemplateFilters } from './V1beta1VirtualMachineCloneTemplateFilters';

export interface V1beta1VirtualMachineCloneSpec {
  /** Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters. */
  annotationFilters?: string[];
  /** Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters. */
  labelFilters?: string[];
  /** NewMacAddresses manually sets that target interfaces' mac addresses. The key is the interface name and the value is the new mac address. If this field is not specified, a new MAC address will be generated automatically, as for any interface that is not included in this map. */
  newMacAddresses?: Record<string, string>;
  /** NewSMBiosSerial manually sets that target's SMbios serial. If this field is not specified, a new serial will be generated automatically. */
  newSMBiosSerial?: string;
  /** Patches holds JSON patches to apply to target. Patches should fit the target's Kind. Example: '{"op": "add", "path": "/spec/template/metadata/labels/example", "value": "new-label"}' */
  patches?: string[];
  /** Source is the object that would be cloned. Currently supported source types are: VirtualMachine of kubevirt.io API group, VirtualMachineSnapshot of snapshot.kubevirt.io API group */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
  /** Target is the outcome of the cloning process. Currently supported source types are: - VirtualMachine of kubevirt.io API group - Empty (nil). If the target is not provided, the target type would default to VirtualMachine and a random name would be generated for the target. The target's name can be viewed by inspecting status "TargetName" field below. */
  target?: K8sIoApiCoreV1TypedLocalObjectReference;
  /**
   * For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
   * @default {}
   */
  template?: V1beta1VirtualMachineCloneTemplateFilters;
  /** VolumeNamePolicy defines how to handle volume naming during the clone operation */
  volumeNamePolicy?: string;
}
