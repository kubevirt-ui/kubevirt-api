import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineInstancePresetSpec } from './V1VirtualMachineInstancePresetSpec';

/**
 * Deprecated for removal in v2, please use VirtualMachineInstanceType and VirtualMachinePreference instead.
 *
 * VirtualMachineInstancePreset defines a VMI spec.domain to be applied to all VMIs that match the provided label selector More info: https://kubevirt.io/user-guide/virtual_machines/presets/#overrides
 */
export interface V1VirtualMachineInstancePreset {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * VirtualMachineInstance Spec contains the VirtualMachineInstance specification.
   * @default {}
   */
  spec?: V1VirtualMachineInstancePresetSpec;
}
