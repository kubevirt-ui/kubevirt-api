import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import type { IoK8sApiResourceV1alpha3DeviceAttribute } from './IoK8sApiResourceV1alpha3DeviceAttribute';
import type { IoK8sApiResourceV1alpha3DeviceCounterConsumption } from './IoK8sApiResourceV1alpha3DeviceCounterConsumption';
import type { IoK8sApiResourceV1alpha3DeviceTaint } from './IoK8sApiResourceV1alpha3DeviceTaint';
import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

/** BasicDevice defines one device instance. */
export interface IoK8sApiResourceV1alpha3BasicDevice {
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
  attributes?: Record<string, IoK8sApiResourceV1alpha3DeviceAttribute>;
  /**
   * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
   *
   * The maximum number of attributes and capacities combined is 32.
   */
  capacity?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /**
   * ConsumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.
   *
   * There can only be a single entry per counterSet.
   *
   * The total number of device counter consumption entries must be <= 32. In addition, the total number in the entire ResourceSlice must be <= 1024 (for example, 64 devices with 16 counters each).
   */
  consumesCounters?: IoK8sApiResourceV1alpha3DeviceCounterConsumption[];
  /**
   * NodeName identifies the node where the device is available.
   *
   * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
   */
  nodeName?: string;
  /**
   * NodeSelector defines the nodes where the device is available.
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
  taints?: IoK8sApiResourceV1alpha3DeviceTaint[];
}
