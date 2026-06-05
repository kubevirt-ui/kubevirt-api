import type { IoK8sApiResourceV1alpha3DeviceClassSpec } from './IoK8sApiResourceV1alpha3DeviceClassSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.
 *
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IoK8sApiResourceV1alpha3DeviceClass {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec defines what can be allocated and how to configure it.
   *
   * This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.
   *
   * Changing the spec automatically increments the metadata.generation number.
   */
  spec: IoK8sApiResourceV1alpha3DeviceClassSpec;
}
