import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import type { IoK8sApiResourceV1alpha3DeviceAllocationResult } from './IoK8sApiResourceV1alpha3DeviceAllocationResult';

export interface IoK8sApiResourceV1alpha3AllocationResult {
  /** Devices is the result of allocating devices. */
  devices?: IoK8sApiResourceV1alpha3DeviceAllocationResult;
  /** NodeSelector defines where the allocated resources are available. If unset, they are available everywhere. */
  nodeSelector?: IoK8sApiCoreV1NodeSelector;
}
