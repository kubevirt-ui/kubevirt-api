import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import type { IoK8sApiResourceV1beta2DeviceAttribute } from './IoK8sApiResourceV1beta2DeviceAttribute';
import type { IoK8sApiResourceV1beta2DeviceCapacity } from './IoK8sApiResourceV1beta2DeviceCapacity';
import type { IoK8sApiResourceV1beta2DeviceCounterConsumption } from './IoK8sApiResourceV1beta2DeviceCounterConsumption';
import type { IoK8sApiResourceV1beta2DeviceTaint } from './IoK8sApiResourceV1beta2DeviceTaint';

/** Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set. */
export interface IoK8sApiResourceV1beta2Device {
  /**
   * AllNodes indicates that all nodes have access to the device.
   *
   * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
   */
  allNodes?: boolean;
  /**
   * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.
   *
   * The maximum number of attributes and capacities combined is 32.
   */
  attributes?: Record<string, IoK8sApiResourceV1beta2DeviceAttribute>;
  /**
   * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
   *
   * The maximum number of attributes and capacities combined is 32.
   */
  capacity?: Record<string, IoK8sApiResourceV1beta2DeviceCapacity>;
  /**
   * ConsumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.
   *
   * There can only be a single entry per counterSet.
   *
   * The total number of device counter consumption entries must be <= 32. In addition, the total number in the entire ResourceSlice must be <= 1024 (for example, 64 devices with 16 counters each).
   */
  consumesCounters?: IoK8sApiResourceV1beta2DeviceCounterConsumption[];
  /** Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label. */
  name: string;
  /**
   * NodeName identifies the node where the device is available.
   *
   * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
   */
  nodeName?: string;
  /**
   * NodeSelector defines the nodes where the device is available.
   *
   * Must use exactly one term.
   *
   * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
   */
  nodeSelector?: IoK8sApiCoreV1NodeSelector;
  /**
   * If specified, these are the driver-defined taints.
   *
   * The maximum number of taints is 4.
   *
   * This is an alpha field and requires enabling the DRADeviceTaints feature gate.
   */
  taints?: IoK8sApiResourceV1beta2DeviceTaint[];
}
