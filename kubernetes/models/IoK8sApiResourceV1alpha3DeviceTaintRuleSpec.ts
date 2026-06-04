import type { IoK8sApiResourceV1alpha3DeviceTaint } from './IoK8sApiResourceV1alpha3DeviceTaint';
import type { IoK8sApiResourceV1alpha3DeviceTaintSelector } from './IoK8sApiResourceV1alpha3DeviceTaintSelector';

/** DeviceTaintRuleSpec specifies the selector and one taint. */
export interface IoK8sApiResourceV1alpha3DeviceTaintRuleSpec {
  /** DeviceSelector defines which device(s) the taint is applied to. All selector criteria must be satified for a device to match. The empty selector matches all devices. Without a selector, no devices are matches. */
  deviceSelector?: IoK8sApiResourceV1alpha3DeviceTaintSelector;
  /** The taint that gets applied to matching devices. */
  taint: IoK8sApiResourceV1alpha3DeviceTaint;
}
