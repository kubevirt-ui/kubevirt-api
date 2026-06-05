import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import type { IoK8sApiResourceV1beta2DeviceAllocationResult } from './IoK8sApiResourceV1beta2DeviceAllocationResult';

/** AllocationResult contains attributes of an allocated resource. */
export interface IoK8sApiResourceV1beta2AllocationResult {
  /** Devices is the result of allocating devices. */
  devices?: IoK8sApiResourceV1beta2DeviceAllocationResult;
  /** NodeSelector defines where the allocated resources are available. If unset, they are available everywhere. */
  nodeSelector?: IoK8sApiCoreV1NodeSelector;
}
